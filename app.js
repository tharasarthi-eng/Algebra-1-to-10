let db = JSON.parse(localStorage.getItem('vks_lms_db')) || { pts: 0, right: 0, wrong: 0, history: [] };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', qIdx: 0, score: 0, pool: [] };
let navStack = [];

const syllabus = {
    class1: {
        "1. Shapes and Space": "c1_ch1_shapes.js",
        "2. Numbers 1 to 9": "c1_ch2_numbers1to9.js",
        "3. Addition": "c1_ch3_addition.js",
        "4. Subtraction": "c1_ch4_subtraction.js"
    }
    // Continue adding other classes based on the master list provided earlier
};

function init() {
    const v = document.getElementById('view-classes');
    v.innerHTML = "";
    for(let i=1; i<=10; i++) {
        v.innerHTML += `<div onclick="selectClass(${i})" class="p-10 bg-white shadow-sm border border-slate-100 rounded-[2.5rem] text-center cursor-pointer hover:border-indigo-600 hover:shadow-xl transition-all"><p class="text-4xl font-black text-slate-800">${i}</p><p class="text-[10px] font-bold text-slate-400 uppercase mt-2">Grade</p></div>`;
    }
    updateUI();
}

function selectClass(n) { active.class = n; showView('view-subjects'); document.getElementById('view-subjects').innerHTML = ["Maths", "Science", "English"].map(s => `<div onclick="selectSub('${s}')" class="p-12 bg-white rounded-[3rem] shadow-sm border font-black text-2xl text-center uppercase cursor-pointer hover:shadow-xl transition-all">${s}</div>`).join(''); }
function selectSub(s) { active.sub = s; showView('view-chapters'); const chs = syllabus[`class${active.class}`] || {}; document.getElementById('view-chapters').innerHTML = Object.keys(chs).map(c => `<div onclick="loadFile('${c}', '${chs[c]}')" class="p-6 bg-white rounded-2xl border shadow-sm font-bold cursor-pointer hover:border-indigo-600 transition">${c}</div>`).join(''); }
function loadFile(t, f) { active.ch = t; const path = `data/${active.sub.toLowerCase()}/class${active.class}/${f}`; const old = document.getElementById('data-script'); if(old) old.remove(); const s = document.createElement('script'); s.id = 'data-script'; s.src = path; s.onload = renderTopics; s.onerror = () => alert("File not found!"); document.head.appendChild(s); }
function renderTopics() { showView('view-topics'); const ts = Object.keys(window.currentChapterData); document.getElementById('view-topics').innerHTML = ts.map(t => `<div onclick="selectTopic('${t}')" class="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm font-bold cursor-pointer hover:bg-emerald-50">${t}</div>`).join(''); }
function selectTopic(t) { active.tp = t; showView('view-levels'); document.getElementById('view-levels').innerHTML = ["Easy", "Moderate", "Tough"].map(l => `<div onclick="startPractice('${l}')" class="p-10 bg-white border-2 border-indigo-500 rounded-3xl text-center font-black cursor-pointer hover:bg-indigo-600 hover:text-white transition">${l}</div>`).join(''); }
function startPractice(l) { active.lvl = l; active.pool = window.currentChapterData[active.tp][l]; active.qIdx = 0; active.score = 0; showView('portal'); loadQuestion(); }

function loadQuestion() {
    const q = active.pool[active.qIdx];
    document.getElementById('q-box').innerText = q.q;
    document.getElementById('p-label').innerText = `${active.tp} • ${active.lvl}`;
    const grid = document.getElementById('opts-grid'); grid.innerHTML = '';
    q.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = "p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold hover:border-indigo-600 hover:bg-white transition-all";
        b.innerText = o; b.onclick = () => check(o, q.a);
        grid.appendChild(b);
    });
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
}

function check(val, ans) {
    const fb = document.getElementById('feedback'); fb.classList.remove('hidden');
    document.querySelectorAll('#opts-grid button').forEach(b => b.disabled = true);
    if(val == ans) {
        fb.innerText = "CORRECT! +10 PTS"; fb.className = "mt-6 p-4 rounded-xl font-bold bg-emerald-100 text-emerald-700 animate-bounce";
        db.pts += 10; db.right += 1; active.score++;
    } else {
        fb.innerText = "WRONG! -5 PTS"; fb.className = "mt-6 p-4 rounded-xl font-bold bg-rose-100 text-rose-700";
        db.pts = Math.max(0, db.pts - 5); db.wrong += 1;
    }
    document.getElementById('next-btn').classList.remove('hidden');
    save();
}

function handleNext() {
    active.qIdx++; 
    document.getElementById('progress-bar').style.width = (active.qIdx / active.pool.length * 100) + "%";
    if(active.qIdx < active.pool.length) loadQuestion();
    else { 
        db.history.push({topic: active.tp, date: new Date().toLocaleDateString()});
        save(); alert("Session Complete!"); location.reload(); 
    }
}

// NAVIGATION ENGINE
function showView(id, isBacking = false) {
    const current = Array.from(document.querySelectorAll('main > div')).find(d => !d.classList.contains('hidden') && d.id !== 'breadcrumb');
    if(!isBacking && current && current.id !== id) navStack.push(current.id);
    document.querySelectorAll('main > div').forEach(d => { if(d.id !== 'breadcrumb') d.classList.add('hidden'); });
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('global-back-btn').classList.toggle('hidden', id === 'view-classes');
    updateBread(id);
}

function goBack() {
    if(navStack.length === 0) return;
    if(!document.getElementById('portal').classList.contains('hidden')) {
        if(!confirm("Quit Quiz?")) return;
    }
    showView(navStack.pop(), true);
}

function updateBread(id) {
    const b = document.getElementById('breadcrumb');
    if(id === 'view-classes') b.innerText = "Home / Select Class";
    else if(id === 'view-subjects') b.innerText = `Class ${active.class} / Select Subject`;
    else if(id === 'view-chapters') b.innerText = `Class ${active.class} > ${active.sub}`;
    else if(id === 'view-topics') b.innerText = `${active.ch} / Topics`;
    else if(id === 'view-levels') b.innerText = `${active.tp} / Level`;
    else if(id === 'portal') b.innerText = `Quiz: ${active.tp}`;
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('-translate-x-full');
    document.getElementById('overlay').classList.toggle('hidden');
    updateUI();
}

function updateUI() {
    document.getElementById('nav-pts').innerText = db.pts;
    document.getElementById('menu-pts').innerText = db.pts;
    document.getElementById('stats-right').innerText = db.right;
    document.getElementById('stats-wrong').innerText = db.wrong;
    document.getElementById('progress-list').innerHTML = db.history.slice(-5).reverse().map(h => `<div class="p-2 bg-slate-50 border-l-4 border-indigo-400 text-[10px] font-bold">${h.topic} - ${h.date}</div>`).join('') || "No activity yet.";
}

function save() { localStorage.setItem('vks_lms_db', JSON.stringify(db)); updateUI(); }
function resetData() { if(confirm("Reset progress?")) { localStorage.clear(); location.reload(); } }

init();
