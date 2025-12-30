let db = JSON.parse(localStorage.getItem('vks_data')) || { pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', qIdx: 0, score: 0, pool: [] };

const syllabus = {
    class1: {
        "1. Shapes and Space": "c1_ch1_shapes.js",
        "2. Numbers 1 to 9": "c1_ch2_numbers1to9.js"
    },
    class10: {
        "4. Quadratic Equations": "c10_ch4_quadratic_eq.js"
    }
};

function init() {
    const v = document.getElementById('view-classes');
    v.innerHTML = "";
    for(let i=1; i<=10; i++) {
        v.innerHTML += `<div onclick="selectClass(${i})" class="p-10 bg-white shadow-md rounded-[2rem] text-center font-black text-3xl cursor-pointer hover:bg-indigo-600 hover:text-white transition-all border border-slate-100">${i}<p class="text-[10px] text-slate-400 uppercase mt-2">Class</p></div>`;
    }
    document.getElementById('nav-pts').innerText = db.pts;
}

function selectClass(n) {
    active.class = n;
    showView('view-subjects');
    const subs = ["maths", "science", "english"];
    document.getElementById('view-subjects').innerHTML = subs.map(s => `<div onclick="selectSub('${s}')" class="p-12 bg-white rounded-[2.5rem] shadow-xl text-center font-black text-2xl uppercase cursor-pointer border-b-8 border-indigo-100 hover:scale-105 transition-all">${s}</div>`).join('');
    updateBread(`Class ${n}`);
}

function selectSub(s) {
    active.sub = s;
    showView('view-chapters');
    const chapters = syllabus[`class${active.class}`] || {};
    document.getElementById('view-chapters').innerHTML = Object.keys(chapters).map(ch => `<div onclick="loadFile('${ch}', '${chapters[ch]}')" class="p-6 bg-white rounded-2xl shadow font-bold border-l-8 border-indigo-600 cursor-pointer hover:bg-indigo-50">${ch}</div>`).join('');
    updateBread(`Class ${active.class} > ${s}`);
}

function loadFile(chTitle, fileName) {
    active.ch = chTitle;
    const path = `data/${active.sub}/class${active.class}/${fileName}`;
    const old = document.getElementById('data-script'); if(old) old.remove();
    const script = document.createElement('script');
    script.id = 'data-script'; script.src = path;
    script.onload = () => { if(window.currentChapterData) renderTopics(); };
    script.onerror = () => alert("File not found: " + path);
    document.head.appendChild(script);
}

function renderTopics() {
    showView('view-topics');
    const topics = Object.keys(window.currentChapterData);
    document.getElementById('view-topics').innerHTML = topics.map(t => `<div onclick="selectTopic('${t}')" class="p-6 bg-white rounded-2xl shadow border-l-8 border-emerald-500 font-bold cursor-pointer hover:bg-emerald-50">${t}</div>`).join('');
}

function selectTopic(t) {
    active.tp = t;
    showView('view-levels');
    const lvls = ["Easy", "Moderate", "Tough"];
    document.getElementById('view-levels').innerHTML = lvls.map(l => `<div onclick="startPractice('${l}')" class="p-10 bg-white border-2 border-indigo-500 rounded-3xl text-center font-black cursor-pointer hover:bg-indigo-500 hover:text-white transition">${l}</div>`).join('');
}

function startPractice(lvl) {
    active.lvl = lvl; active.pool = window.currentChapterData[active.tp][lvl];
    if(active.pool) { showView('portal'); active.qIdx = 0; active.score = 0; loadQuestion(); }
}

function loadQuestion() {
    const q = active.pool[active.qIdx];
    document.getElementById('q-box').innerText = q.q;
    document.getElementById('p-label').innerText = `${active.tp} - ${active.lvl}`;
    const grid = document.getElementById('opts-grid'); grid.innerHTML = '';
    q.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = "p-5 border-2 rounded-2xl font-bold hover:bg-indigo-50 transition";
        b.innerText = o; b.onclick = () => check(o, q.a);
        grid.appendChild(b);
    });
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
}

function check(val, ans) {
    const fb = document.getElementById('feedback'); fb.classList.remove('hidden');
    if(val == ans) {
        fb.innerText = "CORRECT!"; fb.className = "mt-6 p-4 rounded-xl font-bold bg-emerald-100 text-emerald-700";
        active.score++; db.pts += 10;
    } else {
        fb.innerText = "WRONG!"; fb.className = "mt-6 p-4 rounded-xl font-bold bg-rose-100 text-rose-700";
    }
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('nav-pts').innerText = db.pts;
    localStorage.setItem('vks_data', JSON.stringify(db));
}

function handleNext() {
    active.qIdx++; if(active.qIdx < active.pool.length) loadQuestion();
    else { alert("Session Completed!"); location.reload(); }
}

function showView(id) { document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden')); document.getElementById(id).classList.remove('hidden'); }
function updateBread(t) { document.getElementById('breadcrumb').innerText = t; }

init();
