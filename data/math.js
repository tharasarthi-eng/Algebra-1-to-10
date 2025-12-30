window.mathsData = {};

// Create Class 1-10 automatically
for (let i = 1; i <= 10; i++) {
    const classKey = `class${i}`;
    window.mathsData[classKey] = {
        "Algebra": {
            "Equations": { "Easy": [], "Moderate": [], "Tough": [] },
            "Variables": { "Easy": [], "Moderate": [], "Tough": [] }
        },
        "Geometry": {
            "Shapes": { "Easy": [], "Moderate": [], "Tough": [] }
        }
    };

    // Auto-generate 100 questions for every single topic
    const chapters = window.mathsData[classKey];
    Object.keys(chapters).forEach(ch => {
        Object.keys(chapters[ch]).forEach(tp => {
            for (let q = 1; q <= 100; q++) {
                chapters[ch][tp].Easy.push({ q: `${q} + x = ${q + i}. Find x.`, a: i.toString(), opts: shuffle([i, i + 1, i - 1, 0]) });
                chapters[ch][tp].Moderate.push({ q: `2x + ${i} = ${20 + i}. Find x.`, a: "10", opts: shuffle(["5", "10", "15", "20"]) });
                chapters[ch][tp].Tough.push({ q: `Solve for x: (x/2) + ${i} = ${10 + i}`, a: "20", opts: shuffle(["10", "20", "30", "40"]) });
            }
        });
    });
}

function shuffle(arr) { return arr.map(String).sort(() => Math.random() - 0.5); }
