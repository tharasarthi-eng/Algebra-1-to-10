let db = JSON.parse(localStorage.getItem('vks_master')) || { unlocked: {}, pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', limit: 10, qIdx: 0, score: 0, isTest: false };
let timer;

function toggleMenu() { document.getElementById('side-menu').classList.toggle('open'); }
function showView(id) {
    document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function render() {
    const v = document.getElementById('view-classes');
    for (let i = 1; i <= 10; i++) {
        v.innerHTML += `<div onclick="selectClass(${i})" class="bg-white p-10 rounded-3xl shadow-sm border hover:border-indigo-600 cursor-pointer text-center font-black text-3xl transition transform hover:-translate-y-1">${i}</div>`;
    }
    document.getElementById('nav-pts').innerText = db.pts;
}

function selectClass(n) { active.class = n; showView('view-subjects'); 
    const subs = n >= 9 ? ["Maths", "Physics", "Chemistry", "Biology"] : ["Maths", "Science", "English"];
    document.getElementById('view-subjects').innerHTML = subs.map(s => `<div onclick="selectSub('${s}')" class="bg-white p-10 rounded-3xl shadow text-center cursor-pointer font-bold text-xl border-b-8 border-indigo-100">${s}</div>`).join('');
    updateBread(`Class ${n}`);
}

function selectSub(s) { active.sub = s; showView('view-chapters');
    const lib = (s === 'Maths') ? window.mathsData : {};
    const chapters = Object.keys(lib[`class${active.class}`] || {});
    document.getElementById('view-chapters').innerHTML = chapters.map(ch => `<div onclick="selectChapter('${ch}')" class="bg-white p-8 rounded-2xl shadow border-l-8 border-indigo-600 font-bold cursor-pointer hover:bg-indigo-50">${ch}</div>`).join('') || "Coming Soon";
    updateBread(`Class ${active.class} > ${s}`);
}

function selectChapter(ch) { active.ch = ch; showView('view-topics');
    const topics = Object.keys(window.mathsData[`class${active.class}`][ch]);
    document.getElementById('view-topics').innerHTML = topics.map(t => `<div onclick="selectTopic('${t}')" class="bg-white p-8 rounded-2xl shadow border-l-8 border-emerald-500 font-bold cursor-pointer">${t}</div>`).join('');
    updateBread(`Class ${active.class} > ${active.sub} > ${ch}`);
}

function selectTopic(t) { active.tp = t; showView('view-levels');
    const lvls = ["Easy", "Moderate", "Tough"];
    document.getElementById('view-levels').innerHTML = lvls.map(l => {
        const key = `${active.class}_${active.sub}_${active.ch}_${active.tp}_${l}`;
        const isLocked = l !== "Easy" && !db.unlocked[key];
        return `<div onclick="${isLocked ? `promptUnlock('${l}')` : `openConfig('${l}')`}" class="bg-white p-10 rounded-3xl shadow border-2 ${isLocked ? 'opacity-50' : 'border-indigo-100 hover:border-indigo-600 cursor-pointer'} text-center transition">
            <h4 class="text-2xl font-black">${l}</h4>
            <p class="text-[10px] mt-2 font-bold ${isLocked ? 'text-rose-500' : 'text-emerald-500'}">${isLocked ? 'LOCKED (Pass 7/10 Test)' : 'UNLOCKED'}</p>
        </div>`;
    }).join('');
}

function openConfig(l) { active.lvl = l; active.isTest = false; document.getElementById('config-modal').classList.remove('hidden'); }
function promptUnlock(l) { if(confirm(`Unlock ${l} with a 10-Question Skip Test (70% required)?`)) { active.lvl = l; active.isTest = true; active.limit = 10; startSession(); } }

function startSession() {
    if(!active.isTest) active.limit = document.getElementById('q-range').value;
    document.getElementById('config-modal').classList.add('hidden');
    showView('portal'); active.qIdx = 0; active.score = 0;
    if(active.isTest) startTimer();
    loadQuestion();
}

function loadQuestion() {
    const pool = window.mathsData[`class${active.class}`][active.ch][active.tp][active.lvl];
    active.currQ = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById('q-box').innerText = active.currQ.q;
    document.getElementById('p-label').innerText = `${active.ch} > ${active.tp} [${active.lvl}]`;
    const grid = document.getElementById('opts-grid'); grid.innerHTML = '';
    active.currQ.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = "p-5 bg-white border-2 border-slate-100 rounded-2xl font-bold hover:border-indigo-600 transition text-slate-800";
        b.innerText = o; b.onclick = () => check(o, b); grid.appendChild(b);
    });
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
}

function check(val, btn) {
    const fb = document.getElementById('feedback');
    fb.classList.remove('hidden', 'bg-emerald-100', 'bg-rose-100');
    if(val == active.currQ.a) { 
        fb.innerText = "⭐ CORRECT! +10 Credits"; fb.classList.add('bg-emerald-100', 'text-emerald-700');
        active.score++; db.pts += 10; 
        document.getElementById('next-btn').classList.remove('hidden');
    } else { 
        fb.innerText = "WRONG! -5 Credits"; fb.classList.add('bg-rose-100', 'text-rose-700');
        db.pts = Math.max(0, db.pts - 5); 
    }
    document.getElementById('nav-pts').innerText = db.pts;
    localStorage.setItem('vks_master', JSON.stringify(db));
}

function handleNext() { 
    active.qIdx++; 
    if(active.qIdx < active.limit) { loadQuestion(); }
    else { 
        if(active.isTest && active.score >= 7) { 
            db.unlocked[`${active.class}_${active.sub}_${active.ch}_${active.tp}_${active.lvl}`] = true; 
            alert("Congratulations! Level Unlocked."); 
        } else if(active.isTest) {
            alert("Score too low to unlock level.");
        }
        location.reload(); 
    }
}

function startTimer() { 
    document.getElementById('timer').classList.remove('hidden');
    let sec = 120;
    timer = setInterval(() => {
        let m = Math.floor(sec/60); let s = sec%60;
        document.getElementById('timer').innerText = `${m}:${s<10?'0':''}${s}`;
        if(sec <= 0) { alert("Time Up!"); location.reload(); }
        sec--;
    }, 1000);
}

function updateBread(t) { document.getElementById('breadcrumb').innerText = t; }
document.getElementById('q-range').oninput = function() { document.getElementById('q-val').innerText = this.value; };
render();
