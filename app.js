let db = JSON.parse(localStorage.getItem('vks_data')) || { pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', qIdx: 0, score: 0, pool: [] };

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
        "2. Addition": "c2_ch2_addition.js",
        "3. Subtraction": "c2_ch3_subtraction.js",
        "4. Multiplication": "c2_ch4_multiplication.js",
        "5. Division": "c2_ch5_division.js",
        "6. Shapes": "c2_ch6_shapes.js",
        "7. Measurement": "c2_ch7_measurement.js",
        "8. Time & Money": "c2_ch8_time_money.js"
    },
    class3: {
        "1. Numbers up to 1000": "c3_ch1_numbers1000.js",
        "2. Addition & Subtraction": "c3_ch2_ops.js",
        "3. Multiplication": "c3_ch3_multiplication.js",
        "4. Division": "c3_ch4_division.js",
        "5. Fractions": "c3_ch5_fractions.js",
        "6. Geometry": "c3_ch6_geometry.js",
        "7. Measurement, Time, Money": "c3_ch7_measure_time.js"
    },
    class4: {
        "1. Large Numbers": "c4_ch1_large_nums.js",
        "2. Operations": "c4_ch2_basic_ops.js",
        "3. Factors & Multiples": "c4_ch3_factors.js",
        "4. Fractions & Decimals": "c4_ch4_frac_dec.js",
        "5. Geometry": "c4_ch5_geometry.js",
        "6. Measurement & Data": "c4_ch6_data.js"
    },
    class5: {
        "1. Numbers": "c5_ch1_numbers.js",
        "2. Fractions & Decimals": "c5_ch2_frac_dec.js",
        "3. Percentage": "c5_ch3_percentage.js",
        "4. Geometry": "c5_ch4_geometry.js",
        "5. Area & Perimeter": "c5_ch5_mensuration.js",
        "6. Volume": "c5_ch6_volume.js",
        "7. Data Handling": "c5_ch7_data.js"
    },
    class6: {
        "1. Knowing Our Numbers": "c6_ch1_knowing_nums.js",
        "2. Whole Numbers": "c6_ch2_whole_nums.js",
        "3. Integers": "c6_ch3_integers.js",
        "4. Fractions & Decimals": "c6_ch4_frac_dec.js",
        "5. Ratio & Proportion": "c6_ch5_ratio.js",
        "6. Geometry": "c6_ch6_geometry.js",
        "7. Mensuration": "c6_ch7_mensuration.js",
        "8. Algebra": "c6_ch8_algebra.js",
        "9. Data Handling": "c6_ch9_data.js"
    },
    class7: {
        "1. Integers": "c7_ch1_integers.js",
        "2. Rational Numbers": "c7_ch2_rational.js",
        "3. Linear Equations": "c7_ch3_linear_eq.js",
        "4. Ratio & Proportion": "c7_ch4_ratio.js",
        "5. Percentage": "c7_ch5_percentage.js",
        "6. Geometry": "c7_ch6_geometry.js",
        "7. Mensuration": "c7_ch7_mensuration.js",
        "8. Data Handling": "c7_ch8_data.js"
    },
    class8: {
        "1. Rational Numbers": "c8_ch1_rational.js",
        "2. Linear Equations": "c8_ch2_linear_eq.js",
        "3. Squares & Roots": "c8_ch3_square_roots.js",
        "4. Cubes & Roots": "c8_ch4_cube_roots.js",
        "5. Algebraic Expressions": "c8_ch5_algebraic_expr.js",
        "6. Geometry": "c8_ch6_geometry.js",
        "7. Mensuration": "c8_ch7_mensuration.js",
        "8. Data Handling": "c8_ch8_data.js"
    },
    class9: {
        "1. Number Systems": "c9_ch1_num_systems.js",
        "2. Polynomials": "c9_ch2_polynomials.js",
        "3. Linear Equations (2 Var)": "c9_ch3_linear_2var.js",
        "4. Geometry": "c9_ch4_geometry.js",
        "5. Coordinate Geometry": "c9_ch5_coord_geo.js",
        "6. Mensuration": "c9_ch6_mensuration.js",
        "7. Statistics & Probability": "c9_ch7_stats_prob.js"
    },
    class10: {
        "1. Real Numbers": "c10_ch1_real_numbers.js",
        "2. Polynomials": "c10_ch2_polynomials.js",
        "3. Pair of Linear Equations": "c10_ch3_pair_linear_eq.js",
        "4. Quadratic Equations": "c10_ch4_quadratic_eq.js",
        "5. Arithmetic Progressions": "c10_ch5_ap.js",
        "6. Triangles": "c10_ch6_triangles.js",
        "7. Trigonometry": "c10_ch7_trigonometry.js",
        "8. Coordinate Geometry": "c10_ch8_coord_geo.js",
        "9. Circles": "c10_ch9_circles.js",
        "10. Mensuration": "c10_ch10_mensuration.js",
        "11. Statistics & Probability": "c10_ch11_stats_prob.js"
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

    console.log("System looking for file at:", path);

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
