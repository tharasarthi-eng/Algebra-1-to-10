// data/maths.js
window.mathsData = {};

// Create Class 1 to 10
for (let i = 1; i <= 10; i++) {
    const cKey = `class${i}`;
    window.mathsData[cKey] = {
        "Algebra": {
            "Variables & Expressions": {
                "Easy": [], "Moderate": [], "Tough": []
            },
            "Equations": {
                "Easy": [], "Moderate": [], "Tough": []
            }
        },
        "Geometry": {
            "Shapes & Angles": {
                "Easy": [], "Moderate": [], "Tough": []
            }
        }
    };

    // Auto-generate 100 questions for each
    const chaps = Object.keys(window.mathsData[cKey]);
    chaps.forEach(ch => {
        const topics = Object.keys(window.mathsData[cKey][ch]);
        topics.forEach(tp => {
            const levels = window.mathsData[cKey][ch][tp];
            for (let q = 0; q < 100; q++) {
                // Easy
                levels.Easy.push({ q: `${q+i} + x = ${q+i+2}. Find x.`, a: "2", opts: ["1", "2", "3", "0"] });
                // Moderate
                levels.Moderate.push({ q: `2x + ${i} = ${20+i}. Find x.`, a: "10", opts: ["5", "10", "15", "20"] });
                // Tough
                levels.Tough.push({ q: `Solve for x: (x/2) + ${i} = ${10+i}`, a: "20", opts: ["10", "20", "30", "40"] });
            }
        });
    });
}
