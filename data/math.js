// data/maths.js
const mathsData = {
    class1: { "Arithmetic Basics": { level1: [], level2: [], level3: [] } },
    class5: { "Decimals & Fractions": { level1: [], level2: [], level3: [] } },
    class10: { "Trigonometry": { level1: [], level2: [], level3: [] } }
    // Add more classes/chapters here following this same structure
};

function generateMathLibrary() {
    // Logic for Class 1 Addition
    for (let i = 0; i < 100; i++) {
        let a1 = Math.floor(Math.random() * 9) + 1;
        let b1 = Math.floor(Math.random() * 9) + 1;
        mathsData.class1["Arithmetic Basics"].level1.push({
            q: `${a1} + ${b1} = ?`,
            a: (a1 + b1).toString(),
            opts: shuffle([a1+b1, a1+b1+1, a1+b1-1, a1+b1+2])
        });

        // Level 2: Double Digits
        let a2 = Math.floor(Math.random() * 50) + 10;
        let b2 = Math.floor(Math.random() * 50) + 10;
        mathsData.class1["Arithmetic Basics"].level2.push({
            q: `${a2} + ${b2} = ?`,
            a: (a2 + b2).toString(),
            opts: shuffle([a2+b2, a2+b2+10, a2+b2-5, a2+b2+15])
        });
    }

    // Logic for Class 10 Trigonometry (Static-Generated Hybrid)
    for (let i = 0; i < 50; i++) {
        mathsData.class10["Trigonometry"].level1.push({
            q: `What is Sin(90°)?`, a: "1", opts: ["0", "1", "1/2", "Undefined"]
        });
    }
}

function shuffle(arr) { return arr.map(String).sort(() => Math.random() - 0.5); }
generateMathLibrary();
window.mathsData = mathsData;
