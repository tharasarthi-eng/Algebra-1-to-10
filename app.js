// 1. DATA STATE
let db = JSON.parse(localStorage.getItem('vks_lms_db')) || { pts: 0, right: 0, wrong: 0, history: [] };
let lastLevel = Math.floor(db.pts / 500) + 1;
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', qIdx: 0, score: 0, pool: [] };
let navStack = [];

const syllabus = {
    class1: {
        "1. Shapes and Space": "c1_ch1_shapes.js",
        "2. Numbers 1 to 9": "c1_ch2_numbers1to9.js",
        "3. Addition": "c1_ch3_addition.js",
        "4. Subtraction": "c1_ch4_subtraction.js",
        "5. Numbers 10 to 20": "c1_ch5_numbers10to20.js",
        "6. Measurement": "c1_ch6_measurement.js",
        "7. Time": "c1_ch7_time.js",
        "8. Money": "c1_ch8_money.js"
    },
    class2: {
        "1. Numbers up to 100": "c2_ch1_numbers100.js",
        "2. Addition & Subtraction": "c2_ch2_ops.js",
        "3. Multiplication": "c2_ch3_multiplication.js",
        "4. Division": "c2_ch4_division.js",
        "5. Lines and Shapes": "c2_ch5_shapes.js",
        "6. Measurement (m/kg)": "c2_ch6_measurement.js",
        "7. Time & Calendar": "c2_ch7_time.js",
        "8. Money": "c2_ch8_money.js"
    },
    class3: {
        "1. Numbers up to 1000": "c3_ch1_numbers1000.js",
        "2. Four Operations": "c3_ch2_operations.js",
        "3. Fractions Intro": "c3_ch3_fractions.js",
        "4. Geometry: 2D/3D": "c3_ch4_geometry.js",
        "5. Measurement Units": "c3_ch5_measurement.js",
        "6. Time & Money": "c3_ch6_time_money.js",
        "7. Data Handling": "c3_ch7_data.js"
    },
    class4: {
        "1. Numbers & Place Value": "c4_ch1_numbers.js",
        "2. Multiples & Factors": "c4_ch2_factors.js",
        "3. Fractions & Decimals": "c4_ch3_frac_dec.js",
        "4. Angles & Triangles": "c4_ch4_geometry.js",
        "5. Area & Perimeter": "c4_ch5_mensuration.js",
        "6. Patterns": "c4_ch6_patterns.js"
    },
    class5: {
        "1. Large Numbers": "c5_ch1_numbers.js",
        "2. Fractions Operations": "c5_ch2_fractions.js",
        "3. Decimals & Percentage": "c5_ch3_dec_perc.js",
        "4. Volume & Capacity": "c5_ch4_volume.js",
        "5. Symmetry & Nets": "c5_ch5_geometry.js",
        "6. Average & Ratio": "c5_ch6_ratio.js"
    },
    class6: {
        "1. Knowing Our Numbers": "c6_ch1_knowing_nums.js",
        "2. Integers": "c6_ch2_integers.js",
        "3. Basic Geometry": "c6_ch3_geometry.js",
        "4. Fractions & Decimals": "c6_ch4_frac_dec.js",
        "5. Algebra Intro": "c6_ch5_algebra.js",
        "6. Ratio & Proportion": "c6_ch6_ratio.js",
        "7. Mensuration": "c6_ch7_mensuration.js"
    },
    class7: {
        "1. Integers Properties": "c7_ch1_integers.js",
        "2. Fractions & Decimals": "c7_ch2_frac_dec.js",
        "3. Simple Equations": "c7_ch3_equations.js",
        "4. Lines & Angles": "c7_ch4_lines_angles.js",
        "5. Triangle Properties": "c7_ch5_triangles.js",
        "6. Comparing Quantities": "c7_ch6_comparison.js",
        "7. Rational Numbers": "c7_ch7_rational.js",
        "8. Exponents & Powers": "c7_ch8_exponents.js"
    },
    class8: {
        "1. Rational Numbers": "c8_ch1_rational.js",
        "2. Linear Equations (1 Var)": "c8_ch2_linear_eq.js",
        "3. Quadrilaterals": "c8_ch3_geometry.js",
        "4. Squares & Cubes": "c8_ch4_squares_cubes.js",
        "5. Algebraic Expressions": "c8_ch5_algebra.js",
        "6. Mensuration 3D": "c8_ch6_mensuration.js",
        "7. Direct & Inverse Proportions": "c8_ch7_proportions.js"
    },
    class9: {
        "1. Number Systems": "c9_ch1_numbers.js",
        "2. Polynomials": "c9_ch2_polynomials.js",
        "3. Coordinate Geometry": "c9_ch3_coord_geo.js",
        "4. Linear Eq in 2 Variables": "c9_ch4_linear_2v.js",
        "5. Lines, Angles & Triangles": "c9_ch5_triangles.js",
        "6. Quadrilaterals & Circles": "c9_ch6_circles.js",
        "7. Heron's Formula": "c9_ch7_herons.js",
        "8. Surface Area & Volume": "c9_ch8_mensuration.js",
        "9. Probability": "c9_ch9_probability.js"
    },
    class10: {
        "1. Real Numbers": "c10_ch1_real_numbers.js",
        "2. Polynomials": "c10_ch2_polynomials.js",
        "3. Linear Equations": "c10_ch3_linear_eq.js",
        "4. Quadratic Equations": "c10_ch4_quadratic_eq.js",
        "5. Arithmetic Progressions": "c10_ch5_ap.js",
        "6. Triangles (Similarity)": "c10_ch6_triangles.js",
        "7. Trigonometry": "c10_ch7_trigonometry.js",
        "8. Circle & Tangents": "c10_ch8_circles.js",
        "9. Surface Area & Volume": "c10_ch9_mensuration.js",
        "10. Stats & Probability": "c10_ch10_stats_prob.js"
    }
};



// 2. CORE ENGINE
function init() {
    const v = document.getElementById('view-classes');
    if(!v) return;
    
    showView('view-classes');
    v.innerHTML = "";
    for(let i=1; i<=10; i++) {
        v.innerHTML += `
            <div onclick="selectClass(${i})" class="group p-8 bg-white shadow-sm border border-slate-100 rounded-[2.5rem] text-center cursor-pointer hover:border-indigo-600 hover:shadow-xl transition-all">
                <p class="text-4xl font-black text-slate-800 group-hover:text-indigo-600">${i}</p>
                <p class="text-[10px] font-bold text-slate-400 uppercase mt-2">Grade</p>
            </div>`;
    }
    updateUI();
}

function updateUI() {
    document.getElementById('nav-pts').innerText = db.pts;
    if(document.getElementById('menu-pts')) document.getElementById('menu-pts').innerText = db.pts;

    // XP & Level Logic
    const ptsPerLvl = 500;
    const currentLevel = Math.floor(db.pts / ptsPerLvl) + 1;
    const xpInLevel = db.pts % ptsPerLvl;
    const xpPerc = (xpInLevel / ptsPerLvl) * 100;

    if (currentLevel > lastLevel) {
        showLevelUpModal(currentLevel);
        lastLevel = currentLevel;
    }

    const ranks = ["Novice", "Scholar", "Expert", "Master", "Elite", "Legend"];
    const rankTitle = ranks[Math.min(currentLevel - 1, ranks.length - 1)];
    
    if(document.getElementById('rank-name')) document.getElementById('rank-name').innerText = `Level ${currentLevel}: ${rankTitle}`;
    if(document.getElementById('xp-ratio')) document.getElementById('xp-ratio').innerText = `${xpInLevel} / ${ptsPerLvl} XP`;
    if(document.getElementById('xp-fill')) document.getElementById('xp-fill').style.width = xpPerc + "%";

    const total = db.right + db.wrong;
    const acc = total === 0 ? 0 : Math.round((db.right / total) * 100);
    if(document.getElementById('stats-accuracy')) document.getElementById('stats-accuracy').innerText = acc + "%";

    const log = document.getElementById('progress-list');
    if(log) {
        log.innerHTML = db.history.slice(-4).reverse().map(h => `
            <div class="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <p class="text-[9px] font-black uppercase">${h.topic}</p>
                <p class="text-[8px] text-slate-400">${h.date}</p>
            </div>
        `).join('') || `<p class="text-center text-slate-300 text-[10px]">No History</p>`;
    }
}

// 3. NAVIGATION
function showView(id, isBacking = false) {
    const views = ['view-classes', 'view-subjects', 'view-chapters', 'view-topics', 'view-levels', 'portal'];
    const current = views.find(v => !document.getElementById(v).classList.contains('hidden'));
    
    if(!isBacking && current && current !== id) navStack.push(current);
    
    views.forEach(v => document.getElementById(v).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('global-back-btn').classList.toggle('hidden', id === 'view-classes');
    updateBread(id);
}

function goBack() {
    if(navStack.length > 0) showView(navStack.pop(), true);
}

function updateBread(id) {
    const b = document.getElementById('breadcrumb');
    const maps = { 'view-classes': 'Home', 'view-subjects': `Class ${active.class}`, 'view-chapters': active.sub, 'portal': 'Quiz' };
    b.innerText = maps[id] || 'LMS Portal';
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('-translate-x-full');
    document.getElementById('overlay').classList.toggle('hidden');
    updateUI();
}

// 4. QUIZ FUNCTIONS
function selectClass(n) { active.class = n; showView('view-subjects'); document.getElementById('view-subjects').innerHTML = ["Maths", "Science", "English"].map(s => `<div onclick="selectSub('${s}')" class="p-10 bg-white rounded-3xl border font-black text-center cursor-pointer hover:shadow-lg">${s}</div>`).join(''); }

function selectSub(s) { active.sub = s; showView('view-chapters'); const chs = syllabus[`class${active.class}`] || {}; document.getElementById('view-chapters').innerHTML = Object.keys(chs).map(c => `<div onclick="loadFile('${c}', '${chs[c]}')" class="p-6 bg-white rounded-2xl border font-bold cursor-pointer hover:border-indigo-600">${c}</div>`).join(''); }

function loadFile(t, f) { 
    active.ch = t; 
    const path = `data/${active.sub.toLowerCase()}/class${active.class}/${f}`;
    const old = document.getElementById('data-script'); if(old) old.remove();
    const s = document.createElement('script'); s.id = 'data-script'; s.src = path;
    s.onload = renderTopics; s.onerror = () => alert("File not found!");
    document.head.appendChild(s); 
}

function renderTopics() { 
    showView('view-topics'); 
    const ts = Object.keys(window.currentChapterData); 
    document.getElementById('view-topics').innerHTML = ts.map(t => `<div onclick="selectTopic('${t}')" class="p-6 bg-white rounded-2xl border font-bold cursor-pointer hover:bg-emerald-50">${t}</div>`).join(''); 
}

function selectTopic(t) { active.tp = t; showView('view-levels'); document.getElementById('view-levels').innerHTML = ["Easy", "Moderate", "Tough"].map(l => `<div onclick="startPractice('${l}')" class="p-10 bg-white border-2 border-indigo-500 rounded-3xl text-center font-black cursor-pointer hover:bg-indigo-600 hover:text-white">${l}</div>`).join(''); }

function startPractice(l) { active.lvl = l; active.pool = window.currentChapterData[active.tp][l]; active.qIdx = 0; active.score = 0; showView('portal'); loadQuestion(); }

function loadQuestion() {
    const q = active.pool[active.qIdx];
    const qBox = document.getElementById('q-box');
    qBox.innerText = q.q;
    
    // KaTeX Render
    if(window.katex) {
        try { katex.render(q.q, qBox, { throwOnError: false, displayMode: true }); } catch(e){}
    }

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
        fb.innerText = "CORRECT! +10 XP"; fb.className = "mt-6 p-4 rounded-xl font-bold bg-emerald-100 text-emerald-700 animate-bounce";
        db.pts += 10; db.right += 1; active.score++;
        if (window.confetti) confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    } else {
        fb.innerText = "WRONG! -5 XP"; fb.className = "mt-6 p-4 rounded-xl font-bold bg-rose-100 text-rose-700";
        document.getElementById('q-box').classList.add('shake');
        setTimeout(() => document.getElementById('q-box').classList.remove('shake'), 400);
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

function showLevelUpModal(level) {
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md";
    modal.id = "level-up-overlay";
    modal.innerHTML = `<div class="bg-indigo-600 p-10 rounded-[3rem] text-center text-white max-w-sm w-full shadow-2xl">
        <div class="text-6xl mb-4">🏆</div>
        <h3 class="text-4xl font-black mb-4 uppercase text-white">Level ${level}</h3>
        <p class="text-sm opacity-90 mb-8 text-white">Rank Promoted! Your knowledge is expanding, Scholar.</p>
        <button onclick="document.getElementById('level-up-overlay').remove()" class="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase">Continue</button>
    </div>`;
    document.body.appendChild(modal);
    if (window.confetti) confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
}

function save() { localStorage.setItem('vks_lms_db', JSON.stringify(db)); updateUI(); }
function resetData() { if(confirm("Reset progress?")) { localStorage.clear(); location.reload(); } }

window.onload = init;
