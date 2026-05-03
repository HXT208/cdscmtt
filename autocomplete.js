(function () {
    'use strict';

    const MIN_CHARS   = 2;   // Số ký tự tối thiểu để hiện gợi ý
    const MAX_RESULTS = 7;   // Số gợi ý tối đa
    const DEBOUNCE_MS = 200; // Độ trễ sau khi ngừng gõ (ms)

    let activeIndex    = -1;
    let debounceTimer  = null;
    let currentResults = [];

    const CSS = `
        #ac-dropdown {
            position: absolute;
            top: calc(100% + 6px);
            left: 0; right: 0;
            background: #fff;
            border: 1.5px solid #e2e8f0;
            border-radius: 14px;
            box-shadow: 0 12px 40px rgba(0,0,0,0.13);
            max-height: 380px;
            overflow-y: auto;
            z-index: 9999;
            padding: 6px;
            list-style: none;
            margin: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;
            transition: opacity 0.15s ease, transform 0.15s ease;
        }
        #ac-dropdown.ac-open {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
        #ac-dropdown::-webkit-scrollbar { width: 4px; }
        #ac-dropdown::-webkit-scrollbar-track { background: transparent; }
        #ac-dropdown::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }

        .ac-header {
            font-size: 10px;
            font-weight: 700;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.07em;
            padding: 4px 10px 6px;
            font-family: 'Inter', sans-serif;
            list-style: none;
        }
        .ac-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 9px 10px;
            border-radius: 9px;
            cursor: pointer;
            transition: background 0.1s;
            outline: none;
            font-family: 'Inter', sans-serif;
            list-style: none;
        }
        .ac-item:hover,
        .ac-item.ac-active { background: #fff1f2; }

        .ac-icon {
            flex-shrink: 0;
            width: 30px; height: 30px;
            border-radius: 8px;
            background: #fee2e2;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .ac-icon svg {
            width: 14px; height: 14px;
            stroke: #dc2626; fill: none;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        .ac-body { flex: 1; min-width: 0; }
        .ac-name {
            font-size: 13px;
            font-weight: 600;
            color: #1e293b;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.4;
        }
        .ac-name mark {
            background: transparent;
            color: #dc2626;
            font-weight: 800;
        }
        .ac-kw {
            font-size: 11px;
            color: #94a3b8;
            margin-top: 2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .ac-badge {
            flex-shrink: 0;
            font-size: 10px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 20px;
            background: #f1f5f9;
            color: #64748b;
            white-space: nowrap;
        }
        .ac-empty {
            text-align: center;
            padding: 18px 12px;
            font-size: 13px;
            color: #94a3b8;
            font-family: 'Inter', sans-serif;
            list-style: none;
        }
    `;

    function init() {
        const input = document.getElementById('searchInput');
        if (!input) return;

        const styleEl = document.createElement('style');
        styleEl.textContent = CSS;
        document.head.appendChild(styleEl);

        const wrapper = input.closest('div.relative');
        if (!wrapper) return;
        wrapper.style.zIndex = '50';

        const dropdown = document.createElement('ul');
        dropdown.id = 'ac-dropdown';
        dropdown.setAttribute('role', 'listbox');
        dropdown.setAttribute('aria-label', 'Gợi ý tìm kiếm');
        wrapper.appendChild(dropdown);

        input.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => handleInput(input, dropdown), DEBOUNCE_MS);
        });

        input.addEventListener('keydown', (e) => handleKey(e, input, dropdown));

        input.addEventListener('focus', () => {
            if (input.value.trim().length >= MIN_CHARS) handleInput(input, dropdown);
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) closeDropdown(dropdown);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeDropdown(dropdown);
        });
    }

    function handleInput(input, dropdown) {
        const query = norm(input.value);
        if (query.length < MIN_CHARS) { closeDropdown(dropdown); return; }
        currentResults = doSearch(query);
        renderDropdown(dropdown, currentResults, query, input);
    }

    function doSearch(query) {
        if (typeof pcErrors === 'undefined' || !Array.isArray(pcErrors)) return [];

        const results = [];
        for (const err of pcErrors) {
            let score = 0;
            let matchedKw = null;

            if (norm(err.name).includes(query)) score += 3;

            for (const kw of (err.keywords || [])) {
                if (norm(kw).includes(query)) {
                    score += 1;
                    if (norm(kw) !== norm(err.name)) matchedKw = kw;
                    break;
                }
            }

            if (score > 0) results.push({ err, score, matchedKw });
        }

        results.sort((a, b) =>
            b.score - a.score || a.err.name.localeCompare(b.err.name, 'vi')
        );
        return results.slice(0, MAX_RESULTS);
    }

    function renderDropdown(dropdown, results, query, input) {
        activeIndex = -1;
        dropdown.innerHTML = '';

        if (results.length === 0) {
            dropdown.innerHTML = `
                <li class="ac-empty">
                    Không có gợi ý cho "<strong>${esc(input.value)}</strong>"<br>
                    <span style="font-size:11px;margin-top:4px;display:block">Thử từ khóa khác hoặc nhấn Enter</span>
                </li>`;
            openDropdown(dropdown);
            return;
        }

        const header = document.createElement('li');
        header.className = 'ac-header';
        header.textContent = `${results.length} gợi ý phù hợp`;
        dropdown.appendChild(header);

        results.forEach(({ err, matchedKw }, idx) => {
            const li = document.createElement('li');
            li.className = 'ac-item';
            li.setAttribute('role', 'option');
            li.dataset.idx = idx;

            li.innerHTML = `
                <div class="ac-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                </div>
                <div class="ac-body">
                    <div class="ac-name">${hlMark(err.name, query)}</div>
                    ${matchedKw ? `<div class="ac-kw">${esc(matchedKw)}</div>` : ''}
                </div>
                ${err.category ? `<span class="ac-badge">${esc(err.category)}</span>` : ''}
            `;

            li.addEventListener('mousedown', (e) => {
                e.preventDefault();
                pick(input, dropdown, err.name);
            });

            li.addEventListener('mouseenter', () => setActive(dropdown, idx));

            dropdown.appendChild(li);
        });

        openDropdown(dropdown);
    }

    function handleKey(e, input, dropdown) {
        if (!dropdown.classList.contains('ac-open')) return;
        const items = dropdown.querySelectorAll('.ac-item');
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = (activeIndex + 1) % items.length;
            setActive(dropdown, activeIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = (activeIndex - 1 + items.length) % items.length;
            setActive(dropdown, activeIndex);
        } else if (e.key === 'Enter') {
            if (activeIndex >= 0 && currentResults[activeIndex]) {
                e.preventDefault();
                pick(input, dropdown, currentResults[activeIndex].err.name);
            } else {
                closeDropdown(dropdown);
            }
        }
    }

    function pick(input, dropdown, name) {
        input.value = name;
        closeDropdown(dropdown);

        if (typeof executeSearch === 'function') {
            executeSearch();
        } else {
            input.dispatchEvent(new Event('input'));
        }

        setTimeout(() => {
            const rc = document.getElementById('resultContainer');
            if (rc) rc.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
    }


    function norm(str) {
        return (str || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    }

    function esc(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function hlMark(text, query) {
        const escaped = esc(text);
        const normText = norm(text);
        const start = normText.indexOf(query);
        if (start === -1) return escaped;

        const queryChars = query.split('').join('[\\s\\S]{0,2}?');
        try {
            return escaped.replace(
                new RegExp(`(${esc(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'i'),
                '<mark>$1</mark>'
            );
        } catch {
            return escaped;
        }
    }

    function setActive(dropdown, idx) {
        activeIndex = idx;
        dropdown.querySelectorAll('.ac-item').forEach((el, i) => {
            el.classList.toggle('ac-active', i === idx);
        });
    }

    function openDropdown(dropdown)  { dropdown.classList.add('ac-open'); }
    function closeDropdown(dropdown) { dropdown.classList.remove('ac-open'); activeIndex = -1; }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();