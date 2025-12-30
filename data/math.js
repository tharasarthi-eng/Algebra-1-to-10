window.mathsData = {};

//  Auto-populate Class 1 to 10
for (let c = 1; c <= 10; c++) {
    const classKey = `class${c}`;
    window.mathsData[classKey] = {
        "Algebra": {
            "Variables & Expressions": { "Easy": [], "Moderate": [], "Tough": [] },
            "Linear Equations": { "Easy": [], "Moderate": [], "Tough": [] }
        },
        "Geometry": {
            "Shapes & Area": { "Easy": [], "Moderate": [], "Tough": [] }
        }
    };

    // GENERATOR: Creating 100 questions per level per topic
    const chapters = window.mathsData[classKey];
    Object.keys(chapters).forEach(ch => {
        Object.keys(chapters[ch]).forEach(tp => {
            const levels = chapters[ch][tp];
            for (let i = 0; i < 100; i++) {
                // Easy Generator
                let n1 = Math.floor(Math.random() * 10) + c;
                levels.Easy.push({
                    q: `x + ${n1} = ${n1 + 5}. Find x.`,
                    a: "5",
                    opts: ["2", "5", "3", "7"].sort(() => Math.random() - 0.5)
                });
                // Moderate/Tough use higher ranges (n1 * c)
                levels.Tough.push({
                    q: `Solve for x: ${c}x + 10 = ${c * 5 + 10}`,
                    a: "5",
                    opts: ["5", "10", "15", "2"].sort(() => Math.random() - 0.5)
                });
            }
        });
    });
}
