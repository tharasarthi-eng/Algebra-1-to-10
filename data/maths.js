window.mathsData = {};

// Curriculum Definition
const curriculum = {
    class1: { "Number Sense": ["Counting 1-50", "Big vs Small", "Simple Addition"] },
    class6: { "Intro to Algebra": ["Variables", "Expressions", "Matchstick Logic"] },
    class7: { "Simple Equations": ["Solving for X", "Transposing Terms"] },
    class10: { "Board Algebra": ["Quadratic Equations", "Arithmetic Progressions", "Linear Pairs"] }
};

// Ensure all 10 classes have data
for(let i=1; i<=10; i++) {
    if(!curriculum[`class${i}`]) curriculum[`class${i}`] = { "Math Basics": ["Arithmetic", "Geometry", "Logic"] };
}

function initMaths() {
    Object.keys(curriculum).forEach(cKey => {
        const classNum = parseInt(cKey.replace('class', ''));
        window.mathsData[cKey] = {};

        Object.keys(curriculum[cKey]).forEach(chapter => {
            window.mathsData[cKey][chapter] = {};
            curriculum[cKey][chapter].forEach(topic => {
                window.mathsData[cKey][chapter][topic] = { "Easy": [], "Moderate": [], "Tough": [] };
                const levels = window.mathsData[cKey][chapter][topic];

                for (let i = 0; i < 100; i++) {
                    let n1 = Math.floor(Math.random() * (10 * classNum)) + 2;
                    let n2 = Math.floor(Math.random() * (5 * classNum)) + 1;
                    
                    // Logic for Algebra Topics
                    if (chapter.includes("Algebra") || chapter.includes("Equations")) {
                        levels.Easy.push({
                            q: `Find x: x + ${n1} = ${n1 + n2}`,
                            a: n2.toString(),
                            opts: [n2, n2+1, n2-1, 0].map(String).sort(()=>Math.random()-0.5)
                        });
                        levels.Tough.push({
                            q: `Solve: ${classNum}x + 5 = ${classNum * n2 + 5}`,
                            a: n2.toString(),
                            opts: [n2, n2+5, n2-2, n2*2].map(String).sort(()=>Math.random()-0.5)
                        });
                    } else {
                        // Logic for Arithmetic Topics
                        levels.Easy.push({
                            q: `${n1} + ${n2} = ?`,
                            a: (n1 + n2).toString(),
                            opts: [n1+n2, n1+n2+2, n1+n2-1, 0].map(String).sort(()=>Math.random()-0.5)
                        });
                    }
                }
            });
        });
    });
}
initMaths();
