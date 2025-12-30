let db = JSON.parse(localStorage.getItem('vks_master_v8')) || { unlocked: {}, pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', limit: 10, qIdx: 0, score: 0, isTest: false };
let timerInt;

function toggleMenu() { document.getElementById('side-menu').classList.toggle('open'); }

function render() {
    const v = document.getElementById('view-classes');
    for (let i = 1; i <= 10; i++) {
        v.innerHTML += `
            <div onclick="selectClass(${i})" class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-500 cursor-pointer text-center font-black text-3xl transition transform hover:-translate-y-1">
                ${i}
                <p class="text-[9px] uppercase text-slate-400 mt-2 tracking-widest">Class</p>
            </div>`;
    }
    document.getElementById('nav-pts').innerText = db.pts;
}

function selectClass(num) {
    active.class = num;
    showView('view-subjects');
    const subs = num >= 9 ? ["Maths", "Physics", "Chemistry", "Biology"] : ["Maths", "Science", "English"];
    document.getElementById('view-subjects').innerHTML = subs.map(s => `
        <div onclick="selectSub('${s}')" class="bg-white p-12 rounded-[2.5rem] shadow-lg text-center cursor-pointer font-black text-2xl border-b-8 border-indigo-100">${s}</div>
    `).join('');
}

function selectSub(sub) {
    active.sub = sub;
    showView('view-chapters');
    const lib = (sub === 'Maths') ? window.mathsData : window.scienceData;
    const chapters = Object.keys(lib[`class${active.class}`] || {});
    
    document.getElementById('view-chapters').innerHTML = chapters.map(ch => `
        <div onclick="selectChapter('${ch}')" class="bg-white p-8 rounded-2xl shadow border-l-8 border-indigo-600 font-bold cursor-pointer hover:bg-indigo-50">${ch}</div>
    `).join('') || "<p class='p-10 text-center col-span-full'>Data coming soon.</p>";
}

function selectChapter(ch) {
    active.ch = ch;
    showView('view-topics');
    const lib = (active.sub === 'Maths') ? window.mathsData : window.scienceData;
    const topics = Object.keys(lib[`class${active.class}`][ch] || {});
    document.getElementById('view-topics').innerHTML = topics.map(t => `
        <div onclick="selectTopic('${t}')" class="bg-white p-8 rounded-2xl shadow border-l-8 border-emerald-500 font-bold cursor-pointer">${t}</div>
    `).join('');
}

function selectTopic(t) {
    active.tp = t;
    showView('view-levels');
    const lvls = ["Easy", "Moderate", "Tough"];
    document.getElementById('view-levels').innerHTML = lvls.map(l => {
        const key = `${active.class}_${active.sub}_${active.ch}_${active.tp}_${l}`;
        const isLocked = l !== "Easy" && !db.unlocked[key];
        return `
            <div onclick="${isLocked ? `promptUnlock('${l}')` : `openConfig('${l}')`}" class="bg-white p-10 rounded-[2.5rem] shadow border-2 ${isLocked ? 'opacity-50 border-slate-200' : 'border-indigo-100 hover:border-indigo-600 cursor-pointer'} text-center transition">
                <h4 class="text-2xl font-black">${l}</h4>
                <p class="text-[10px] mt-2 font-black ${isLocked ? 'text-rose-500' : 'text-emerald-500'}">${isLocked ? 'LOCKED (Pass 7/10)' : 'UNLOCKED'}</p>
            </div>`;
    }).join('');
}

function openConfig(l) {
    active.lvl = l; active.isTest = false;
    document.getElementById('config-modal').classList.remove('hidden');
}

function promptUnlock(l) {
    if(confirm(`Skip Test to unlock ${l}? (10 Qs, 2 Mins)`)) {
        active.lvl = l; active.isTest = true; active.limit = 10;
        startSession();
    }
}

function startSession() {
    if(!active.isTest) active.limit = document.getElementById('q-range').value;
    document.getElementById('config-modal').classList.add('hidden');
    showView('portal');
    active.qIdx = 0; active.score = 0;
    if(active.isTest) startTimer();
    loadQuestion();
}

function loadQuestion() {
    const lib = (active.sub === 'Maths') ? window.mathsData : window.scienceData;
    const pool = lib[`class${active.class}`][active.ch][active.tp][active.lvl];
    active.currQ = pool[Math.floor(Math.random() * pool.length)];
    
    document.getElementById('p-label').innerText = active.tp;
    document.getElementById('q-box').innerText = active.currQ.q;
    const grid = document.getElementById('opts-grid'); grid.innerHTML = '';
    active.currQ.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = "p-5 bg-white border-2 border-slate-100 rounded-2xl font-bold hover:border-indigo-600 transition";
        b.innerText = o; b.onclick = () => check(o); grid.appendChild(b);
    });
}

function check(val) {
    const fb = document.getElementById('feedback');
    fb.classList.remove('hidden', 'bg-emerald-100', 'bg-rose-100');
    if(val == active.currQ.a) {
        fb.innerText = "⭐ CORRECT!"; fb.classList.add('bg-emerald-100', 'text-emerald-700');
        active.score++; db.pts += 10;
        document.getElementById('next-btn').classList.remove('hidden');
    } else {
        fb.innerText = "WRONG! -5 Pts"; fb.classList.add('bg-rose-100', 'text-rose-700');
        db.pts = Math.max(0, db.pts - 5);
    }
    updateNav();
}

function handleNext() {
    active.qIdx++;
    if(active.qIdx < active.limit) {
        loadQuestion(); document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('feedback').classList.add('hidden');
    } else end();
}

function end() {
    clearInterval(timerInt);
    if(active.isTest && active.score >= 7) {
        db.unlocked[`${active.class}_${active.sub}_${active.ch}_${active.tp}_${active.lvl}`] = true;
        alert("Level Unlocked Successfully!");
    }
    localStorage.setItem('vks_master_v8', JSON.stringify(db));
    location.reload();
}

function showView(id) {
    document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function startTimer() {
    document.getElementById('timer').classList.remove('hidden');
    let sec = 120;
    timerInt = setInterval(() => {
        let m = Math.floor(sec/60); let s = sec%60;
        document.getElementById('timer').innerText = `${m}:${s<10?'0':''}${s}`;
        if(sec <= 0) end();
        sec--;
    }, 1000);
}

function updateNav() { document.getElementById('nav-pts').innerText = db.pts; }
document.getElementById('q-range').oninput = function() { document.getElementById('q-val').innerText = this.value; };

render();
