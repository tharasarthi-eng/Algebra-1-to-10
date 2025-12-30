let db = JSON.parse(localStorage.getItem('vks_data')) || { pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', qIdx: 0, score: 0, pool: [] };

// Syllabus Mapping to your filenames
const syllabus = {
    class1: {
        "1. Shapes and Space": "c1_ch1_shapes.js",
        "2. Numbers from 1 to 9": "c1_ch2_numbers1to9.js",
        "3. Addition": "c1_ch3_addition.js",
        "4. Subtraction": "c1_ch4_subtraction.js"
    },
    class10: {
        "4. Quadratic Equations": "c10_ch4_quadratic_eq.js",
        "7. Trigonometry": "c10_ch7_trigonometry.js"
    }
    // Add all your mappings here following your folder list
};

function selectClass(n) {
    active.class = n;
    showView('view-subjects');
    const subs = ["Maths", "Science", "English"];
    document.getElementById('view-subjects').innerHTML = subs.map(s => `
        <div onclick="selectSub('${s}')" class="p-10 bg-white rounded-3xl shadow-lg text-center font-black text-2xl cursor-pointer border-b-8 border-indigo-100 hover:scale-105 transition-all">${s}</div>
    `).join('');
    updateBread(`Class ${n}`);
}

function selectSub(s) {
    active.sub = s;
    showView('view-chapters');
    const classData = syllabus[`class${active.class}`] || {};
    const chapters = Object.keys(classData);
    
    document.getElementById('view-chapters').innerHTML = chapters.map(ch => `
        <div onclick="loadChapterFile('${ch}', '${classData[ch]}')" class="p-6 bg-white rounded-2xl shadow font-bold border-l-8 border-indigo-600 cursor-pointer hover:bg-indigo-50">${ch}</div>
    `).join('') || "Coming Soon";
    updateBread(`Class ${active.class} > ${s}`);
}

function loadChapterFile(chTitle, fileName) {
    active.ch = chTitle;
    const path = `data/${active.sub.toLowerCase()}/class${active.class}/${fileName}`;
    
    // Clear old data script
    const old = document.getElementById('data-loader');
    if(old) old.remove();

    const script = document.createElement('script');
    script.id = 'data-loader';
    script.src = path;
    script.onload = () => {
        renderTopics();
    };
    script.onerror = () => alert("File not found: " + path);
    document.head.appendChild(script);
}

function renderTopics() {
    showView('view-topics');
    const topics = Object.keys(window.currentChapterData);
    document.getElementById('view-topics').innerHTML = topics.map(t => `
        <div onclick="selectTopic('${t}')" class="p-6 bg-white rounded-2xl shadow border-l-8 border-emerald-500 font-bold cursor-pointer">${t}</div>
    `).join('');
}

function selectTopic(t) {
    active.tp = t;
    showView('view-levels');
    const lvls = ["Easy", "Moderate", "Tough"];
    document.getElementById('view-levels').innerHTML = lvls.map(l => `
        <div onclick="startPractice('${l}')" class="p-10 bg-white border-2 border-indigo-500 rounded-3xl text-center font-black cursor-pointer hover:bg-indigo-500 hover:text-white transition">${l}</div>
    `).join('');
}

function startPractice(lvl) {
    active.lvl = lvl; active.qIdx = 0; active.score = 0;
    active.pool = window.currentChapterData[active.tp][lvl];
    showView('portal');
    loadQuestion();
}

function loadQuestion() {
    const qData = active.pool[active.qIdx];
    document.getElementById('q-box').innerText = qData.q;
    document.getElementById('p-label').innerText = `${active.tp} - ${active.lvl}`;
    const grid = document.getElementById('opts-grid'); grid.innerHTML = '';
    qData.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = "p-5 border-2 rounded-2xl font-bold hover:bg-indigo-50 transition";
        b.innerText = o; b.onclick = () => check(o, qData.a);
        grid.appendChild(b);
    });
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
}

function check(val, ans) {
    const fb = document.getElementById('feedback');
    fb.classList.remove('hidden', 'bg-emerald-100', 'bg-rose-100');
    if(val == ans) {
        fb.innerText = "CORRECT!"; fb.classList.add('bg-emerald-100', 'text-emerald-700');
        active.score++; db.pts += 10;
    } else {
        fb.innerText = "WRONG!"; fb.classList.add('bg-rose-100', 'text-rose-700');
    }
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('nav-pts').innerText = db.pts;
    localStorage.setItem('vks_data', JSON.stringify(db));
}

function handleNext() {
    active.qIdx++;
    if(active.qIdx < active.pool.length) loadQuestion();
    else { alert("Session Ended!"); location.reload(); }
}

function showView(id) {
    document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function updateBread(t) { document.getElementById('breadcrumb').innerText = t; }

// Initialize Class Grid
(function(){
    const v = document.getElementById('view-classes');
    for(let i=1; i<=10; i++) {
        v.innerHTML += `<div onclick="selectClass(${i})" class="p-10 bg-white shadow rounded-3xl text-center font-black text-3xl cursor-pointer hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-2">${i}</div>`;
    }
})();
