// --- GAME ĐỌC ĐIỆN TRỞ ---
const colorCodes = [
    { name: "Đen", hex: "#000000", value: 0 }, { name: "Nâu", hex: "#8B4513", value: 1 },
    { name: "Đỏ", hex: "#FF0000", value: 2 }, { name: "Cam", hex: "#FFA500", value: 3 },
    { name: "Vàng", hex: "#FFFF00", value: 4 }, { name: "Xanh lá", hex: "#008000", value: 5 },
    { name: "Xanh dương", hex: "#0000FF", value: 6 }, { name: "Tím", hex: "#800080", value: 7 },
    { name: "Xám", hex: "#808080", value: 8 }, { name: "Trắng", hex: "#FFFFFF", value: 9 }
];

let currentCorrectValue = 0;

window.generateResistor = function() {
    const color1 = colorCodes[Math.floor(Math.random() * 9) + 1]; 
    const color2 = colorCodes[Math.floor(Math.random() * 10)];
    const multiplier = colorCodes[Math.floor(Math.random() * 6)]; 

    document.getElementById('band1').style.backgroundColor = color1.hex;
    document.getElementById('band2').style.backgroundColor = color2.hex;
    document.getElementById('band3').style.backgroundColor = multiplier.hex;

    currentCorrectValue = (color1.value * 10 + color2.value) * Math.pow(10, multiplier.value);
    
    const inputEl = document.getElementById('quizAnswer');
    const feedbackEl = document.getElementById('quizFeedback');
    
    if(inputEl) inputEl.value = '';
    if(feedbackEl) {
        feedbackEl.innerText = '';
        feedbackEl.className = 'mt-4 font-bold text-[15px] leading-tight text-center min-h-[1.5rem]';
    }
}

window.checkQuiz = function() {
    const userAnswer = parseInt(document.getElementById('quizAnswer').value);
    const feedbackEl = document.getElementById('quizFeedback');
    
    if (isNaN(userAnswer)) {
        feedbackEl.innerText = "Vui lòng nhập số!";
        feedbackEl.className = "mt-4 font-bold text-[15px] text-amber-500 text-center min-h-[1.5rem]";
        return;
    }

    if (userAnswer === currentCorrectValue) {
        feedbackEl.innerText = "CHÍNH XÁC!";
        feedbackEl.className = "mt-4 font-bold text-[15px] text-emerald-600 leading-tight text-center animate-bounce min-h-[1.5rem]";
    } else {

        feedbackEl.innerText = `Sai! Đáp án: ${currentCorrectValue} Ω`;
        feedbackEl.className = "mt-4 font-bold text-[15px] text-red-600 leading-tight text-center min-h-[1.5rem]";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const quizInput = document.getElementById('quizAnswer');
    if(quizInput) {
        quizInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                window.checkQuiz(); 
            }
        });
    }
});