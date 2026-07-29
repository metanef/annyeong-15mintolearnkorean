// --- NAVIGATION & MODE SWITCHING ---
function goHome() {
    document.querySelector('main').classList.replace('max-w-2xl', 'max-w-5xl');
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('learning-container').classList.add('hidden');
    document.getElementById('training-container').classList.add('hidden');
    document.getElementById('review-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('nav-controls').classList.add('hidden');
}

function startLearning() {
    document.querySelector('main').classList.replace('max-w-5xl', 'max-w-2xl');
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('learning-container').classList.remove('hidden');
    document.getElementById('nav-controls').classList.remove('hidden');
    currentFlowIndex = 0;
    renderCurrentStep();
}

let trainingScore = 0;
let trainingAttemptsForCurrent = 0;

function startTraining() {
    document.querySelector('main').classList.replace('max-w-5xl', 'max-w-2xl');
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('training-container').classList.remove('hidden');
    document.getElementById('nav-controls').classList.remove('hidden');
    document.getElementById('progress-container').classList.add('hidden');
    currentTrainingIndex = 0;
    trainingScore = 0;
    loadTrainingStep();
}

function startReview() {
    document.querySelector('main').classList.replace('max-w-5xl', 'max-w-2xl');
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('review-container').classList.remove('hidden');
    document.getElementById('nav-controls').classList.remove('hidden');
    document.getElementById('progress-container').classList.add('hidden');
    loadReviewTable();
}

let currentFlowIndex = 0;
let currentLessonList = [];
let currentLessonSubIndex = 0;

function renderCurrentStep() {
    const step = flowSteps[currentFlowIndex];
    if (step.type === 'slide') {
        document.getElementById('intro-screen').classList.remove('hidden');
        document.getElementById('lesson-screen').classList.add('hidden');
        document.getElementById('progress-container').classList.add('hidden');

        document.getElementById('intro-content').innerHTML = `
            <div class="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-3xl font-black mb-6">
                ${step.emoji}
            </div>
            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">${step.title}</h2>
            <p class="text-slate-500 text-sm md:text-base leading-relaxed">${step.text}</p>
        `;

        document.getElementById('intro-prev-btn').classList.toggle('hidden', currentFlowIndex === 0);
        document.getElementById('intro-next-btn').innerText = "Start Section →";
    } else if (step.type === 'lesson') {
        document.getElementById('intro-screen').classList.add('hidden');
        document.getElementById('lesson-screen').classList.remove('hidden');
        document.getElementById('progress-container').classList.remove('hidden');

        currentLessonList = step.items;
        currentLessonSubIndex = 0;
        loadLessonItem();
    }
}

function loadLessonItem() {
    if (currentLessonSubIndex < currentLessonList.length) {
        const item = currentLessonList[currentLessonSubIndex];
        document.getElementById('lesson-badge').innerText = item.type;
        document.getElementById('lesson-count-badge').innerText = `${currentLessonSubIndex + 1} / ${currentLessonList.length}`;
        document.getElementById('char-target').innerText = item.char;
        document.getElementById('canvas-guide-char').innerText = item.char;
        document.getElementById('char-bg-icon').innerText = item.icon;
        document.getElementById('char-name-label').innerText = item.name;
        document.getElementById('char-sound-label').innerText = "Pronunciation : " + item.sound;
        document.getElementById('char-mnemonic').innerHTML = item.mnemonic;

        updateProgressGlobal();
        playCurrentAudioItem(item);
    } else {
        currentFlowIndex++;
        if (currentFlowIndex < flowSteps.length) {
            renderCurrentStep();
        } else {
            showLearningEndScreen();
        }
    }
}

function nextSlide() {
    if (currentFlowIndex < flowSteps.length - 1) {
        currentFlowIndex++;
        renderCurrentStep();
    } else {
        showLearningEndScreen();
    }
}

function prevSlide() {
    if (currentFlowIndex > 0) {
        currentFlowIndex--;
        renderCurrentStep();
    }
}

function nextLessonStep() {
    currentLessonSubIndex++;
    loadLessonItem();
}

function updateProgressGlobal() {
    const progress = ((currentFlowIndex + 1) / flowSteps.length) * 100;
    document.getElementById('progress-text').innerText = `Step ${currentFlowIndex + 1} / ${flowSteps.length}`;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function playCurrentAudio() {
    if (currentLessonList[currentLessonSubIndex]) {
        playCurrentAudioItem(currentLessonList[currentLessonSubIndex]);
    }
}

function playCurrentAudioItem(item) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(item.spoken);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.7;
        const voices = window.speechSynthesis.getVoices();
        const koreanVoice = voices.find(v => v.lang.includes('ko'));
        if (koreanVoice) utterance.voice = koreanVoice;
        window.speechSynthesis.speak(utterance);
    }
}

function showLearningEndScreen() {
    document.getElementById('learning-container').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('end-title').innerText = "Learning Course Completed!";
    document.getElementById('end-desc').innerText = "You have completed all official Hangul Jamo characters!";
}

// --- REVIEW TABLE UTILITIES ---
function toggleEvalMode() {
    const isChecked = document.getElementById('eval-toggle').checked;
    const table = document.getElementById('review-table');
    const toggleBg = document.getElementById('eval-toggle-bg');
    const toggleDot = document.getElementById('eval-toggle-dot');
    
    if (isChecked) {
        table.classList.add('self-eval-active');
        toggleBg.classList.replace('bg-slate-200', 'bg-emerald-500');
        toggleDot.classList.add('translate-x-4');
    } else {
        table.classList.remove('self-eval-active');
        toggleBg.classList.replace('bg-emerald-500', 'bg-slate-200');
        toggleDot.classList.remove('translate-x-4');
    }
}

function loadReviewTable() {
    const table = document.getElementById('review-table');
    if (table.querySelector('thead')) return; // Already loaded

    let html = `
        <thead>
            <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                <th class="p-4 rounded-tl-xl w-1/4">Jamo</th>
                <th class="p-4 w-1/4">Name</th>
                <th class="p-4 w-1/3">Pronunciation</th>
                <th class="p-4 rounded-tr-xl text-center w-1/6">Audio</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
    `;

    flowSteps.forEach(step => {
        if (step.type === 'lesson') {
            html += `
                <tr class="bg-slate-100/50">
                    <td colspan="4" class="p-3 text-xs font-bold text-slate-700 uppercase tracking-widest text-center">
                        ${step.group.replace('_', ' ')}
                    </td>
                </tr>
            `;
            step.items.forEach(item => {
                // Escape item properties for safe HTML injection
                const spokenArgs = `'${item.spoken}'`;
                const charArgs = `'${item.char}'`;
                
                html += `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="p-4">
                            <button onclick="openDrawModal(${charArgs})" class="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-2xl font-black text-slate-800 hover:border-indigo-400 hover:text-indigo-600 transition-all shadow-sm" title="Practice drawing">
                                ${item.char}
                            </button>
                        </td>
                        <td class="p-4 font-semibold text-slate-700 eval-hide">${item.name}</td>
                        <td class="p-4 text-slate-500 eval-hide">${item.sound}</td>
                        <td class="p-4 text-center">
                            <button onclick="playSpecificAudio(${spokenArgs})" class="w-10 h-10 inline-flex items-center justify-center bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full transition-colors focus:outline-none" title="Listen">
                                🔊
                            </button>
                        </td>
                    </tr>
                `;
            });
        }
    });

    html += `</tbody>`;
    table.innerHTML = html;
}

function playSpecificAudio(spokenText) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.7;
        const voices = window.speechSynthesis.getVoices();
        const koreanVoice = voices.find(v => v.lang.includes('ko'));
        if (koreanVoice) utterance.voice = koreanVoice;
        window.speechSynthesis.speak(utterance);
    }
}

let currentTrainingIndex = 0;

function loadTrainingStep() {
    trainingAttemptsForCurrent = 0;
    const container = document.getElementById('training-content');
    const nextBtn = document.getElementById('training-next-btn');
    const feedback = document.getElementById('training-feedback');
    const progressText = document.getElementById('training-progress-text');
    feedback.innerText = "";
    nextBtn.classList.add('hidden');

    if (currentTrainingIndex >= trainingExercises.length) {
        document.getElementById('training-container').classList.add('hidden');
        document.getElementById('end-screen').classList.remove('hidden');
        document.getElementById('end-title').innerText = "Training Completed! ⚡";
        document.getElementById('end-desc').innerText = `You scored ${trainingScore} out of ${trainingExercises.length}!`;
        return;
    }

    if (progressText) {
        progressText.innerText = `Question ${currentTrainingIndex + 1} / ${trainingExercises.length}`;
    }

    const ex = trainingExercises[currentTrainingIndex];
    let targetHtml = `<span class="text-5xl font-black text-amber-600 tracking-wider bg-amber-50 px-6 py-4 rounded-2xl inline-block border border-amber-100">${ex.target}</span>`;
    
    if (ex.type === 'audio-to-hangul') {
        targetHtml = `
            <button onclick="playSpecificAudio('${ex.spoken}')" class="text-5xl font-black text-amber-600 bg-amber-50 px-8 py-6 rounded-3xl inline-block border-4 border-amber-200 hover:bg-amber-100 hover:scale-105 transition-all shadow-lg cursor-pointer focus:outline-none">
                🎧 Play Audio
            </button>
        `;
    }

    container.innerHTML = `
        <h3 class="font-bold text-lg text-slate-900 mb-2">${ex.question}</h3>
        <div class="my-6">
            ${targetHtml}
        </div>
        <div id="training-options" class="grid grid-cols-2 gap-3 mb-4"></div>
    `;

    const optionsContainer = document.getElementById('training-options');
    ex.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = "bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-200 text-slate-800 font-bold py-4 rounded-xl transition-all cursor-pointer text-sm sm:text-base";
        btn.innerText = choice;
        btn.onclick = () => checkTrainingAnswer(choice, ex, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkTrainingAnswer(selected, ex, btnElem) {
    const feedback = document.getElementById('training-feedback');
    const nextBtn = document.getElementById('training-next-btn');
    trainingAttemptsForCurrent++;

    if (selected === ex.answer) {
        if (trainingAttemptsForCurrent === 1) {
            trainingScore++;
        }
        btnElem.classList.remove('bg-slate-50', 'hover:bg-amber-50', 'text-slate-800', 'border-slate-200');
        btnElem.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
        
        feedback.className = "text-sm font-semibold h-6 my-3 text-emerald-600";
        feedback.innerText = "Correct! 🎉";
        nextBtn.classList.remove('hidden');
        
        // Auto play audio for correct answer if it's hangul
        if (ex.type === 'text-to-hangul' || ex.type === 'audio-to-hangul') {
            playSpecificAudio(ex.answer);
        } else if (ex.type === 'hangul-to-text') {
            playSpecificAudio(ex.target);
        }

        const buttons = document.querySelectorAll('#training-options button');
        buttons.forEach(b => b.disabled = true);
    } else {
        btnElem.classList.remove('bg-slate-50', 'hover:bg-amber-50');
        btnElem.classList.add('bg-rose-100', 'text-rose-600', 'border-rose-300', 'opacity-50');
        btnElem.disabled = true;
        
        feedback.className = "text-sm font-semibold h-6 my-3 text-rose-500";
        feedback.innerText = "Incorrect. Try again!";
    }
}

function nextTrainingStep() {
    currentTrainingIndex++;
    loadTrainingStep();
}

// --- HISTORY MODULE (MODULE 4) ---
let currentHistoryIndex = 0;

function startHistory() {
    document.querySelector('main').classList.replace('max-w-5xl', 'max-w-2xl');
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('nav-controls').classList.remove('hidden');
    document.getElementById('progress-container').classList.add('hidden');
    
    currentHistoryIndex = 0;
    renderHistoryStep();
}

function renderHistoryStep() {
    const step = historySteps[currentHistoryIndex];
    document.getElementById('history-counter').innerText = currentHistoryIndex + 1;
    document.getElementById('history-total').innerText = historySteps.length;

    const content = document.getElementById('history-content');
    content.innerHTML = `
        <div class="text-7xl mb-6 mt-4 drop-shadow-md transform transition-transform hover:scale-110">${step.emoji}</div>
        <h2 class="text-2xl font-black text-slate-800 mb-6">${step.title}</h2>
        <div class="bg-rose-50/50 rounded-2xl p-6 border border-rose-100 text-left mx-auto max-w-lg shadow-inner">
            <p class="text-slate-700 font-medium text-base leading-relaxed">
                ${step.content}
            </p>
        </div>
    `;

    // Manage buttons
    const prevBtn = document.getElementById('history-prev-btn');
    const nextBtn = document.getElementById('history-next-btn');
    const endBtn = document.getElementById('history-end-btn');

    if (currentHistoryIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    if (currentHistoryIndex === historySteps.length - 1) {
        nextBtn.classList.add('hidden');
        endBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        endBtn.classList.add('hidden');
    }
}

function nextHistoryStep() {
    if (currentHistoryIndex < historySteps.length - 1) {
        currentHistoryIndex++;
        renderHistoryStep();
    }
}

function prevHistoryStep() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        renderHistoryStep();
    }
}

// --- DRAWING CANVAS UTILITIES ---
const canvas = document.getElementById('paint-canvas');
const ctx = canvas.getContext('2d');
let painting = false;

function startPosition(e) { painting = true; draw(e); }
function finishedPosition() { painting = false; ctx.beginPath(); }
function draw(e) {
    if (!painting) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#4f46e5';
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchstart', startPosition);
canvas.addEventListener('touchend', finishedPosition);
canvas.addEventListener('touchmove', draw);

function clearCanvas() { ctx.clearRect(0, 0, canvas.width, canvas.height); }
function openDrawModal(charTarget = null) { 
    clearCanvas(); 
    if(charTarget) document.getElementById('canvas-guide-char').innerText = charTarget;
    document.getElementById('draw-modal').classList.remove('hidden'); 
}
function closeDrawModal() { document.getElementById('draw-modal').classList.add('hidden'); }

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// --- INITIALIZATION ---
document.getElementById('current-year').textContent = new Date().getFullYear();
