const searchInput = document.getElementById('searchInput');
const resultContainer = document.getElementById('resultContainer');

searchInput.addEventListener('input', executeSearch);

function executeSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length === 0) {
        resultContainer.innerHTML = '';
        return;
    }

    resultContainer.innerHTML = [1,2].map(() => `
        <div class="skeleton mb-4" style="height:76px"></div>
    `).join('');

    setTimeout(() => {
        const searchTerms = query.split(/\s+/);
        const matchedErrors = pcErrors.filter(error => {
            const searchableText = [
                error.name,
                ...(error.keywords || []),
                ...(Array.isArray(error.symptoms) ? error.symptoms : [error.symptoms])
            ].join(" ").toLowerCase();
            return searchTerms.every(term => searchableText.includes(term));
        });
        displayResults(matchedErrors);
    }, 80);
}

window.switchMedia = function(index, type) {
    const imgEl = document.getElementById(`media-img-${index}`);
    const vidEl = document.getElementById(`media-vid-${index}`);
    const btnImg = document.getElementById(`btn-img-${index}`);
    const btnVid = document.getElementById(`btn-vid-${index}`);

    imgEl.classList.add('hidden');
    vidEl.classList.add('hidden');
    
    btnImg.className = 'w-full h-full bg-white text-red-600 border border-red-200 hover:bg-red-50 rounded-md text-[10px] font-bold py-2 transition-all';
    btnVid.className = 'w-full h-full bg-white text-red-600 border border-red-200 hover:bg-red-50 rounded-md text-[10px] font-bold py-2 transition-all';

    if(type === 'img') {
        imgEl.classList.remove('hidden');
        btnImg.className = 'w-full h-full bg-red-600 text-white border border-red-600 hover:bg-red-700 rounded-md text-[10px] font-bold py-2 transition-all shadow-sm';
    } else if(type === 'vid') {
        vidEl.classList.remove('hidden');
        btnVid.className = 'w-full h-full bg-red-600 text-white border border-red-600 hover:bg-red-700 rounded-md text-[10px] font-bold py-2 transition-all shadow-sm';
    }
}

window.toggleFullScreen = function(elementId) {
    const elem = document.getElementById(elementId);
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => console.log(err.message));
    } else {
        document.exitFullscreen();
    }
}

if (!document.getElementById('search-anim-style')) {
    const s = document.createElement('style');
    s.id = 'search-anim-style';
    s.textContent = `
        @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        .result-card {
            opacity: 0;
            animation: fadeSlideIn 0.3s ease forwards;
        }
        @keyframes shimmer {
            0%   { background-position: -600px 0; }
            100% { background-position: 600px 0; }
        }
        .skeleton {
            background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
            background-size: 600px 100%;
            animation: shimmer 1.2s infinite;
            border-radius: 12px;
        }
    `;
    document.head.appendChild(s);
}

function displayResults(errors) {
    resultContainer.innerHTML = ''; 

    if (errors.length === 0) {
        resultContainer.innerHTML = `<div class="bg-white p-8 rounded-xl text-center text-slate-400 font-bold shadow-sm text-base">Không tìm thấy dữ liệu.</div>`;
        return;
    }

    errors.forEach((error, index) => {
        const imageUrl = (error.image && error.image !== "def" && error.image.trim() !== '') ? error.image : 'https://via.placeholder.com/600x338/f8fafc/ef4444?text=CHƯA+CÓ+ẢNH';
        const audioUrl = (error.audio && error.audio !== "def" && error.audio.trim() !== '') ? error.audio : null;
        const videoUrl = (typeof error.video === 'string' && error.video.includes('http')) ? error.video.trim() : null;

        const displayCost = (error.estimatedCost === "def" || !error.estimatedCost) ? "Liên hệ" : error.estimatedCost;

        const stepsHtml = (error.diagnosisSteps || []).map(step => `<li class="mb-1.5">· ${step}</li>`).join('');
        let symptomsHtml = Array.isArray(error.symptoms) ? error.symptoms.map(item => `<li class="mb-1.5">> ${item}</li>`).join('') : `<li>${error.symptoms || 'Đang cập nhật...'}</li>`;
        let fixHtml = Array.isArray(error.fix) ? error.fix.map(item => `<li class="mb-1.5">• ${item}</li>`).join('') : `<li>${error.fix || 'Đang cập nhật...'}</li>`;

        let diffText = error.difficulty || "Đang cập nhật";
        let diffLower = diffText.toLowerCase();

        let diffBgColor = "bg-emerald-50 border-emerald-200 text-emerald-700";
        let tooltipText = "Dễ: Không yêu cầu kiến thức chuyên môn, ai cũng làm được.";
        if (diffLower.includes('khó')) {
            diffBgColor = "bg-red-50 border-red-200 text-red-700";
            tooltipText = "Khó: Yêu cầu kỹ thuật viên có đào tạo, am hiểu mạch điện, sơ đồ mainboard.";
        } else if (diffLower.includes('trung bình')) {
            diffBgColor = "bg-amber-50 border-amber-200 text-amber-700";
            tooltipText = "Trung bình: Yêu cầu hiểu biết về hệ thống, từng thao tác phần cứng/mềm.";
        }

        const collapseBlock = document.createElement('div');
        collapseBlock.className = 'result-card collapse collapse-arrow bg-white border border-slate-200 shadow-sm rounded-xl mb-4 overflow-visible';
        collapseBlock.style.animationDelay = `${index * 60}ms`;
        
        collapseBlock.innerHTML = `
            <input type="radio" name="error-accordion" ${index === 0 ? 'checked' : ''} /> 
            <div class="collapse-title flex items-center justify-between pr-10 pl-5 py-4 min-h-0">
                <div class="flex flex-col gap-2">
                    <span class="bg-slate-100 text-slate-500 border border-slate-200 font-bold text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-widest w-fit shadow-sm">
                        ${error.category || 'Chưa phân loại'}
                    </span>
                    <h2 class="text-[15px] md:text-base font-extrabold text-slate-800 uppercase leading-tight">${error.name}</h2>
                </div>
            </div>
            
            <div class="collapse-content bg-white border-t border-dashed border-slate-300 p-0 overflow-visible">
                <div class="p-4 md:p-6 flex flex-col md:flex-row gap-5" id="print-content-${index}">
                    
                    <div class="md:w-2/5 flex flex-col gap-4">
                        <div class="grid grid-cols-2 gap-2 w-full">
                            <div class="tooltip tooltip-bottom md:tooltip-right z-20 flex w-full h-full" data-tip="${tooltipText}">
                                <div class="w-full h-full ${diffBgColor} border font-bold text-[10px] py-2 px-2 uppercase tracking-tight cursor-help shadow-sm flex items-center justify-center gap-1 rounded-md text-center leading-snug">
                                    Mức độ: ${diffText}
                                    <svg class="w-3.5 h-3.5 opacity-80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                            </div>
                            
                            <div class="w-full h-full border border-slate-200 bg-white font-bold text-[10px] py-2 px-2 uppercase tracking-tight text-slate-600 shadow-sm flex items-center justify-center rounded-md text-center leading-snug">
                                CHI PHÍ ƯỚC TÍNH: <br class="hidden md:block"/>${displayCost}
                            </div>

                            <button id="btn-img-${index}" onclick="switchMedia(${index}, 'img')" class="w-full h-full bg-red-600 text-white border border-red-600 rounded-md text-[10px] font-bold py-2 transition-all shadow-sm">HÌNH ẢNH</button>
                            <button id="btn-vid-${index}" onclick="switchMedia(${index}, 'vid')" class="w-full h-full bg-white text-red-600 border border-red-200 rounded-md text-[10px] font-bold py-2 transition-all">VIDEO</button>
                        </div>

                        <div class="rounded-lg shadow-inner bg-slate-200 border border-slate-300 flex items-center justify-center aspect-video w-full relative overflow-hidden" id="media-container-${index}">
                            <div id="media-img-${index}" class="w-full h-full relative bg-white">
                                <div class="w-full h-full overflow-hidden flex items-center justify-center bg-slate-100" id="fs-wrapper-${index}">
                                    <img src="${imageUrl}" class="max-w-full max-h-full object-contain" onerror="this.src='https://via.placeholder.com/600x338/f8fafc/ef4444?text=CHƯA+CÓ+ẢNH'"/>
                                </div>
                                <div class="absolute bottom-2 right-2 z-10">
                                    <button onclick="toggleFullScreen('fs-wrapper-${index}')" class="w-7 h-7 flex items-center justify-center text-white bg-slate-900/50 hover:bg-red-600 rounded backdrop-blur-sm">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div id="media-vid-${index}" class="w-full h-full bg-slate-800 hidden relative flex flex-col items-center justify-center">
                                ${videoUrl ? `<iframe class="w-full h-full absolute inset-0" src="${videoUrl}" title="YouTube" frameborder="0" allowfullscreen></iframe>` : `<p class="text-slate-400 font-medium text-xs">Chưa có video</p>`}
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg border border-red-100 p-2 shadow-sm">
                            ${audioUrl ? `<audio controls class="w-full h-8"><source src="${audioUrl}" type="audio/mpeg"></audio>` : `<p class="text-slate-400 text-[11px] italic text-center mt-1">Không có âm thanh chẩn đoán</p>`}
                        </div>
                    </div>

                    <div class="md:w-3/5 flex flex-col relative">
                        <div class="space-y-6">
                            <div class="timeline-item">
                                <div class="timeline-icon"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></div>
                                <h3 class="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Triệu Chứng</h3>
                                <ul class="text-slate-700 text-[13px] font-medium leading-relaxed">${symptomsHtml}</ul>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-icon"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg></div>
                                <h3 class="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Quy Trình Kiểm Tra</h3>
                                <ul class="text-slate-700 text-[13px] leading-relaxed">${stepsHtml}</ul>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-icon bg-red-500 text-white"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
                                <div class="bg-red-50 border border-red-100 rounded-xl p-4 shadow-sm">
                                    <h3 class="text-[11px] font-extrabold text-red-600 uppercase tracking-widest mb-2">Cách Khắc Phục Chi Tiết</h3>
                                    <ul class="text-slate-800 text-[13px] font-bold leading-relaxed">${fixHtml}</ul>
                                </div>
                            </div>
                        </div>

                        <button onclick="printErrorBlock('print-content-${index}', '${error.name.replace(/'/g, "\\'")}')" class="mt-6 w-full btn btn-sm btn-ghost border-slate-200 text-slate-400 font-bold text-[10px] uppercase tracking-wider hover:text-red-600 transition-colors">
                            🖨️ Lưu dưới dạng PDF
                        </button>
                    </div>
                </div>
            </div>
        `;
        resultContainer.appendChild(collapseBlock);
    });
}

window.printErrorBlock = function(divId, errorName) {
    const contentHtml = document.getElementById(divId).innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Phác đồ: ${errorName}</title>
            <style>
                body { font-family: Arial, sans-serif; color: #111; line-height: 1.6; padding: 20px; max-width: 800px; margin: auto; }
                h2 { color: #dc2626; border-bottom: 2px solid #fee2e2; padding-bottom: 10px; text-transform: uppercase; margin-bottom: 20px; }
                h3 { color: #000; margin-top: 25px; font-size: 16px; border-left: 4px solid #dc2626; padding-left: 10px; background: #f8fafc; padding: 5px 10px; }
                ul { padding-left: 20px; margin-top: 5px; font-size: 14px;}
                li { margin-bottom: 8px; }
                button, svg, .tooltip::before, .tooltip::after { display: none !important; }
                .timeline-item::after, .timeline-icon { display: none !important; }
                .timeline-item { padding-left: 0; }
                .grid { display: flex; gap: 10px; margin-bottom: 15px; flex-wrap: wrap; }
                .grid > div { padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; border: 1px solid #cbd5e1; background: #f1f5f9; }
            </style>
        </head>
        <body>
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="margin: 0; color: #b91c1c;">CHẨN ĐOÁN SỰ CỐ MÁY TÍNH</h1>
                <p style="color: #666; font-style: italic; margin-top: 5px; font-size: 13px;">Tài liệu</p>
            </div>
            ${contentHtml}
            <div style="margin-top: 40px; border-top: 1px dashed #ccc; padding-top: 10px; text-align: center; font-size: 12px; color: #666;">
                <i>Tài liệu được xuất ra từ hệ thống cdscmt.id.vn</i>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 500);
}