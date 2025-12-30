let db = JSON.parse(localStorage.getItem('vks_data')) || { pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', qIdx: 0, score: 0, pool: [] };

// This maps your folder names to the JS files
const syllabus = {
    class1: {
        "1. Shapes and Space": "c1_ch1_shapes.js",
        "2. Numbers from 1 to 9": "c1_ch2_numbers1to9.js",
        "3. Addition": "c1_ch3_addition.js",
        "4. Subtraction": "c1_ch4_subtraction.js",
        "5. Numbers from 10 to 20": "c1_ch5_numbers10to20.js",
        "6. Measurement": "c1_ch6_measurement.js",
        "7. Time": "c1_ch7_time.js",
        "8. Money": "c1_ch8_money.js"
    }
    // Add class2, class3, etc. here later
};

// 1. Initialize Class Buttons
function initPortal() {
    const classView = document.getElementById('view-classes');
    if(!classView) return;
    classView.innerHTML = "";
    for(let i=1; i<=10; i++) {
        classView.innerHTML += `
            <div onclick="selectClass(${i})" class="p-10 bg-white shadow-md rounded-[2rem] text-center font-black text-3xl cursor-pointer hover:bg-indigo-600 hover:text-white transition-all border border-slate-100">
                ${i}
                <p class="text-[10px] uppercase text-slate-400 mt-2 font-bold">Class</p>
            </div>`;
    }
    document.getElementById('nav-pts').innerText = db.pts;
}

// 2. Select Class -> Show Subjects
function selectClass(n) {
    active.class = n;
    showView('view-subjects');
    const subs = ["Maths", "Science", "English"];
    document.getElementById('view-subjects').innerHTML = subs.map(s => `
        <div onclick="selectSub('${s}')" class="p-12 bg-white rounded-[2.5rem] shadow-lg text-center font-black text-2xl cursor-pointer border-b-8 border-indigo-100 hover:scale-105 transition-all">${s}</div>
    `).join('');
    updateBread(`Class ${n}`);
}

// 3. Select Subject -> Show Chapter Names
function selectSub(s) {
    active.sub = s;
    showView('view-chapters');
    const classKey = `class${active.class}`;
    const chapters = Object.keys(syllabus[classKey] || {});
    
    document.getElementById('view-chapters').innerHTML = chapters.map(chName => `
        <div onclick="loadChapterFile('${chName}', '${syllabus[classKey][chName]}')" class="p-6 bg-white rounded-2xl shadow font-bold border-l-8 border-indigo-600 cursor-pointer hover:bg-indigo-50">${chName}</div>
    `).join('') || "<p class='p-10 text-center font-bold'>No chapters mapped for this class yet.</p>";
    
    updateBread(`Class ${active.class} > ${s}`);
}

// 4. Load Chapter File
function loadChapterFile(chTitle, fileName) {
    active.ch = chTitle;
    const path = `data/${active.sub.toLowerCase()}/class${active.class}/${fileName}`;
    
    const old = document.getElementById('loader');
    if(old) old.remove();

    const script = document.createElement('script');
    script.id = 'loader';
    script.src = path;
    script.onload = () => renderTopics();
    script.onerror = () => alert("File not found at: " + path);
    document.head.appendChild(script);
}

// 5. Render Topics (from the loaded file)
function renderTopics() {
    showView('view-topics');
    const topics = Object.keys(window.currentChapterData);
    document.getElementById('view-topics').innerHTML = topics.map(t => `
        <div onclick="selectTopic('${t}')" class="p-6 bg-white rounded-2xl shadow border-l-8 border-emerald-500 font-bold cursor-pointer hover:bg-emerald-50">${t}</div>
    `).join('');
}

// (Helper functions: showView, updateBread, selectTopic, startPractice, loadQuestion, check, handleNext)
function showView(id) {
    document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function updateBread(t) { document.getElementById('breadcrumb').innerText = t; }

function selectTopic(t) {
    active.tp = t;
    showView('view-levels');
    ["Easy", "Moderate", "Tough"].forEach(l => {
        document.getElementById('view-levels').innerHTML = ["Easy", "Moderate", "Tough"].map(l => `
            <div onclick="startPractice('${l}')" class="p-10 bg-white border-2 border-indigo-500 rounded-3xl text-center font-black cursor-pointer hover:bg-indigo-500 hover:text-white transition">${l}</div>
        `).join('');
    });
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
    active.qIdx++;
    if(active.qIdx < active.pool.length) loadQuestion();
    else { alert("Session Ended!"); location.reload(); }
}

// RUN INIT
window.onload = initPortal;
