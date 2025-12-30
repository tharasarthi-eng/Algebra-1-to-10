window.currentChapterData = {
    "Introduction & Common Difference": {
        "Easy": [
            { q: "A sequence where each term is obtained by adding a fixed number to the preceding term is called an ____.", a: "Arithmetic Progression", opts: ["Geometric Progression", "Arithmetic Progression", "Harmonic Progression", "None"] },
            { q: "The fixed number added in an AP is called the ____.", a: "Common Difference", opts: ["First term", "Last term", "Common Difference", "Ratio"] },
            { q: "In the AP: 2, 4, 6, 8..., what is the common difference (d)?", a: "2", opts: ["1", "2", "4", "0"] },
            { q: "If the first term is 'a' and common difference is 'd', the second term is ____.", a: "a + d", opts: ["a - d", "a + d", "2a", "ad"] },
            { q: "Can the common difference of an AP be negative?", a: "Yes", opts: ["Yes", "No", "Only for fractions", "None"] },
            { q: "Find 'd' for the AP: 10, 7, 4, 1...", a: "-3", opts: ["3", "-3", "17", "0"] },
            { q: "What is the common difference if all terms of an AP are the same?", a: "0", opts: ["1", "0", "-1", "Infinite"] },
            { q: "If a = 5 and d = 3, find the first three terms.", a: "5, 8, 11", opts: ["5, 10, 15", "5, 8, 11", "3, 8, 13", "None"] },
            { q: "Which of these is an AP?", a: "1, 3, 5, 7", opts: ["1, 2, 4, 8", "1, 3, 5, 7", "1, 10, 100", "None"] },
            { q: "In the AP formula, what does 'n' represent?", a: "Number of terms", opts: ["Common difference", "Number of terms", "First term", "Sum"] }
        ],
        "Moderate": [
            { q: "Find 'd' for the AP: 1/3, 5/3, 9/3, 13/3...", a: "4/3", opts: ["1/3", "4/3", "5/3", "1"] },
            { q: "If k+2, 4k-6 and 3k-2 are three consecutive terms of an AP, find k.", a: "3", opts: ["1", "2", "3", "4"] },
            { q: "Write the next term of the AP: √2, √8, √18, √32...", a: "√50", opts: ["√40", "√50", "√64", "6"] },
            { q: "Find the common difference of an AP where a_n = 3n + 7.", a: "3", opts: ["3", "7", "10", "1"] },
            { q: "If the common difference of an AP is 5, then a_18 - a_13 is ____.", a: "25", opts: ["5", "20", "25", "30"] },
            { q: "For an AP, if d = -4, n = 7, a_n = 4, find a.", a: "28", opts: ["6", "7", "20", "28"] },
            { q: "In an AP, if a = 3.5, d = 0, n = 101, then a_n is ____.", a: "3.5", opts: ["0", "3.5", "103.5", "104.5"] },
            { q: "Check if -150 is a term of the AP: 11, 8, 5, 2...", a: "No", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "Find x such that x, x+3, x+6 are in AP.", a: "Any real number", opts: ["0", "3", "Any real number", "None"] },
            { q: "If the common difference is -2, the sequence is ____.", a: "Decreasing", opts: ["Increasing", "Decreasing", "Constant", "None"] }
        ],
        "Tough": [
            { q: "If 7 times the 7th term of an AP is equal to 11 times its 11th term, the 18th term is ____.", a: "0", opts: ["0", "1", "18", "77"] },
            { q: "Find the value of x for which (8x+4), (6x-2) and (2x+7) are in AP.", a: "15/2", opts: ["15/2", "7.5", "Both A & B", "None"] },
            { q: "The common difference of the AP 1/p, (1-p)/p, (1-2p)/p... is ____.", a: "-1", opts: ["p", "1", "-1", "-p"] },
            { q: "If the p-th term of an AP is q and q-th term is p, the n-th term is ____.", a: "p + q - n", opts: ["p + q + n", "p + q - n", "pq - n", "0"] },
            { q: "Find the common difference of an AP whose sum of first n terms is 3n² + n.", a: "6", opts: ["3", "6", "1", "None"] },
            { q: "If a_n is the n-th term of an AP, then a_{n+1} - a_n is always ____.", a: "d", opts: ["a", "d", "n", "None"] },
            { q: "The common difference of an AP where a_n = pn + q is ____.", a: "p", opts: ["p", "q", "p+q", "None"] },
            { q: "If a, b, c are in AP, then 2b = ____.", a: "a + c", opts: ["a + c", "ac", "a - c", "None"] },
            { q: "If (a+b), (b+c), (c+a) are in AP, find common difference.", a: "None of these (logic check)", opts: ["a-b", "b-c", "c-a", "None"] },
            { q: "The common difference of the AP: log a, log(ab), log(ab²)... is ____.", a: "log b", opts: ["log a", "log b", "b", "None"] }
        ]
    },
    "The n-th Term of an AP": {
        "Easy": [
            { q: "Formula for the n-th term of an AP is a_n = ____.", a: "a + (n-1)d", opts: ["a + nd", "a + (n-1)d", "a + (n+1)d", "n(a+d)"] },
            { q: "Find the 10th term of the AP: 2, 7, 12...", a: "47", opts: ["42", "47", "52", "37"] },
            { q: "Which term of the AP: 21, 18, 15... is 0?", a: "8th", opts: ["7th", "8th", "9th", "10th"] },
            { q: "Find the 30th term of 10, 7, 4...", a: "-77", opts: ["-77", "-87", "77", "97"] },
            { q: "In a_n = a + (n-1)d, if a=10, d=5, n=11, find a_n.", a: "60", opts: ["50", "60", "65", "55"] },
            { q: "Find the 11th term of AP: -3, -0.5, 2...", a: "22", opts: ["22", "25", "28", "30"] },
            { q: "How many terms are in the AP: 7, 13, 19... 205?", a: "34", opts: ["33", "34", "35", "36"] },
            { q: "Find the 10th term from the end of the AP: 4, 9, 14... 254.", a: "209", opts: ["209", "214", "204", "None"] },
            { q: "The n-th term of an AP is also called the ____ term.", a: "General", opts: ["First", "Last", "General", "Middle"] },
            { q: "If the first term is 7 and 10th term is 25, find d.", a: "2", opts: ["1", "2", "3", "None"] }
        ],
        "Moderate": [
            { q: "Which term of the AP: 3, 15, 27, 39... will be 132 more than its 54th term?", a: "65th", opts: ["60th", "64th", "65th", "70th"] },
            { q: "Find the number of multiples of 4 between 10 and 250.", a: "60", opts: ["58", "60", "62", "240"] },
            { q: "How many three-digit numbers are divisible by 7?", a: "128", opts: ["120", "128", "132", "140"] },
            { q: "Determine the AP whose 3rd term is 16 and 7th term exceeds 5th by 12.", a: "4, 10, 16, 22...", opts: ["4, 8, 12...", "4, 10, 16...", "6, 12, 18...", "None"] },
            { q: "Find the 20th term from the last term of the AP: 3, 8, 13... 253.", a: "158", opts: ["153", "158", "163", "None"] },
            { q: "Two APs have same common difference. Difference between 100th terms is 100. Difference between 1000th terms?", a: "100", opts: ["100", "1000", "0", "None"] },
            { q: "The 4th term of an AP is 18 and the difference between 9th and 15th term is 30. Find AP.", a: "3, 8, 13...", opts: ["3, 8, 13...", "5, 10, 15...", "4, 9, 14...", "None"] },
            { q: "Find the middle term of the AP: 6, 13, 20... 216.", a: "111", opts: ["104", "111", "118", "None"] },
            { q: "If m-th term of an AP is 1/n and n-th term is 1/m, find mn-th term.", a: "1", opts: ["0", "1", "1/mn", "mn"] },
            { q: "Find the 10th term of an AP if a_3 = 5 and a_7 = 13.", a: "19", opts: ["17", "19", "21", "23"] }
        ],
        "Tough": [
            { q: "For what value of n are the n-th terms of two APs: 63, 65, 67... and 3, 10, 17... equal?", a: "13", opts: ["11", "12", "13", "15"] },
            { q: "The sum of 4th and 8th terms of an AP is 24 and sum of 6th and 10th terms is 44. Find first term.", a: "-13", opts: ["-13", "13", "5", "-5"] },
            { q: "If the m-th term is n and n-th term is m, find the r-th term.", a: "m + n - r", opts: ["m + n + r", "m + n - r", "0", "None"] },
            { q: "How many terms of the AP: 24, 21, 18... must be taken so that their sum is 78? (Wait, this is sum logic - skip to n-th term tough)", a: "N/A", opts: ["N/A"] },
            { q: "Find the value of n if the n-th term of 9, 7, 5... is same as n-th term of 15, 12, 9...", a: "7", opts: ["5", "6", "7", "8"] },
            { q: "In an AP, if S_n = n²p and S_m = m²p, then S_p is ____.", a: "p³", opts: ["p³", "p²", "p", "None"] },
            { q: "If a, b, c, d, e are in AP, then value of a - 4b + 6c - 4d + e is ____.", a: "0", opts: ["1", "0", "-1", "None"] },
            { q: "The ratio of 7th to 3rd term of an AP is 12:5. Find ratio of 13th to 4th term.", a: "10:3", opts: ["10:3", "7:2", "3:1", "None"] },
            { q: "Divide 32 into four parts in AP such that product of extremes to product of means is 7:15.", a: "2, 6, 10, 14", opts: ["2, 6, 10, 14", "4, 8, 12, 16", "None", "0"] },
            { q: "Which term of AP: 5, 2, -1... is -22?", a: "10th", opts: ["9th", "10th", "11th", "12th"] }
        ]
    },
    "Sum of First n Terms": {
        "Easy": [
            { q: "The formula for sum of first n terms is S_n = ____.", a: "n/2 [2a + (n-1)d]", opts: ["n(a+d)", "n/2 [2a + (n-1)d]", "n/2 [a + l]", "Both B & C"] },
            { q: "Find the sum of first 10 natural numbers.", a: "55", opts: ["45", "50", "55", "100"] },
            { q: "Find the sum of the AP: 2, 7, 12... to 10 terms.", a: "245", opts: ["245", "250", "200", "None"] },
            { q: "If a=1, l=10, n=10, find S_n.", a: "55", opts: ["55", "110", "100", "50"] },
            { q: "What is the sum of first n odd natural numbers?", a: "n²", opts: ["2n", "n²", "n+1", "n(n+1)"] },
            { q: "What is the sum of first n even natural numbers?", a: "n(n + 1)", opts: ["n²", "n(n+1)", "2n", "None"] },
            { q: "Find sum of: 1 + 2 + 3... + 100.", a: "5050", opts: ["5000", "5050", "5100", "10000"] },
            { q: "If S_n is given, a_n = S_n - ____.", a: "S_{n-1}", opts: ["S_{n+1}", "S_{n-1}", "a_{n-1}", "None"] },
            { q: "Find the sum of first 5 multiples of 3.", a: "45", opts: ["15", "30", "45", "60"] },
            { q: "Find S_n if a=5, d=2, n=5.", a: "45", opts: ["45", "50", "35", "None"] }
        ],
        "Moderate": [
            { q: "Find the sum of all two-digit odd numbers.", a: "2475", opts: ["2475", "2500", "2400", "None"] },
            { q: "How many terms of the AP: 9, 17, 25... must be taken to give a sum of 636?", a: "12", opts: ["10", "12", "14", "16"] },
            { q: "Find the sum of first 40 positive integers divisible by 6.", a: "4920", opts: ["4800", "4920", "5040", "None"] },
            { q: "Find the sum of odd numbers between 0 and 50.", a: "625", opts: ["600", "625", "650", "500"] },
            { q: "The first and last terms of an AP are 17 and 350. If d=9, find the sum.", a: "6973", opts: ["6973", "7000", "6500", "None"] },
            { q: "Find the sum of first 22 terms of an AP in which d=7 and 22nd term is 149.", a: "1661", opts: ["1500", "1661", "1700", "None"] },
            { q: "If S_n = 3n² + 5n, find the 2nd term.", a: "14", opts: ["8", "14", "22", "None"] },
            { q: "Find the sum of first 15 multiples of 8.", a: "960", opts: ["800", "900", "960", "1000"] },
            { q: "In an AP, if a=8, a_n=62, S_n=210, find n.", a: "6", opts: ["5", "6", "7", "8"] },
            { q: "Find the sum of first 51 terms of an AP whose 2nd and 3rd terms are 14 and 18.", a: "5610", opts: ["5000", "5610", "6000", "None"] }
        ],
        "Tough": [
            { q: "The sum of first n terms of an AP is 5n - n². Find the n-th term.", a: "6 - 2n", opts: ["4 - 2n", "6 - 2n", "2n - 6", "None"] },
            { q: "If the ratio of sums of m and n terms of an AP is m²:n², find ratio of m-th and n-th terms.", a: "(2m-1):(2n-1)", opts: ["m:n", "m²:n²", "(2m-1):(2n-1)", "None"] },
            { q: "If the sum of first p terms is q and sum of first q terms is p, find sum of first (p+q) terms.", a: "-(p + q)", opts: ["0", "p + q", "-(p + q)", "pq"] },
            { q: "Find the sum of all three-digit natural numbers which are multiples of 11.", a: "44550", opts: ["44550", "45000", "44000", "None"] },
            { q: "If the sum of first n terms of two APs are in ratio (7n+1):(4n+27), find ratio of 11th terms.", a: "4:3", opts: ["4:3", "7:4", "2:1", "None"] },
            { q: "The sum of third and seventh terms of an AP is 6 and their product is 8. Find S_16.", a: "76 or 20", opts: ["76", "20", "76 or 20", "None"] },
            { q: "A man repays a loan of ₹3250 by paying ₹20 in first month and then increases by ₹15 every month. Time to clear?", a: "20 months", opts: ["15", "20", "25", "None"] },
            { q: "If S_n = n(4n+1), find the AP.", a: "5, 13, 21...", opts: ["5, 13, 21...", "4, 8, 12...", "1, 5, 9...", "None"] },
            { q: "Show that the sum of an AP whose first term is a, second b and last c is [(a+c)(b+c-2a)] / [2(b-a)].", a: "True", opts: ["True", "False", "Only if a=0", "None"] },
            { q: "Find sum of all integers between 100 and 1000 divisible by 9.", a: "55350", opts: ["55350", "50000", "60000", "None"] }
        ]
    }
};

