
window.currentChapterData = {
    "Consistency & Graphical Representation": {
        "Easy": [
            { q: "A pair of linear equations is 'consistent' if it has at least ____ solution(s).", a: "1", opts: ["0", "1", "2", "None"] },
            { q: "If the lines are parallel, the system has ____ solution(s).", a: "No", opts: ["Unique", "Infinite", "No", "Two"] },
            { q: "If a1/a2 ≠ b1/b2, the lines are ____.", a: "Intersecting", opts: ["Parallel", "Coincident", "Intersecting", "None"] },
            { q: "If a1/a2 = b1/b2 = c1/c2, the lines are ____.", a: "Coincident", opts: ["Parallel", "Coincident", "Intersecting", "Perpendicular"] },
            { q: "The graph of a linear equation in two variables is always a ____.", a: "Straight line", opts: ["Parabola", "Straight line", "Circle", "Curve"] },
            { q: "If a1/a2 = b1/b2 ≠ c1/c2, the system is ____.", a: "Inconsistent", opts: ["Consistent", "Inconsistent", "Dependent", "None"] },
            { q: "A pair of coincident lines represents ____ solutions.", a: "Infinitely many", opts: ["No", "Unique", "Infinitely many", "Two"] },
            { q: "Does the point (2, 3) lie on the line x + y = 5?", a: "Yes", opts: ["Yes", "No", "Maybe", "Only if x=0"] },
            { q: "The general form of a linear equation is ax + by + c = ____.", a: "0", opts: ["1", "0", "x", "y"] },
            { q: "If two lines intersect at (4, 5), the solution of the system is ____.", a: "x=4, y=5", opts: ["x=5, y=4", "x=4, y=5", "x=9, y=0", "None"] }
        ],
        "Moderate": [
            { q: "Find the value of k for which the system 2x + 3y = 5 and 4x + ky = 10 has infinite solutions.", a: "6", opts: ["3", "6", "9", "12"] },
            { q: "For what value of k will the equations x + 2y = 3 and 5x + ky + 7 = 0 be parallel?", a: "10", opts: ["5", "10", "15", "20"] },
            { q: "If the lines 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, find k.", a: "15/4", opts: ["15/2", "15/4", "3/10", "None"] },
            { q: "How many solutions does the system 2x + 3y = 7 and 6x + 9y = 11 have?", a: "No solution", opts: ["Unique", "Infinite", "No solution", "None"] },
            { q: "The pair of equations x = a and y = b graphically represents lines which are ____.", a: "Intersecting at (a, b)", opts: ["Parallel", "Intersecting at (b, a)", "Intersecting at (a, b)", "Coincident"] },
            { q: "Find 'a' if the lines x - 2y = 3 and 3x + ay = 1 intersect in a unique solution.", a: "a ≠ -6", opts: ["a = -6", "a ≠ -6", "a = 6", "a ≠ 6"] },
            { q: "The boundary of 'consistency' for a1/a2 and b1/b2 is ____.", a: "a1/a2 ≠ b1/b2", opts: ["a1/a2 = b1/b2", "a1/a2 ≠ b1/b2", "c1/c2 = 0", "None"] },
            { q: "If x=2, y=3 is a solution of ax + 2y = 10, find a.", a: "2", opts: ["1", "2", "3", "4"] },
            { q: "A dependent pair of linear equations is always ____.", a: "Consistent", opts: ["Consistent", "Inconsistent", "Parallel", "None"] },
            { q: "The lines x=3 and x=5 are ____ to each other.", a: "Parallel", opts: ["Parallel", "Intersecting", "Coincident", "Perpendicular"] }
        ],
        "Tough": [
            { q: "Find the value of k for which the system kx - y = 2, 6x - 2y = 3 has a unique solution.", a: "k ≠ 3", opts: ["k = 3", "k ≠ 3", "k = 0", "None"] },
            { q: "If (k, k+1) is a solution of 2x + 3y = 13, find k.", a: "2", opts: ["1", "2", "3", "4"] },
            { q: "Are the lines y = 3x + 7 and 6x - 2y + 5 = 0 parallel?", a: "Yes", opts: ["Yes", "No", "Intersecting", "None"] },
            { q: "Find k if the system x + 2y = 5, 3x + ky + 15 = 0 has no solution.", a: "6", opts: ["2", "4", "6", "-6"] },
            { q: "The area of the triangle formed by the line x/a + y/b = 1 with the coordinate axes is ____.", a: "1/2 ab", opts: ["ab", "1/2 ab", "2ab", "a+b"] },
            { q: "If the system kx + 3y = k-3 and 12x + ky = k has infinitely many solutions, find k.", a: "6", opts: ["6", "-6", "0", "None"] },
            { q: "The lines represented by 2x + 3y - 9 = 0 and 4x + 6y - 18 = 0 are ____.", a: "Coincident", opts: ["Intersecting", "Parallel", "Coincident", "None"] },
            { q: "Condition for the lines a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0 to be the Y-axis and X-axis respectively?", a: "b1=c1=0 and a2=c2=0", opts: ["a1=a2=0", "b1=b2=0", "b1=c1=0 and a2=c2=0", "None"] },
            { q: "If x=a, y=b is the solution of x-y=2 and x+y=4, then a and b are ____.", a: "3, 1", opts: ["3, 1", "1, 3", "2, 2", "4, 0"] },
            { q: "What is the number of solutions for the pair of equations y=0 and y=-7?", a: "No solution", opts: ["One", "Two", "Infinite", "No solution"] }
        ]
    },
    "Algebraic Methods (Substitution & Elimination)": {
        "Easy": [
            { q: "Which method involves expressing one variable in terms of the other?", a: "Substitution", opts: ["Substitution", "Elimination", "Cross-multiplication", "None"] },
            { q: "Solve for x and y: x + y = 14, x - y = 4.", a: "x=9, y=5", opts: ["x=10, y=4", "x=9, y=5", "x=7, y=7", "None"] },
            { q: "In elimination method, we make the ____ of one variable equal.", a: "Coefficients", opts: ["Powers", "Coefficients", "Values", "Signs"] },
            { q: "Solve: x + y = 5, 2x - 3y = 4. What is x?", a: "3.8", opts: ["3", "3.8", "2", "4"] },
            { q: "If x = 2 and x + y = 10, then y = ____.", a: "8", opts: ["6", "8", "10", "12"] },
            { q: "Is x=1, y=2 a solution for 3x - 2y = -1?", a: "Yes", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "To eliminate 'y' from x+y=5 and 2x+y=8, we should ____ the equations.", a: "Subtract", opts: ["Add", "Subtract", "Multiply", "Divide"] },
            { q: "Substitution is best when one variable has a coefficient of ____.", a: "1", opts: ["0", "1", "10", "Any number"] },
            { q: "Solve for y: y - x = 2, y + x = 10.", a: "6", opts: ["4", "6", "8", "10"] },
            { q: "If 2x + 3y = 0 and 3x + 4y = 0, the only solution is ____.", a: "(0, 0)", opts: ["(1, 1)", "(0, 0)", "(2, 3)", "No solution"] }
        ],
        "Moderate": [
            { q: "Solve by substitution: s - t = 3, s/3 + t/2 = 6. Find s.", a: "9", opts: ["6", "9", "3", "12"] },
            { q: "Solve: 0.2x + 0.3y = 1.3, 0.4x + 0.5y = 2.3. Find x.", a: "2", opts: ["2", "3", "4", "5"] },
            { q: "Find the values of x and y for: √2x + √3y = 0, √3x - √8y = 0.", a: "x=0, y=0", opts: ["x=1, y=1", "x=0, y=0", "x=√2, y=√3", "None"] },
            { q: "Solve using elimination: 3x + 4y = 10, 2x - 2y = 2. Find y.", a: "1", opts: ["1", "2", "3", "0"] },
            { q: "If 2x + y = 23 and 4x - y = 19, find 5y - 2x.", a: "31", opts: ["31", "30", "25", "None"] },
            { q: "Solve: 11x + 15y + 23 = 0, 7x - 2y - 20 = 0.", a: "x=2, y=-3", opts: ["x=2, y=-3", "x=3, y=-2", "x=1, y=1", "None"] },
            { q: "Find x and y: x/2 + 2y/3 = -1, x - y/3 = 3.", a: "x=2, y=-3", opts: ["x=2, y=-3", "x=-2, y=3", "x=0, y=0", "None"] },
            { q: "If 3x + 2y = 13 and 3x - 2y = 5, find x + y.", a: "5", opts: ["3", "5", "7", "9"] },
            { q: "Solve for x: ax + by = a-b, bx - ay = a+b.", a: "1", opts: ["1", "-1", "0", "a"] },
            { q: "Solve for y: ax + by = a-b, bx - ay = a+b.", a: "-1", opts: ["1", "-1", "0", "b"] }
        ],
        "Tough": [
            { q: "Solve for x and y: 152x - 378y = -74, -378x + 152y = -604.", a: "x=2, y=1", opts: ["x=1, y=2", "x=2, y=1", "x=3, y=1", "None"] },
            { q: "Solve: 10/(x+y) + 2/(x-y) = 4, 15/(x+y) - 5/(x-y) = -2.", a: "x=3, y=2", opts: ["x=5, y=1", "x=3, y=2", "x=2, y=3", "None"] },
            { q: "Find x and y: 2/√x + 3/√y = 2, 4/√x - 9/√y = -1.", a: "x=4, y=9", opts: ["x=2, y=3", "x=4, y=9", "x=9, y=4", "None"] },
            { q: "If 217x + 131y = 913 and 131x + 217y = 827, find x + y.", a: "5", opts: ["4", "5", "6", "None"] },
            { q: "Solve for x and y: (a-b)x + (a+b)y = a²-2ab-b², (a+b)(x+y) = a²+b².", a: "x=a+b, y=-2ab/(a+b)", opts: ["Complex", "x=a+b, y=... ", "x=a, y=b", "None"] },
            { q: "Solve: x/a + y/b = 2, ax - by = a²-b².", a: "x=a, y=b", opts: ["x=a, y=b", "x=b, y=a", "x=1, y=1", "None"] },
            { q: "Find x: 4x + 6/y = 15, 6x - 8/y = 14.", a: "3", opts: ["2", "3", "4", "None"] },
            { q: "Solve for y in: 7x - 2y = 5xy, 8x + 7y = 15xy.", a: "1", opts: ["1", "2", "3", "None"] },
            { q: "If 47x + 31y = 63 and 31x + 47y = 15, find x - y.", a: "3", opts: ["1", "2", "3", "None"] },
            { q: "Solve for x: p x + q y = p - q, q x - p y = p + q.", a: "1", opts: ["1", "-1", "0", "None"] }
        ]
    }
};
