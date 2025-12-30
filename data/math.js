// data/maths.js
window.mathsData = {};

// 1. Create structure for all 10 classes
for (let i = 1; i <= 10; i++) {
    window.mathsData[`class${i}`] = {};
}

// 2. Logic to populate Algebra for all classes
function populateAlgebra() {
    for (let c = 1; c <= 10; c++) {
        const classKey = `class${c}`;
        
        // Defining Chapter based on class
        let chapterName = "Algebra Basics";
        if (c >= 7) chapterName = "Linear Equations";
        if (c >= 9) chapterName = "Polynomials & Quadratics";

        window.mathsData[classKey][chapterName] = {
            "Introduction": { "Easy": [], "Moderate": [], "Tough": [] },
            "Problem Solving": { "Easy": [], "Moderate": [], "Tough": [] }
        };

        const topic = window.mathsData[classKey][chapterName]["Introduction"];

        // Generate 100 variations per level
        for (let i = 0; i < 100; i++) {
            // Level 1: Addition/Basic Variable
            let n1 = Math.floor(Math.random() * 10) + c;
            let n2 = Math.floor(Math.random() * 10);
            topic.Easy.push({
                q: `${n1} + x = ${n1 + n2}. Find x.`,
                a: n2.toString(),
                opts: shuffle([n2, n2 + 1, n2 - 1, n2 + 5])
            });

            // Level 3: Harder Equations
            let coeff = Math.floor(Math.random() * 5) + 2;
            let ans = Math.floor(Math.random() * 10) + 1;
            let constVal = Math.floor(Math.random() * 20);
            let result = (coeff * ans) + constVal;
            topic.Tough.push({
                q: `Solve for x: ${coeff}x + ${constVal} = ${result}`,
                a: ans.toString(),
                opts: shuffle([ans, ans + 2, ans * 2, ans + 1])
            });
        }
    }
}

function shuffle(arr) { return arr.map(String).sort(() => Math.random() - 0.5); }

// Run the generators
populateAlgebra();
