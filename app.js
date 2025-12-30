let db = JSON.parse(localStorage.getItem('vks_master')) || {
    unlocked: {}, // key: "class_sub_chapter_topic_level"
    economy: { pts: 0 },
    stats: {}
};

let active = { class: 0, sub: '', ch: '', topic: '', lvl: '', limit: 10, qIdx: 0, score: 0, isTest: false };

function nav(viewId) {
    document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
}

function renderClasses() {
    const v = document.getElementById('view-classes');
    for(let i=1; i<=10; i++) {
        v.innerHTML += `<div onclick="selectClass(${i})" class="bg-white p-10 rounded-3xl shadow hover:shadow-xl cursor-pointer text-center font-bold text-2xl border border-slate-100 card-zoom">${i}</div>`;
    }
}

function selectClass(num) {
    active.class = num;
    nav('view-subjects');
    const v = document.getElementById('view-subjects');
    const subs = num >= 9 ? ["Maths", "Physics", "Chemistry", "Biology"] : ["Maths", "Science", "English"];
    v.innerHTML = subs.map(s => `<div onclick="selectSub('${s}')" class="bg-white p-10 rounded-3xl shadow text-center cursor-pointer font-bold text-xl">${s}</div>`).join('');
}

// app.js

function selectSub(sub) {
    active.sub = sub;
    nav('view-chapters');
    const container = document.getElementById('view-chapters');
    
    // Get library based on subject
    const lib = (sub === "Maths") ? window.mathsData : window.scienceData;
    const classData = lib[`class${active.class}`];

    if (!classData) {
        container.innerHTML = `<p class='p-10'>No data for Class ${active.class}</p>`;
        return;
    }

    const chapters = Object.keys(classData);
    container.innerHTML = `<h2 class="col-span-full text-xl font-bold mb-4">Chapters in ${sub}</h2>` + 
    chapters.map(ch => `
        <div onclick="selectChapter('${ch}')" class="bg-white p-6 rounded-2xl shadow-md border-l-4 border-indigo-600 cursor-pointer hover:bg-indigo-50 transition">
            ${ch}
        </div>
    `).join('');
}

function selectChapter(ch) {
    active.ch = ch;
    nav('view-topics');
    const container = document.getElementById('view-topics');
    
    const lib = (active.sub === "Maths") ? window.mathsData : window.scienceData;
    const topics = Object.keys(lib[`class${active.class}`][ch]);

    container.innerHTML = `<h2 class="col-span-full text-xl font-bold mb-4">Topics in ${ch}</h2>` + 
    topics.map(t => `
        <div onclick="selectTopic('${t}')" class="bg-white p-6 rounded-2xl shadow-md border-l-4 border-emerald-500 cursor-pointer hover:bg-emerald-50 transition">
            ${t}
        </div>
    `).join('');
}


function selectChapter(ch) {
    active.ch = ch;
    nav('view-topics');
    const topics = Object.keys(window.mathsData[`class${active.class}`][ch] || {});
    document.getElementById('view-topics').innerHTML = topics.map(t => 
        `<div onclick="selectTopic('${t}')" class="bg-white p-6 rounded-2xl shadow cursor-pointer font-bold">${t}</div>`
    ).join('');
}

function selectTopic(t) {
    active.topic = t;
    nav('view-levels');
    const levels = ["Easy", "Moderate", "Tough"];
    document.getElementById('view-levels').innerHTML = levels.map(l => {
        const key = `${active.class}_${active.sub}_${active.ch}_${active.topic}_${l}`;
        const isLocked = l !== "Easy" && !db.unlocked[key];
        return `
            <div class="bg-white p-8 rounded-3xl shadow text-center border-2 ${isLocked ? 'border-slate-200 opacity-70' : 'border-indigo-100 cursor-pointer'}" 
                 onclick="${isLocked ? `promptUnlock('${l}')` : `openConfig('${l}')`}">
                <h4 class="text-xl font-black">${l}</h4>
                ${isLocked ? '<p class="text-xs text-rose-500 font-bold mt-2">Locked - Pass Test (7/10)</p>' : '<p class="text-xs text-emerald-500 font-bold mt-2">Available</p>'}
            </div>`;
    }).join('');
}

function openConfig(l) {
    active.lvl = l;
    active.isTest = false;
    document.getElementById('config-modal').classList.remove('hidden');
}

function startSession() {
    active.limit = document.getElementById('q-range').value;
    document.getElementById('config-modal').classList.add('hidden');
    nav('portal');
    active.qIdx = 0; active.score = 0;
    loadQuestion();
}

function promptUnlock(l) {
    if(confirm(`Would you like to take a Skip Test to unlock ${l}? (10 Qs, 7+ correct required)`)) {
        active.lvl = l;
        active.isTest = true;
        active.limit = 10;
        nav('portal');
        active.qIdx = 0; active.score = 0;
        loadQuestion();
    }
}

// UI Helpers
function toggleMenu() { document.getElementById('side-menu').classList.toggle('sidebar-open'); }
document.getElementById('q-range').oninput = function() { document.getElementById('q-val').innerText = this.value + " Questions"; };

renderClasses();
