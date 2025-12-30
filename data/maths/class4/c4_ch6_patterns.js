window.currentChapterData = {
    "Visual & Growing Patterns": {
        "Easy": [
            { q: "Circle, Square, Circle, Square, ___?", a: "Circle", opts: ["Circle", "Square", "Triangle", "Rectangle"] },
            { q: "↑, ↓, ↑, ↓, ___?", a: "↑", opts: ["↑", "↓", "←", "→"] },
            { q: "A, BB, A, BB, ___?", a: "A", opts: ["A", "B", "BB", "AA"] },
            { q: "1 dot, 2 dots, 3 dots, ___?", a: "4 dots", opts: ["3 dots", "4 dots", "5 dots", "1 dot"] },
            { q: "Red, Green, Red, Green, ___?", a: "Red", opts: ["Red", "Green", "Blue", "Yellow"] },
            { q: "Large Circle, Small Circle, Large Circle, ___?", a: "Small Circle", opts: ["Large Circle", "Small Circle", "Large Square", "None"] },
            { q: "Triangle pointing Up, Triangle pointing Down, ___?", a: "Triangle pointing Up", opts: ["Up", "Down", "Left", "Right"] },
            { q: "Apple, Banana, Apple, Banana, ___?", a: "Apple", opts: ["Apple", "Banana", "Orange", "Grapes"] },
            { q: "Sun, Moon, Sun, Moon, ___?", a: "Sun", opts: ["Sun", "Moon", "Star", "Cloud"] },
            { q: "Step 1: /, Step 2: //, Step 3: ///, Step 4: ___?", a: "////", opts: ["///", "////", "/////", "X"] }
        ],
        "Moderate": [
            { q: "1st: 1 square, 2nd: 4 squares, 3rd: 9 squares, 4th: ___?", a: "16 squares", opts: ["12", "15", "16", "20"] },
            { q: "ABC, DEF, GHI, ___?", a: "JKL", opts: ["MNO", "JKL", "PQR", "XYZ"] },
            { q: "Square, Triangle, Circle, Square, Triangle, ___?", a: "Circle", opts: ["Square", "Triangle", "Circle", "Rectangle"] },
            { q: "10A, 20B, 30C, ___?", a: "40D", opts: ["40C", "40D", "50E", "30D"] },
            { q: "Pattern: 1, 3, 6, 10, ___? (Triangular numbers)", a: "15", opts: ["12", "14", "15", "20"] },
            { q: "Z, X, V, T, ___? (Skip one backward)", a: "R", opts: ["S", "R", "Q", "P"] },
            { q: "Small Square, Medium Square, Big Square, Small Square, ___?", a: "Medium Square", opts: ["Small", "Medium", "Big", "None"] },
            { q: "Pattern: 2, 5, 8, 11, ___?", a: "14", opts: ["12", "13", "14", "15"] },
            { q: "A1, B2, C3, ___?", a: "D4", opts: ["D3", "E5", "D4", "C4"] },
            { q: "Pattern: 100, 90, 80, 70, ___?", a: "60", opts: ["65", "60", "50", "0"] }
        ],
        "Tough": [
            { q: "1, 2, 4, 7, 11, 16, ___?", a: "22", opts: ["20", "21", "22", "23"] },
            { q: "Pattern: 1, 8, 27, 64, ___? (Cubes)", a: "125", opts: ["81", "100", "125", "216"] },
            { q: "If A=1, B=2, then B+A = 3. What is C+A?", a: "4", opts: ["3", "4", "5", "6"] },
            { q: "Clockwise turn: Top, Right, Bottom, ___?", a: "Left", opts: ["Top", "Left", "Diagonal", "None"] },
            { q: "Pattern: 2, 6, 12, 20, 30, ___?", a: "42", opts: ["36", "40", "42", "45"] },
            { q: "A, C, F, J, ___? (+2, +3, +4...)", a: "O", opts: ["K", "M", "N", "O"] },
            { q: "Pattern: 1, 1, 2, 3, 5, 8, 13, ___?", a: "21", opts: ["15", "18", "21", "25"] },
            { q: "If a pattern grows: 3, 9, 27, ___?", a: "81", opts: ["30", "54", "81", "90"] },
            { q: "Next in sequence: 1/2, 2/3, 3/4, ___?", a: "4/5", opts: ["4/5", "5/6", "1/5", "4/4"] },
            { q: "0, 3, 8, 15, 24, ___? (n²-1)", a: "35", opts: ["30", "35", "36", "40"] }
        ]
    },
    "Secret Codes (Decoding)": {
        "Easy": [
            { q: "If A=1, B=2, C=3, what is 'CAB'?", a: "312", opts: ["123", "321", "312", "213"] },
            { q: "If CAT is DBU (each letter +1), what is DOG?", a: "EPH", opts: ["EPH", "ENF", "CPH", "DOH"] },
            { q: "If 1=S, 2=U, 3=N, what is 321?", a: "NUS", opts: ["SUN", "NUS", "USN", "SNU"] },
            { q: "If RED is 1, BLUE is 2, what is GREEN?", a: "3", opts: ["1", "2", "3", "4"] },
            { q: "If HELLO is 5 letters, what is WORLD?", a: "5", opts: ["4", "5", "6", "10"] },
            { q: "Decode: '1 13' (A=1, M=13)", a: "AM", opts: ["MA", "AM", "ME", "AN"] },
            { q: "If BOY is CPZ, what is GIRL?", a: "HJSM", opts: ["HJSM", "FHKK", "GISM", "IKSM"] },
            { q: "If 0 is A and 1 is B, what is 101?", a: "BAB", opts: ["ABA", "BAB", "AAA", "BBB"] },
            { q: "If YES is NO, then NO is ___?", a: "YES", opts: ["YES", "OFF", "ON", "STAY"] },
            { q: "If UP is 21-16 (Position), what is AT?", a: "1-20", opts: ["1-2", "1-20", "20-1", "2-1"] }
        ],
        "Moderate": [
            { q: "If APPLE is ELPPA (reversed), what is FRUIT?", a: "TIURF", opts: ["FRUIT", "TIURF", "TURIF", "RIFTU"] },
            { q: "If BOOK is 2-15-15-11, what is PEN?", a: "16-5-14", opts: ["16-5-14", "15-4-13", "16-6-15", "5-16-14"] },
            { q: "If COLD is DPME (+1), what is HOT?", a: "IPU", opts: ["IPU", "GNU", "IQU", "HPU"] },
            { q: "If 123 is ABC, then 246 is ___?", a: "BDF", opts: ["BDE", "BDF", "BEG", "BCE"] },
            { q: "If SCHOOL is 6, TEACHER is 7, STUDENT is ___?", a: "7", opts: ["6", "7", "8", "9"] },
            { q: "If GOOD is 7-15-15-4, what is BAD?", a: "2-1-4", opts: ["1-2-3", "2-1-4", "4-1-2", "3-2-1"] },
            { q: "Decode: '3-1-20' (Positions in Alpha)", a: "CAT", opts: ["DOG", "BAT", "CAT", "RAT"] },
            { q: "If SKY is BLUE, and BLUE is WATER, where do birds fly?", a: "WATER", opts: ["SKY", "BLUE", "WATER", "GROUND"] },
            { q: "If 2=B, 4=D, 6=F, what is 8?", a: "H", opts: ["G", "H", "I", "J"] },
            { q: "If FAST is GBTU, what is SLOW?", a: "TMPX", opts: ["TMPX", "RLNV", "TKPX", "TLPW"] }
        ],
        "Tough": [
            { q: "If BOX is 2-30-72 (Pos x factor), what is CAT?", a: "3-2-60", opts: ["3-1-20", "3-2-60", "6-2-40", "3-4-20"] },
            { q: "If 1234 is GIVE, what is 4321?", a: "EVIG", opts: ["GIVE", "EVIG", "EIVG", "VEIG"] },
            { q: "If MATH is 13-1-20-8, what is SUM?", a: "19-21-13", opts: ["19-21-13", "18-20-12", "20-22-14", "19-1-13"] },
            { q: "If ICE is 9-3-5, what is FIRE?", a: "6-9-18-5", opts: ["6-9-18-5", "5-8-17-4", "7-10-19-6", "6-8-18-5"] },
            { q: "If RAIN is 181914, what is SUN?", a: "192114", opts: ["182114", "192114", "192014", "192115"] },
            { q: "If MOON is NMOP (Next letters), what is STAR?", a: "TUBS", opts: ["TUBS", "RTAS", "TSBS", "TUAT"] },
            { q: "If A=Z, B=Y, C=X, what is 'BOY'?", a: "YLB", opts: ["YPB", "YLC", "YLB", "XOA"] },
            { q: "If 111 is 3, 222 is 6, what is 444?", a: "12", opts: ["8", "10", "12", "16"] },
            { q: "Decode: 'S-T-U-D-Y' if each is shifted -1.", a: "RTCDX", opts: ["TVVEZ", "RTCDX", "RSSCX", "QUBCX"] },
            { q: "If 5 is E, 10 is J, 15 is O, what is 20?", a: "T", opts: ["S", "T", "U", "V"] }
        ]
    },
    "Tiling & Tessellations": {
        "Easy": [
            { q: "A pattern that covers a floor without gaps is a ___.", a: "Tiling", opts: ["Painting", "Tiling", "Circle", "Border"] },
            { q: "Can we tile a floor using only squares?", a: "Yes", opts: ["Yes", "No", "Maybe", "Only in circles"] },
            { q: "Which shape is used in a honeycomb pattern?", a: "Hexagon", opts: ["Square", "Triangle", "Hexagon", "Circle"] },
            { q: "Do bricks on a wall follow a pattern?", a: "Yes", opts: ["Yes", "No", "Maybe", "Never"] },
            { q: "Which shape has no gaps when tiled: Square or Circle?", a: "Square", opts: ["Square", "Circle", "Oval", "Star"] },
            { q: "Tiling is also called ___.", a: "Tessellation", opts: ["Addition", "Tessellation", "Multiplication", "Subtraction"] },
            { q: "Can we use two different shapes for tiling?", a: "Yes", opts: ["Yes", "No", "Only squares", "Only triangles"] },
            { q: "A chessboard is a tiling of ___.", a: "Squares", opts: ["Circles", "Triangles", "Squares", "Stars"] },
            { q: "If you use triangles to tile, are there gaps?", a: "No", opts: ["Yes", "No", "Maybe", "Always"] },
            { q: "Which room feature usually has tiling?", a: "Floor", opts: ["Curtain", "Floor", "Light", "Air"] }
        ],
        "Moderate": [
            { q: "How many squares meet at one point in a square tiling?", a: "4", opts: ["2", "3", "4", "6"] },
            { q: "A pattern of 'Square, Triangle, Square, Triangle' is a ___ tiling.", a: "Mixed", opts: ["Regular", "Mixed", "Curved", "Broken"] },
            { q: "Why can't circles tile perfectly?", a: "They leave gaps", opts: ["They are too big", "They leave gaps", "They roll away", "They have sides"] },
            { q: "Which of these can tile: Hexagon, Pentagon, or Octagon?", a: "Hexagon", opts: ["Hexagon", "Pentagon", "Octagon", "None"] },
            { q: "If a tile is 1 unit, how many to cover a 4-unit area?", a: "4", opts: ["2", "4", "8", "16"] },
            { q: "A bathroom wall with blue and white tiles is a ___.", a: "Pattern", opts: ["Mess", "Pattern", "Circle", "Gap"] },
            { q: "Does a jigsaw puzzle represent tiling?", a: "Yes", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "Can you tile a floor with stars?", a: "No (they leave gaps)", opts: ["Yes", "No (they leave gaps)", "Only at night", "None"] },
            { q: "What is the shape of a common floor tile?", a: "Square", opts: ["Circle", "Square", "Sphere", "Cone"] },
            { q: "How many triangles meet at a point in a triangular tiling?", a: "6", opts: ["3", "4", "6", "8"] }
        ],
        "Tough": [
            { q: "Which regular polygon does NOT tessellate alone?", a: "Pentagon", opts: ["Square", "Triangle", "Hexagon", "Pentagon"] },
            { q: "Sum of angles at a point in a perfect tiling is ___.", a: "360°", opts: ["90°", "180°", "360°", "None"] },
            { q: "A tiling using only one type of regular polygon is a ___ tessellation.", a: "Regular", opts: ["Regular", "Semi-regular", "Mixed", "None"] },
            { q: "How many hexagons meet at a point in tiling?", a: "3", opts: ["3", "4", "6", "2"] },
            { q: "If you tile a floor with rectangles, is it a tessellation?", a: "Yes", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "Which shape can fill space without gaps: Cube or Sphere?", a: "Cube", opts: ["Cube", "Sphere", "Cone", "None"] },
            { q: "Is a honeycomb a natural tessellation?", a: "Yes", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "If a tile is rotated 90°, does it still tile?", a: "Yes (if square)", opts: ["Yes", "No", "Only circles", "None"] },
            { q: "A pattern where shapes overlap is NOT a tessellation. True or False?", a: "True", opts: ["True", "False", "Maybe", "None"] },
            { q: "Can you tile with a shape that has curved sides if they fit perfectly?", a: "Yes", opts: ["Yes", "No", "Only straight lines", "None"] }
        ]
    }
};
