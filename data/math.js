// data/maths.js
window.mathsData = {
    class1: {
        "Addition": {
            "Basic Sums": { "Easy": [], "Moderate": [], "Tough": [] }
        }
    },
    class10: {
        "Algebra": {
            "Quadratic Equations": { "Easy": [], "Moderate": [], "Tough": [] }
        }
    }
};

// AUTO-GENERATOR FOR CLASS 10 ALGEBRA
function generateAlgebra() {
    const qCount = 100;
    const target = window.mathsData.class10.Algebra["Quadratic Equations"];

    for(let i=0; i<qCount; i++) {
        // Easy: Find roots of (x-a)(x-b)=0
        let r1 = Math.floor(Math.random() * 10) + 1;
        let r2 = Math.floor(Math.random() * 10) + 1;
        target.Easy.push({
            q: `Find roots of: (x - ${r1})(x - ${r2}) = 0`,
            a: `${r1}, ${r2}`,
            opts: [`${r1}, ${r2}`, `${r1}, -${r2}`, `-${r1}, ${r2}`, `0, ${r1+r2}`]
        });

        // Tough: General ax^2 + bx + c = 0
        // ... Logic for more complex generation goes here
    }
}

// 
generateAlgebra();
