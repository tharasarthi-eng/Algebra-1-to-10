let db = JSON.parse(localStorage.getItem('vks_lms_db')) || { pts: 0, right: 0, wrong: 0, history: [] };
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
const medalsDiv = document.getElementById('medals-container');
    const milestone = Math.floor(db.pts / 100); 
    
    let medalHTML = '';
    for(let i=0; i < milestone; i++) {
        medalHTML += `<div class="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 flex items-center justify-center text-xs shadow-sm">⭐</div>`;
    }
    document.getElementById('medal-box').innerHTML = medalHTML;
}

function save() { localStorage.setItem('vks_lms_db', JSON.stringify(db)); updateUI(); }
function resetData() { if(confirm("Reset progress?")) { localStorage.clear(); location.reload(); } }

init();
