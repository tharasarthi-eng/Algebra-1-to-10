// app.js
let vks = JSON.parse(localStorage.getItem('vks_v6')) || {
    unlocked: {}, economy: { pts: 0, m: 0 },
    stats: { Maths: 0, Science: 0, English: 0, Social: 0 }
};

let session = { class: 0, sub: '', ch: '', lvl: 1, type: '', qIdx: 0, score: 0, limit: 10 };

function goHome() { location.reload(); }

function renderClasses() {
    const v = document.getElementById('view-classes');
    for(let i=1; i<=10; i++) {
        const c = document.createElement('div');
        c.className = "bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl cursor-pointer text-center border-2 border-transparent hover:border-indigo-500 transition";
        c.innerHTML = `<h3 class="text-5xl font-black">${i}</h3><p class="text-xs uppercase font-bold text-slate-400">Class</p>`;
        c.onclick = () => showSubjects(i);
        v.appendChild(c);
    }
    updatePointsUI();
}

function showSubjects(num) {
    session.class = num; hideViews();
    const v = document.getElementById('view-subjects'); v.innerHTML = ''; v.classList.remove('hidden');
    const subs = (num >= 9) ? ["Maths", "English", "Social", "Physics", "Chemistry", "Biology"] : ["Maths", "English", "Social", "Science"];
    subs.forEach(s => {
        const c = document.createElement('div');
        c.className = "bg-white p-10 rounded-[2rem] shadow-lg text-center cursor-pointer hover:bg-indigo-50 transition";
        c.innerHTML = `<h3 class="text-2xl font-black">${s}</h3>`;
        c.onclick = () => showChapters(s);
        v.appendChild(c);
    });
}

function showChapters(sub) {
    session.sub = sub; hideViews();
    const v = document.getElementById('view-chapters'); v.innerHTML = ''; v.classList.remove('hidden');
    const lib = (sub === 'Maths') ? window.mathsData : {}; // Add other data sources here
    const chapters = Object.keys(lib[`class${session.class}`] || {});
    
    chapters.forEach(ch => {
        const card = document.createElement('div');
        card.className = "bg-white p-8 rounded-2xl shadow hover:border-indigo-500 border-2 cursor-pointer";
        card.innerHTML = `<h3 class="font-bold">${ch}</h3>`;
        card.onclick = () => showLevels(ch);
        v.appendChild(card);
    });
}

function showLevels(ch) {
    session.ch = ch; hideViews();
    const v = document.getElementById('view-levels'); v.innerHTML = ''; v.classList.remove('hidden');
    for(let i=1; i<=3; i++) {
        const b = document.createElement('div');
        b.className = "p-10 bg-white rounded-[2rem] border-2 border-indigo-100 hover:border-indigo-600 cursor-pointer text-center font-black text-2xl";
        b.innerHTML = `Level ${i}`;
        b.onclick = () => startPortal('practice', i);
        v.appendChild(b);
    }
}

function startPortal(type, lvl) {
    session.type = type; session.lvl = lvl; session.qIdx = 0; session.score = 0;
    hideViews(); document.getElementById('portal').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const lib = (session.sub === 'Maths') ? window.mathsData : {};
    const qPool = lib[`class${session.class}`][session.ch][`level${session.lvl}`];
    session.activeQ = qPool[Math.floor(Math.random() * qPool.length)];
    
    document.getElementById('p-sub').innerText = session.ch;
    document.getElementById('p-title').innerText = `Question ${session.qIdx + 1}`;
    document.getElementById('q-box').innerText = session.activeQ.q;
    document.getElementById('p-diff').innerText = `Level ${session.lvl}`;
    
    const grid = document.getElementById('opts-grid'); grid.innerHTML = '';
    session.activeQ.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = "p-5 bg-white border-2 border-slate-100 rounded-2xl font-bold hover:border-indigo-500 transition shadow-sm";
        b.innerText = o;
        b.onclick = () => checkAns(o, b);
        grid.appendChild(b);
    });
}

function checkAns(val, btn) {
    const fb = document.getElementById('feedback');
    fb.classList.remove('hidden', 'bg-emerald-100', 'bg-rose-100', 'animate__bounceIn', 'animate__shakeX');
    if(val == session.activeQ.a) {
        fb.innerText = "⭐ CORRECT! +10 Pts";
        fb.classList.add('bg-emerald-100', 'text-emerald-700', 'animate__bounceIn');
        vks.economy.pts += 10;
        document.getElementById('next-btn').classList.remove('hidden');
        document.querySelectorAll('#opts-grid button').forEach(b => b.disabled = true);
    } else {
        fb.innerText = "WRONG! -5 Pts";
        fb.classList.add('bg-rose-100', 'text-rose-700', 'animate__shakeX');
        vks.economy.pts = Math.max(0, vks.economy.pts - 5);
        vks.economy.m++;
    }
    save(); updatePointsUI();
}

function nextQuestion() {
    session.qIdx++;
    if(session.qIdx < 10) loadQuestion();
    else goHome();
}

function hideViews() {
    ['view-classes', 'view-subjects', 'view-chapters', 'view-levels', 'portal'].forEach(id => {
        const el = document.getElementById(id); if(el) el.classList.add('hidden');
    });
}
function updatePointsUI() { document.getElementById('nav-prac-pts').innerText = vks.economy.pts; }
function save() { localStorage.setItem('vks_v6', JSON.stringify(vks)); }
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }

renderClasses();
