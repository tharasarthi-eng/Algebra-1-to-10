let db = JSON.parse(localStorage.getItem('vks_data')) || { unlocked: {}, pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', limit: 10, qIdx: 0, score: 0, isTest: false };

function nav(viewId) {
    document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
}

function goHome() { location.reload(); }

function renderClasses() {
    const v = document.getElementById('view-classes');
    for(let i=1; i<=10; i++) {
        v.innerHTML += `<div onclick="selectClass(${i})" class="bg-white p-10 rounded-3xl shadow hover:shadow-xl cursor-pointer text-center font-bold text-2xl border border-slate-100">${i}</div>`;
    }
    document.getElementById('user-pts').innerText = db.pts;
}

function selectClass(num) {
    active.class = num;
    nav('view-subjects');
    const subs = num >= 9 ? ["Maths", "Physics", "Chemistry", "Biology"] : ["Maths", "Science", "English"];
    document.getElementById('view-subjects').innerHTML = subs.map(s => `<div onclick="selectSub('${s}')" class="bg-white p-10 rounded-3xl shadow text-center cursor-pointer font-bold text-xl">${s}</div>`).join('');
}

function selectSub(sub) {
    active.sub = sub;
    nav('view-chapters');
    const library = (sub === "Maths") ? window.mathsData : {};
    const chapters = Object.keys(library[`class${active.class}`] || {});

    document.getElementById('view-chapters').innerHTML = `<h2 class="col-span-full font-bold text-xl mb-4">Chapters</h2>` + 
    chapters.map(ch => `<div onclick="selectChapter('${ch}')" class="bg-white p-6 rounded-2xl shadow cursor-pointer font-bold hover:bg-indigo-50">${ch}</div>`).join('');
}

function selectChapter(ch) {
    active.ch = ch;
    nav('view-topics');
    const library = (active.sub === "Maths") ? window.mathsData : {};
    const topics = Object.keys(library[`class${active.class}`][ch] || {});

    document.getElementById('view-topics').innerHTML = `<h2 class="col-span-full font-bold text-xl mb-4">Topics</h2>` + 
    topics.map(t => `<div onclick="selectTopic('${t}')" class="bg-white p-6 rounded-2xl shadow cursor-pointer font-bold">${t}</div>`).join('');
}

function selectTopic(t) {
    active.tp = t;
    nav('view-levels');
    const lvls = ["Easy", "Moderate", "Tough"];
    document.getElementById('view-levels').innerHTML = lvls.map(l => {
        const key = `${active.class}_${active.sub}_${active.ch}_${active.tp}_${l}`;
        const isLocked = l !== "Easy" && !db.unlocked[key];
        return `<div onclick="${isLocked ? `promptUnlock('${l}')` : `openConfig('${l}')`}" class="bg-white p-8 rounded-3xl shadow text-center border-2 ${isLocked ? 'opacity-50' : 'border-indigo-100 cursor-pointer'}">
            <h4 class="text-xl font-black">${l}</h4>
            <p class="text-xs ${isLocked ? 'text-rose-500' : 'text-emerald-500'} font-bold mt-2">${isLocked ? 'LOCKED' : 'AVAILABLE'}</p>
        </div>`;
    }).join('');
}

function openConfig(l) {
    active.lvl = l; active.isTest = false;
    document.getElementById('config-modal').classList.remove('hidden');
}

function promptUnlock(l) {
    if(confirm(`Take 10-Question Skip Test to unlock ${l}?`)) {
        active.lvl = l; active.isTest = true; active.limit = 10;
        nav('portal'); startSession();
    }
}

function startSession() {
    if(!active.isTest) active.limit = document.getElementById('q-range').value;
    document.getElementById('config-modal').classList.add('hidden');
    nav('portal'); active.qIdx = 0; active.score = 0; loadQuestion();
}

function loadQuestion() {
    const pool = window.mathsData[`class${active.class}`][active.ch][active.tp][active.lvl];
    active.currentQ = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById('q-box').innerText = active.currentQ.q;
    const grid = document.getElementById('opts-grid'); grid.innerHTML = '';
    active.currentQ.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = "p-5 bg-white border-2 border-slate-100 rounded-2xl font-bold hover:border-indigo-600 transition";
        b.innerText = o; b.onclick = () => check(o); grid.appendChild(b);
    });
}

function check(val) {
    if(val == active.currentQ.a) { active.score++; db.pts += 10; document.getElementById('next-btn').classList.remove('hidden'); }
    else { db.pts = Math.max(0, db.pts - 5); alert("Wrong Answer!"); }
    document.getElementById('user-pts').innerText = db.pts;
    localStorage.setItem('vks_data', JSON.stringify(db));
}

function nextQuestion() {
    active.qIdx++;
    if(active.qIdx < active.limit) { loadQuestion(); document.getElementById('next-btn').classList.add('hidden'); }
    else finishSession();
}

function finishSession() {
    if(active.isTest && active.score >= 7) {
        db.unlocked[`${active.class}_${active.sub}_${active.ch}_${active.tp}_${active.lvl}`] = true;
        alert("Level Unlocked!");
    }
    goHome();
}

function toggleMenu() { document.getElementById('side-menu').classList.toggle('translate-x-full'); }
document.getElementById('q-range').oninput = function() { document.getElementById('q-val').innerText = this.value; };

renderClasses();
