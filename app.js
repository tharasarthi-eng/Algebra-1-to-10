let db = JSON.parse(localStorage.getItem('vks_data')) || { unlocked: {}, pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', qIdx: 0, score: 0, pool: [] };

// THE FILE MAP: Connects Chapter Names to JS files
const fileMap = {
    class1: {
        "1. Shapes and Space": "data/maths/class1/c1_ch1_shapes.js",
        "2. Numbers from 1 to 9": "data/maths/class1/c1_ch2_numbers.js"
    },
    class10: {
        "4. Quadratic Equations": "data/maths/class10/c10_ch4_quadratic.js"
    }
    // Continue adding your chapters here...
};

function showView(id) {
    document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

// Select Class
function selectClass(n) {
    active.class = n;
    showView('view-subjects');
    const subs = ["Maths", "Science", "English"];
    document.getElementById('view-subjects').innerHTML = subs.map(s => `
        <div onclick="selectSub('${s}')" class="p-10 bg-white rounded-3xl shadow cursor-pointer font-black text-center border-b-8 border-indigo-100">${s}</div>
    `).join('');
}

// Select Subject -> Load Chapter List
function selectSub(s) {
    active.sub = s;
    showView('view-chapters');
    const chapters = Object.keys(fileMap[`class${active.class}`] || {});
    document.getElementById('view-chapters').innerHTML = chapters.map(ch => `
        <div onclick="loadChapterFile('${ch}')" class="p-6 bg-white rounded-2xl shadow font-bold border-l-8 border-indigo-600 cursor-pointer hover:bg-indigo-50">${ch}</div>
    `).join('') || "Coming Soon";
}

// DYNAMIC LOADER: Fetches the specific .js file
function loadChapterFile(ch) {
    active.ch = ch;
    const path = fileMap[`class${active.class}`][ch];
    
    // Remove old script if exists
    const oldScript = document.getElementById('data-script');
    if(oldScript) oldScript.remove();

    const script = document.createElement('script');
    script.id = 'data-script';
    script.src = path;
    script.onload = () => {
        // window.currentChapterData is now available from the loaded file
        renderTopics();
    };
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
        <div onclick="startPractice('${l}')" class="p-10 bg-white border-2 border-indigo-500 rounded-[2rem] text-center font-black cursor-pointer">${l}</div>
    `).join('');
}

function startPractice(l) {
    active.lvl = l;
    active.qIdx = 0;
    active.score = 0;
    active.pool = window.currentChapterData[active.tp][l];
    showView('portal');
    loadQuestion();
}

function loadQuestion() {
    const qData = active.pool[active.qIdx];
    document.getElementById('p-label').innerText = `${active.tp} > ${active.lvl}`;
    document.getElementById('q-box').innerText = qData.q;
    
    const grid = document.getElementById('opts-grid');
    grid.innerHTML = '';
    qData.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = "p-5 border-2 rounded-2xl font-bold hover:bg-indigo-50 transition text-slate-800";
        b.innerText = o;
        b.onclick = () => check(o, qData.a);
        grid.appendChild(b);
    });
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
}

function check(val, ans) {
    const fb = document.getElementById('feedback');
    fb.classList.remove('hidden', 'bg-emerald-100', 'bg-rose-100');
    if(val == ans) {
        fb.innerText = "⭐ CORRECT!"; fb.classList.add('bg-emerald-100', 'text-emerald-700');
        active.score++;
    } else {
        fb.innerText = "❌ WRONG!"; fb.classList.add('bg-rose-100', 'text-rose-700');
    }
    document.getElementById('next-btn').classList.remove('hidden');
}

function handleNext() {
    active.qIdx++;
    if(active.qIdx < active.pool.length) loadQuestion();
    else { alert("Finish!"); location.reload(); }
}

// Initial Render of Classes
(function(){
    const v = document.getElementById('view-classes');
    for(let i=1; i<=10; i++) {
        v.innerHTML += `<div onclick="selectClass(${i})" class="p-10 bg-white shadow rounded-[2rem] text-center font-black text-3xl cursor-pointer hover:bg-indigo-600 hover:text-white transition">${i}</div>`;
    }
})();
