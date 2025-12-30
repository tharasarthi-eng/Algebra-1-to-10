
window.currentChapterData = {
    "Exponential Notation Basics": {
        "Easy": [
            { q: "In the expression $5^3$, what is the base?", a: "5", opts: ["3", "5", "15", "125"] },
            { q: "In the expression $2^4$, what is the exponent?", a: "4", opts: ["2", "4", "8", "16"] },
            { q: "Write $3 \times 3 \times 3 \times 3$ in exponential form.", a: "$3^4$", opts: ["$3^3$", "$3^4$", "$4^3$", "12"] },
            { q: "Find the value of $2^3$.", a: "8", opts: ["6", "8", "16", "2"] },
            { q: "What is the value of $10^2$?", a: "100", opts: ["20", "100", "1000", "200"] },
            { q: "Any non-zero number raised to the power 0 is ____.", a: "1", opts: ["0", "1", "The number itself", "None"] },
            { q: "Value of $1^{100}$ is ____.", a: "1", opts: ["100", "1", "0", "10"] },
            { q: "Value of $(-1)^2$ is ____.", a: "1", opts: ["1", "-1", "2", "-2"] },
            { q: "Write 1000 as a power of 10.", a: "$10^3$", opts: ["$10^2$", "$10^3$", "$10^4$", "$100^{10}$"] },
            { q: "Expand $a^3b^2$.", a: "$a \times a \times a \times b \times b$", opts: ["$a \times b \times 3 \times 2$", "$a+a+a+b+b$", "$a \times a \times a \times b \times b$", "None"] }
        ],
        "Moderate": [
            { q: "Which is greater: $2^3$ or $3^2$?", a: "$3^2$ (9 > 8)", opts: ["$2^3$", "$3^2$", "Both equal", "None"] },
            { q: "Find the value of $(-1)^3$.", a: "-1", opts: ["1", "-1", "3", "-3"] },
            { q: "Express 729 as a power of 3.", a: "$3^6$", opts: ["$3^4$", "$3^5$", "$3^6$", "$3^7$"] },
            { q: "Find the value of $(-2)^4$.", a: "16", opts: ["8", "-8", "16", "-16"] },
            { q: "If $2^x = 32$, find x.", a: "5", opts: ["4", "5", "6", "10"] },
            { q: "Value of $(10^0 + 2^0 + 3^0)$ is ____.", a: "3", opts: ["0", "1", "3", "6"] },
            { q: "Express 625 in exponential form with base 5.", a: "$5^4$", opts: ["$5^2$", "$5^3$", "$5^4$", "$5^5$"] },
            { q: "What is the square of 15?", a: "225", opts: ["30", "150", "225", "255"] },
            { q: "Value of $(-3)^3 \times (-1)^5$ is ____.", a: "27", opts: ["27", "-27", "81", "-81"] },
            { q: "Write 144 as a power of 12.", a: "$12^2$", opts: ["$12^1$", "$12^2$", "$12^3$", "12"] }
        ],
        "Tough": [
            { q: "Find the value of $n$ if $2^{n-1} = 8$.", a: "4", opts: ["3", "4", "5", "2"] },
            { q: "Compare $2^{10}$ and $10^2$.", a: "$2^{10} > 10^2$", opts: ["$2^{10} < 10^2$", "$2^{10} > 10^2$", "Equal", "None"] },
            { q: "If $(-3)^4 \times (-3)^x = (-3)^9$, find x.", a: "5", opts: ["4", "5", "13", "36"] },
            { q: "Value of $[(1/2)^2]^3$ is ____.", a: "1/64", opts: ["1/12", "1/32", "1/64", "1/8"] },
            { q: "Identify the smallest: $2^6, 3^4, 4^3, 5^2$.", a: "$5^2$ (25)", opts: ["$2^6$", "$3^4$", "$4^3$", "$5^2$"] },
            { q: "If $a=2$ and $b=3$, find the value of $a^b + b^a$.", a: "17", opts: ["12", "13", "17", "31"] },
            { q: "Express 3375 in exponential form with base 15.", a: "$15^3$", opts: ["$15^2$", "$15^3$", "$15^4$", "None"] },
            { q: "Solve for x: $5^{2x+1} = 125$.", a: "1", opts: ["0", "1", "2", "3"] },
            { q: "Value of $(-1)^{even\ number}$ is always ____.", a: "1", opts: ["1", "-1", "0", "None"] },
            { q: "Simplify: $(a^2)^3 \times a^4$.", a: "$a^{10}$", opts: ["$a^9$", "$a^{10}$", "$a^{24}$", "$a^{12}$"] }
        ]
    },
    "Laws of Exponents - Part 1": {
        "Easy": [
            { q: "Law 1: $a^m \times a^n = a^{?}$", a: "$m+n$", opts: ["$m+n$", "$m-n$", "$mn$", "$m/n$"] },
            { q: "Law 2: $a^m \div a^n = a^{?}$ (where m > n)", a: "$m-n$", opts: ["$m+n$", "$m-n$", "$mn$", "$m/n$"] },
            { q: "Solve: $2^3 \times 2^2$.", a: "$2^5$", opts: ["$2^6$", "$2^5$", "$4^5$", "$2^1$"] },
            { q: "Solve: $5^7 \div 5^3$.", a: "$5^4$", opts: ["$5^{10}$", "$5^4$", "$5^{21}$", "5"] },
            { q: "Simplify: $x^2 \times x^3$.", a: "$x^5$", opts: ["$x^6$", "$x^5$", "$2x^5$", "$x^1$"] },
            { q: "Simplify: $p^{10} \div p^2$.", a: "$p^8$", opts: ["$p^5$", "$p^8$", "$p^{12}$", "$p^{20}$"] },
            { q: "Is $a^m + a^n = a^{m+n}$?", a: "No", opts: ["Yes", "No", "Only for m=n", "None"] },
            { q: "Value of $3^2 \times 3^0$ is ____.", a: "9", opts: ["0", "1", "9", "27"] },
            { q: "Simplify: $(-4)^2 \times (-4)^3$.", a: "$(-4)^5$", opts: ["$(-4)^6$", "$(-4)^5$", "$16^5$", "None"] },
            { q: "Solve: $a^1 \times a^1$.", a: "$a^2$", opts: ["$a^1$", "$a^2$", "2a", "1"] }
        ],
        "Moderate": [
            { q: "Simplify: $2^5 \times 5^5$.", a: "$(10)^5$", opts: ["$7^5$", "$10^{10}$", "$(10)^5$", "$10^{25}$"] },
            { q: "Simplify: $(2^3)^2$.", a: "$2^6$", opts: ["$2^5$", "$2^6$", "$2^9$", "$6^3$"] },
            { q: "Find value: $(3^2 \times 3^3) \div 3^4$.", a: "3", opts: ["3", "9", "27", "1"] },
            { q: "Value of $(2^0 + 3^0) \times 4^0$.", a: "2", opts: ["0", "1", "2", "5"] },
            { q: "Simplify: $(a^b)^c$.", a: "$a^{bc}$", opts: ["$a^{b+c}$", "$a^{bc}$", "$a^{b/c}$", "None"] },
            { q: "Simplify: $a^3 \times b^3$.", a: "$(ab)^3$", opts: ["$(ab)^6$", "$(ab)^3$", "$a+b^3$", "None"] },
            { q: "Solve: $(10^8 \div 10^5) \times 10^3$.", a: "$10^6$", opts: ["$10^6$", "$10^0$", "$10^{10}$", "$10^{16}$"] },
            { q: "Find x if $7^x \times 7^2 = 7^5$.", a: "3", opts: ["2", "3", "7", "10"] },
            { q: "Simplify: $(2^2)^0$.", a: "1", opts: ["1", "0", "4", "2"] },
            { q: "Simplify: $x^a \div x^b$ if a=b.", a: "1", opts: ["0", "1", "$x^a$", "None"] }
        ],
        "Tough": [
            { q: "Simplify: $(2^5 \div 2^8) \times 2^3$.", a: "1", opts: ["$2^0$ (1)", "$2^{-6}$", "$2^6$", "0"] },
            { q: "Find value: $(12^4 \times 9^3 \times 4) / (6^3 \times 8^2 \times 27)$.", a: "162", opts: ["162", "81", "243", "None"] },
            { q: "Simplify: $(a^5 / a^3) \times a^0$.", a: "$a^2$", opts: ["$a^2$", "$a^8$", "1", "0"] },
            { q: "If $2^n = 1024$, find $n/2$.", a: "5", opts: ["5", "10", "4", "8"] },
            { q: "Value of $[(-2)^3]^2$ is ____.", a: "64", opts: ["-64", "64", "32", "-32"] },
            { q: "Simplify: $(3^7 \div 3^2) \div 3^5$.", a: "1", opts: ["1", "0", "$3^5$", "$3^{10}$"] },
            { q: "Find x: $(2/3)^3 \times (2/3)^6 = (2/3)^{2x-1}$.", a: "5", opts: ["4", "5", "9", "4.5"] },
            { q: "Solve: $2^3 + 2^3$.", a: "$2^4$", opts: ["$2^6$", "$4^3$", "$2^4$", "$2^9$"] },
            { q: "Evaluate: $2^5 / 5^0$.", a: "32", opts: ["32", "0", "1", "None"] },
            { q: "Simplify: $a^m \times a^n \times a^p$.", a: "$a^{m+n+p}$", opts: ["$a^{m+n+p}$", "$a^{mnp}$", "3a", "None"] }
        ]
    },
    "Decimal & Scientific Notation": {
        "Easy": [
            { q: "Standard form is used to write very ____ numbers.", a: "Large", opts: ["Small", "Large", "Odd", "Fractional"] },
            { q: "In $k \times 10^n$, k must be between ____.", a: "1 and 10", opts: ["0 and 1", "1 and 10", "1 and 100", "None"] },
            { q: "Write 5000 in scientific notation.", a: "$5 \times 10^3$", opts: ["$5 \times 10^2$", "$5 \times 10^3$", "$50 \times 10^2$", "None"] },
            { q: "Write $1.2 \times 10^2$ in usual form.", a: "120", opts: ["12", "120", "1200", "1.20"] },
            { q: "How many zeros are in $10^5$?", a: "5", opts: ["1", "5", "10", "0"] },
            { q: "Standard form of 1,00,000 is ____.", a: "$1 \times 10^5$", opts: ["$1 \times 10^4$", "$1 \times 10^5$", "$10 \times 10^4$", "None"] },
            { q: "Express 40 in scientific notation.", a: "$4 \times 10^1$", opts: ["$4 \times 10^0$", "$4 \times 10^1$", "$40 \times 10^0$", "None"] },
            { q: "Scientific notation of 10 is ____.", a: "$1 \times 10^1$", opts: ["$1 \times 10^0$", "$1 \times 10^1$", "$10 \times 10^1$", "None"] },
            { q: "Usual form of $3 \times 10^4$.", a: "30,000", opts: ["3,000", "30,000", "300,000", "4000"] },
            { q: "Is $15 \times 10^3$ in standard form?", a: "No", opts: ["Yes", "No", "Maybe", "None"] }
        ],
        "Moderate": [
            { q: "Standard form of 5985.3 is ____.", a: "$5.9853 \times 10^3$", opts: ["$59.853 \times 10^2$", "$5.9853 \times 10^3$", "$5.9853 \times 10^4$", "None"] },
            { q: "Write 3,43,00,000 in scientific notation.", a: "$3.43 \times 10^7$", opts: ["$3.43 \times 10^6$", "$3.43 \times 10^7$", "$34.3 \times 10^6$", "None"] },
            { q: "Usual form of $4.56 \times 10^5$.", a: "4,56,000", opts: ["45,600", "4,56,000", "45,60,000", "None"] },
            { q: "Distance of Sun from Earth is 150,000,000 km. Standard form?", a: "$1.5 \times 10^8$", opts: ["$1.5 \times 10^7$", "$1.5 \times 10^8$", "$15 \times 10^7$", "None"] },
            { q: "Express 0.007 in scientific notation (Bonus/Advanced).", a: "$7 \times 10^{-3}$", opts: ["$7 \times 10^3$", "$7 \times 10^{-3}$", "0.7", "None"] },
            { q: "Number of stars in a galaxy is approx $1 \times 10^{11}$. How many zeros?", a: "11", opts: ["10", "11", "12", "9"] },
            { q: "Compare $2.3 \times 10^4$ and $4.5 \times 10^3$.", a: "$2.3 \times 10^4$ is larger", opts: ["$2.3 \times 10^4$ is larger", "$4.5 \times 10^3$ is larger", "Equal", "None"] },
          {
            
