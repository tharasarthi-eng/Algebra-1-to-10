// 1. DATA MAP: Define every chapter for every class
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

let db = JSON.parse(localStorage.getItem('vks_data')) || { pts: 0 };
let active = { class: 0, sub: '', ch: '', tp: '', lvl: '', qIdx: 0, score: 0, pool: [] };

function showView(id) {
    document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

// 1. Initial Render
function init() {
    const v = document.getElementById('view-classes');
    v.innerHTML = "";
    for(let i=1; i<=10; i++) {
        v.innerHTML += `<div onclick="selectClass(${i})" class="p-10 bg-white shadow-lg rounded-3xl text-center font-black text-3xl cursor-pointer hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-2">Class ${i}</div>`;
    }
    document.getElementById('nav-pts').innerText = db.pts;
}

// 2. Select Class -> Shows Subjects
function selectClass(n) {
    active.class = n;
    showView('view-subjects');
    const subs = ["maths", "science", "english"];
    document.getElementById('view-subjects').innerHTML = subs.map(s => `
        <div onclick="selectSub('${s}')" class="p-10 bg-white rounded-3xl shadow-lg text-center font-black text-2xl uppercase cursor-pointer border-b-8 border-indigo-100 hover:scale-105 transition-all">${s}</div>
    `).join('');
}

// 3. Select Subject -> SHOW CHAPTER NAMES (CRITICAL FIX)
function selectSub(s) {
    active.sub = s;
    showView('view-chapters');
    
    const classKey = `class${active.class}`;
    const chapterData = syllabus[classKey];
    const chapterListContainer = document.getElementById('view-chapters');

    if (!chapterData) {
        chapterListContainer.innerHTML = "<p class='p-10 text-center font-bold text-slate-400'>No syllabus found for this class.</p>";
        return;
    }

    // Convert keys of the syllabus object into buttons
    const chapterTitles = Object.keys(chapterData);
    chapterListContainer.innerHTML = chapterTitles.map(title => `
        <div onclick="loadChapterFile('${title}', '${chapterData[title]}')" 
             class="p-6 bg-white rounded-2xl shadow-md border-l-8 border-indigo-600 font-bold cursor-pointer hover:bg-indigo-50 transition-colors">
            ${title}
        </div>
    `).join('');
}

// 4. Load External JS File
function loadChapterFile(chTitle, fileName) {
    active.ch = chTitle;
    const path = `data/${active.sub}/class${active.class}/${fileName}`;
    
    const old = document.getElementById('data-script');
    if(old) old.remove();

    const script = document.createElement('script');
    script.id = 'data-script';
    script.src = path;
    script.onload = () => {
        if (window.currentChapterData) {
            renderTopics();
        } else {
            alert("Data Error: 'window.currentChapterData' not found in file.");
        }
    };
    script.onerror = () => alert("File not found at: " + path);
    document.head.appendChild(script);
}

// STEP 5: SELECT TOPIC -> SHOW LEVELS
function selectTopic(t) {
    active.tp = t; // Store selected topic name
    showView('view-levels');
    
    const levels = ["Easy", "Moderate", "Tough"];
    
    // Render the Level buttons
    document.getElementById('view-levels').innerHTML = levels.map(l => `
        <div onclick="startPractice('${l}')" 
             class="p-10 bg-white border-2 border-indigo-500 rounded-3xl text-center font-black text-xl cursor-pointer hover:bg-indigo-500 hover:text-white transition-all shadow-lg">
            ${l}
            <p class="text-[10px] mt-2 font-bold opacity-70">10 Questions</p>
        </div>
    `).join('');
}

// STEP 6: START PRACTICE (The Launcher)
function startPractice(lvl) {
    active.lvl = lvl;
    active.qIdx = 0;
    active.score = 0;

    // CRITICAL: Access the global data loaded from the JS file
    // Structure: window.currentChapterData[TopicName][LevelName]
    if (window.currentChapterData && window.currentChapterData[active.tp]) {
        active.pool = window.currentChapterData[active.tp][lvl];
        
        if (active.pool && active.pool.length > 0) {
            showView('portal');
            loadQuestion();
        } else {
            alert("No questions found for " + active.tp + " - " + lvl);
        }
    } else {
        alert("Error: Data for this topic failed to load.");
    }
}


function renderTopics() {
    showView('view-topics');
    const topics = Object.keys(window.currentChapterData);
    document.getElementById('view-topics').innerHTML = topics.map(t => `
        <div onclick="selectTopic('${t}')" class="p-6 bg-white rounded-2xl shadow border-l-8 border-emerald-500 font-bold cursor-pointer hover:bg-emerald-50">${t}</div>
    `).join('');
}

// Initialize the app
init();
