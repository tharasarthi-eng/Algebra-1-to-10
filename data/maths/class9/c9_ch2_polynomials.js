
window.currentChapterData = {
    "Basics & Zeros of Polynomials": {
        "Easy": [
            { q: "What is the degree of the polynomial $4x^3 - 5x^2 + 3$?", a: "3", opts: ["2", "3", "4", "5"] },
            { q: "A polynomial of degree 1 is called a ____ polynomial.", a: "Linear", opts: ["Linear", "Quadratic", "Cubic", "Zero"] },
            { q: "The value of $p(x) = 5x - 4x^2 + 3$ at $x = 0$ is ____.", a: "3", opts: ["0", "3", "5", "-4"] },
            { q: "A real number 'a' is a zero of polynomial $p(x)$ if $p(a)$ is ____.", a: "0", opts: ["0", "1", "-1", "Infinite"] },
            { q: "How many terms are in a binomial?", a: "2", opts: ["1", "2", "3", "None"] },
            { q: "What is the degree of a non-zero constant polynomial?", a: "0", opts: ["0", "1", "Not defined", "Infinite"] },
            { q: "Is $\\sqrt{x} + 3$ a polynomial?", a: "No", opts: ["Yes", "No", "Only if x > 0", "None"] },
            { q: "Find the zero of the polynomial $p(x) = x - 5$.", a: "5", opts: ["5", "-5", "0", "1"] },
            { q: "Coefficient of $x^2$ in $2 + x^2 + x$ is ____.", a: "1", opts: ["2", "1", "0", "x"] },
            { q: "Degree of the zero polynomial is ____.", a: "Not defined", opts: ["0", "1", "Not defined", "Infinite"] }
        ],
        "Moderate": [
            { q: "Find the zeros of the polynomial $p(x) = (x-2)(x+3)$.", a: "2, -3", opts: ["2, 3", "-2, 3", "2, -3", "0, 0"] },
            { q: "If $p(x) = x^2 - 2\\sqrt{2}x + 1$, find $p(2\\sqrt{2})$.", a: "1", opts: ["0", "1", "2", "4"] },
            { q: "Check if -2 is a zero of $p(x) = x^3 + 3x^2 + 5x + 6$.", a: "Yes", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "The number of zeros a cubic polynomial can have is at most ____.", a: "3", opts: ["1", "2", "3", "4"] },
            { q: "Find the value of $k$ if $x = 1$ is a zero of $p(x) = 2x^2 + kx + \\sqrt{2}$.", a: "-(2 + √2)", opts: ["2", "-2", "-(2 + √2)", "√2"] },
            { q: "What is the degree of $(x^2 + 1)^2$?", a: "4", opts: ["2", "3", "4", "5"] },
            { q: "Find $p(1)$ for $p(t) = 2 + t + 2t^2 - t^3$.", a: "4", opts: ["2", "3", "4", "5"] },
            { q: "The zeros of $x^2 - x$ are ____.", a: "0, 1", opts: ["0, 1", "1, -1", "0, -1", "None"] },
            { q: "Is every linear polynomial in one variable unique in its zero?", a: "Yes", opts: ["Yes", "No", "Only if constant is 0", "None"] },
            { q: "Coefficient of $x$ in expansion of $(x+3)^3$ is ____.", a: "27", opts: ["9", "18", "27", "1"] }
        ],
        "Tough": [
            { q: "If $p(x) = ax^2 + bx + c$ and $a+b+c = 0$, then one zero is ____.", a: "1", opts: ["0", "1", "-1", "c/a"] },
            { q: "If $x^2 + kx + 6 = (x+2)(x+3)$ for all $x$, then $k$ is ____.", a: "5", opts: ["1", "5", "6", "0"] },
            { q: "Find the remainder when $x^{51} + 51$ is divided by $x + 1$.", a: "50", opts: ["0", "50", "51", "-50"] },
            { q: "If $x/y + y/x = -1$, find the value of $x^3 - y^3$.", a: "0", opts: ["1", "0", "-1", "xy"] },
            { q: "The polynomial $x^4 + 4$ has ____ real zeros.", a: "0", opts: ["0", "2", "4", "1"] },
            { q: "If $p(x) = x^{100} + 2x^{99} + k$ is divisible by $(x+1)$, find $k$.", a: "1", opts: ["1", "-1", "0", "2"] },
            { q: "The degree of the product of a polynomial of degree $m$ and degree $n$ is ____.", a: "m + n", opts: ["mn", "m + n", "max(m,n)", "None"] },
            { q: "If $f(x) = x^2 - 5x + 1$, evaluate $f(2) - f(1) + f(0)$.", a: "-2", opts: ["-2", "0", "2", "1"] },
            { q: "Find zeros of $p(x) = x^4 - 16$.", a: "2, -2", opts: ["2, -2", "4, -4", "2, -2, 2i, -2i", "None"] },
            { q: "If the sum of coefficients of $p(x)$ is zero, then $p(x)$ is divisible by ____.", a: "x - 1", opts: ["x - 1", "x + 1", "x", "None"] }
        ]
    },
    "Remainder & Factor Theorem": {
        "Easy": [
            { q: "Find remainder when $x^2 - 2x + 1$ is divided by $x - 1$.", a: "0", opts: ["0", "1", "2", "-1"] },
            { q: "According to Factor Theorem, if $p(a) = 0$, then ____ is a factor of $p(x)$.", a: "x - a", opts: ["x + a", "x - a", "ax", "None"] },
            { q: "Find remainder when $x^3 + 1$ is divided by $x + 1$.", a: "0", opts: ["1", "-1", "0", "2"] },
            { q: "Is $(x-1)$ a factor of $x^2 + x - 2$?", a: "Yes", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "Remainder when $p(x)$ is divided by $x + a$ is ____.", a: "p(-a)", opts: ["p(a)", "p(-a)", "0", "a"] },
            { q: "If $(x-2)$ is a factor of $x^2 - 4$, what is $p(2)$?", a: "0", opts: ["0", "4", "-4", "2"] },
            { q: "Find remainder when $2x^2 - x - 1$ is divided by $x$.", a: "-1", opts: ["0", "-1", "1", "2"] },
            { q: "Check if $(x+1)$ is a factor of $x^3 + x^2 + x + 1$.", a: "Yes", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "If $p(1) = 5$, then the remainder when $p(x)$ is divided by $(x-1)$ is?", a: "5", opts: ["0", "1", "5", "-5"] },
            { q: "The constant term of a polynomial is the remainder when divided by ____.", a: "x", opts: ["x", "x-1", "x+1", "None"] }
        ],
        "Moderate": [
            { q: "Find $k$ if $x-1$ is a factor of $4x^3 + 3x^2 - 4x + k$.", a: "-3", opts: ["3", "-3", "4", "0"] },
            { q: "Factorise $6x^2 + 5x - 6$ by splitting middle term.", a: "(2x+3)(3x-2)", opts: ["(2x-3)(3x+2)", "(2x+3)(3x-2)", "(6x+1)(x-6)", "None"] },
            { q: "Find remainder when $x^3 - ax^2 + 6x - a$ is divided by $x - a$.", a: "5a", opts: ["0", "a", "5a", "6a"] },
            { q: "Is $7 + 3x$ a factor of $3x^3 + 7x$?", a: "No", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "Factorise $x^2 - 7x + 12$.", a: "(x-3)(x-4)", opts: ["(x-3)(x-4)", "(x+3)(x+4)", "(x-1)(x-12)", "None"] },
            { q: "Find value of $a$ if $x+a$ is a factor of $x^4 - a^2x^2 + 3x - a$.", a: "0", opts: ["1", "-1", "0", "2"] },
            { q: "Determine if $x+1$ is a factor of $x^4 + 3x^3 + 3x^2 + x + 1$.", a: "No", opts: ["Yes", "No", "Maybe", "None"] },
            { q: "If $(x-1)$ and $(x+1)$ are factors of $ax^3 + x^2 - 2x + b$, find $a, b$.", a: "a=2, b=-1", opts: ["a=2, b=-1", "a=1, b=1", "a=0, b=0", "None"] },
            { q: "Factorise $y^2 - 5y + 6$.", a: "(y-2)(y-3)", opts: ["(y-2)(y-3)", "(y+2)(y+3)", "(y-1)(y-6)", "None"] },
            { q: "Divide $p(x) = 3x^4 - 4x^3 - 3x - 1$ by $x - 1$ and find remainder.", a: "-5", opts: ["-5", "5", "0", "1"] }
        ],
        "Tough": [
            { q: "Factorise $x^3 - 23x^2 + 142x - 120$.", a: "(x-1)(x-10)(x-12)", opts: ["(x-1)(x-10)(x-12)", "(x+1)(x+10)(x+12)", "(x-1)(x-2)(x-3)", "None"] },
            { q: "The polynomials $ax^3 + 3x^2 - 13$ and $2x^3 - 5x + a$ leave same remainder when divided by $x-2$. Find $a$.", a: "5/7", opts: ["1", "2", "5/7", "0"] },
            { q: "If both $x-2$ and $x-1/2$ are factors of $px^2 + 5x + r$, show that $p = r$.", a: "True", opts: ["True", "False", "Only if p=1", "None"] },
            { q: "Find remainder when $x^{135} + x^{125} + x^{115} + ... + x^5 + 1$ is divided by $x^3 - x$.", a: "Complex", opts: ["0", "x+1", "x", "None"] },
            { q: "If $x^2 - 1$ is a factor of $ax^4 + bx^3 + cx^2 + dx + e$, then $a+c+e = b+d = 0$.", a: "True", opts: ["True", "False", "Depends on degree", "None"] },
            { q: "Factorise $2x^3 - 3x^2 - 17x + 30$.", a: "(x-2)(x+3)(2x-5)", opts: ["(x-2)(x+3)(2x-5)", "(x+2)(x-3)(2x+5)", "None", "0"] },
            { q: "If $x-a$ is a factor of $x^n - a^n$ for all $n$?", a: "Yes", opts: ["Yes", "No", "Only if n is even", "Only if n is odd"] },
            { q: "If $x+a$ is a factor of $x^n + a^n$, then $n$ must be ____.", a: "Odd", opts: ["Even", "Odd", "Prime", "Any"] },
            { q: "Find $a, b$ if $x^4 + ax^3 + bx^2 - 8x - 8$ is divisible by $x^2 + 2x$.", a: "a=1, b=-2", opts: ["a=1, b=-2", "a=2, b=4", "a=0, b=0", "None"] },
            { q: "If $p(x) = Q(x)(x-a) + R$, and $R=0$, then $x-a$ is a ____.", a: "Factor", opts: ["Multiple", "Factor", "Zero", "None"] }
        ]
    },
    "Algebraic Identities - Part 1": {
        "Easy": [
            { q: "Expand $(x + y)^2$.", a: "$x^2 + 2xy + y^2$", opts: ["$x^2 + y^2$", "$x^2 + 2xy + y^2$", "$x^2 - 2xy + y^2$", "None"] },
            { q: "Expand $(x - y)^2$.", a: "$x^2 - 2xy + y^2$", opts: ["$x^2 + y^2$", "$x^2 + 2xy + y^2$", "$x^2 - 2xy + y^2$", "None"] },
            { q: "Identity: $x^2 - y^2 = (x+y)(____)$. ", a: "x-y", opts: ["x+y", "x-y", "xy", "0"] },
            { q: "Evaluate $105 \\times 106$ using $(x+a)(x+b)$.", a: "11130", opts: ["11000", "11130", "11100", "10000"] },
            { q: "Evaluate $99^2$ using $(a-b)^2$.", a: "9801", opts: ["9900", "9801", "9899", "10000"] },
            { q: "Factorise $4x^2 - 9y^2$.", a: "(2x-3y)(2x+3y)", opts: ["(2x-3y)^2", "(2x+3y)^2", "(2x-3y)(2x+3y)", "None"] },
            { q: "Expand $(x+2)(x+10)$.", a: "$x^2 + 12x + 20$", opts: ["$x^2 + 20$", "$x^2 + 12x + 20$", "$x^2 + 8x + 20$", "None"] },
            { q: "Evaluate $103^2$.", a: "10609", opts: ["10609", "10909", "10600", "None"] },
            { q: "Is $(a+b)^2$ the same as $a^2+b^2$?", a: "No", opts: ["Yes", "No", "Only if ab=0", "Both B & C"] },
            { q: "Simplify $(x-y)(x+y)$.", a: "$x^2 - y^2$", opts: ["$x^2 + y^2$", "$x^2 - y^2$", "$2x - 2y$", "0"] }
        ],
        "Moderate": [
            { q: "Expand $(x + 2y + 4z)^2$.", a: "$x^2 + 4y^2 + 16z^2 + 4xy + 16yz + 8zx$", opts: ["$x^2 + 4y^2 + 16z^2$", "$x^2 + 4y^2 + 16z^2 + 4xy + 16yz + 8zx$", "None", "0"] },
            { q: "Factorise $4x^2 + 9y^2 + 16z^2 + 12xy - 24yz - 16xz$.", a: "$(2x+3y-4z)^2$", opts: ["$(2x+3y+4z)^2$", "$(2x+3y-4z)^2$", "$(2x-3y-4z)^2$", "None"] },
            { q: "Evaluate $102^3$ using identity.", a: "1061208", opts: ["1061208", "1060000", "1061200", "None"] },
            { q: "Evaluate $998^3$.", a: "994011992", opts: ["994011992", "994000000", "None", "0"] },
            { q: "Expand $(3a + 4b)^3$.", a: "$27a^3 + 108a^2b + 144ab^2 + 64b^3$", opts: ["$27a^3 + 64b^3$", "$27a^3 + 108a^2b + 144ab^2 + 64b^3$", "None", "0"] },
            { q: "Factorise $8x^3 + 27y^3 + 36x^2y + 54xy^2$.", a: "$(2x+3y)^3$", opts: ["$(2x+3y)^3$", "$(2x-3y)^3$", "$(8x+27y)^3$", "None"] },
            { q: "Expand $(x - 2/3 y)^3$.", a: "$x^3 - 8/27 y^3 - 2x^2y + 4/3 xy^2$", opts: ["$x^3 - 8/27 y^3$", "$x^3 - 8/27 y^3 - 2x^2y + 4/3 xy^2$", "None", "0"] },
            { q: "If $x + y = 12$ and $xy = 27$, find $x^2 + y^2$.", a: "90", opts: ["144", "90", "117", "81"] },
            { q: "Evaluate $104 \\times 96$ using identity.", a: "9984", opts: ["10000", "9984", "9916", "None"] },
            { q: "Factorise $25/4 x^2 - y^2/9$.", a: "$(5/2 x - y/3)(5/2 x + y/3)$", opts: ["$(5/2 x - y/3)^2$", "None", "$(5/2 x - y/3)(5/2 x + y/3)$", "0"] }
        ],
        "Tough": [
            { q: "If $x + 1/x = 4$, find $x^2 + 1/x^2$.", a: "14", opts: ["16", "14", "18", "12"] },
            { q: "If $x + 1/x = 4$, find $x^4 + 1/x^4$.", a: "194", opts: ["196", "194", "198", "200"] },
            { q: "Factorise $x^6 - y^6$.", a: "$(x-y)(x+y)(x^2+xy+y^2)(x^2-xy+y^2)$", opts: ["$(x^3-y^3)(x^3+y^3)$", "Both A & B", "None", "0"] },
            { q: "Evaluate $(0.99)^2$ without direct multiplication.", a: "0.9801", opts: ["0.98", "0.9801", "0.9901", "0.9701"] },
            { q: "If $a^2 + b^2 + c^2 = 20$ and $a+b+c=0$, find $ab+bc+ca$.", a: "-10", opts: ["10", "-10", "20", "-20"] },
            { q: "Simplify $(x+y+z)^2 + (x-y-z)^2$.", a: "$2(x^2+y^2+z^2+2yz)$", opts: ["$2(x^2+y^2+z^2)$", "$2(x^2+y^2+z^2+2yz)$", "0", "None"] },
            { q: "If $x^2 + 1/x^2 = 7$, find $x^3 + 1/x^3$.", a: "18", opts: ["18", "27", "21", "None"] },
            { q: "Evaluate $10.5^2$.", a: "110.25", opts: ["110.25", "100.25", "110.5", "121.25"] },
            { q: "Factorise $x^4 - (y+z)^4$.", a: "$(x-y-z)(x+y+z)(x^2+(y+z)^2)$", opts: ["$(x^2-(y+z)^2)(x^2+(y+z)^2)$", "Both A & B", "None", "0"] },
            { q: "Find value of $(x-a)^3 + (x-b)^3 + (x-c)^3 - 3(x-a)(x-b)(x-c)$ if $3x=a+b+c$.", a: "0", opts: ["1", "0", "abc", "None"] }
        ]
    },
    "Algebraic Identities - Part 2 (Cubic)": {
        "Easy": [
            { q: "Identity: $x^3 + y^3 + z^3 - 3xyz = (x+y+z)(____)$.", a: "$x^2+y^2+z^2-xy-yz-zx$", opts: ["$x^2+y^2+z^2$", "$x^2+y^2+z^2-xy-yz-zx$", "0", "None"] },
            { q: "If $x + y + z = 0$, then $x^3 + y^3 + z^3 = ____$.", a: "3xyz", opts: ["0", "xyz", "3xyz", "None"] },
            { q: "Find $(-12)^3 + 7^3 + 5^3$ without calculating cubes.", a: "-1260", opts: ["0", "1260", "-1260", "100"] },
            { q: "Factorise $x^3 + 8y^3$.", a: "$(x+2y)(x^2-2xy+4y^2)$", opts: ["$(x+2y)^3$", "$(x+2y)(x^2-2xy+4y^2)$", "$(x+2y)(x^2+2xy+4y^2)$", "None"] },
            { q: "Factorise $27x^3 - y^3$.", a: "$(3x-y)(9x^2+3xy+y^2)$", opts: ["$(3x-y)^3$", "$(3x-y)(9x^2+3xy+y^2)$", "None", "0"] },
            { q: "What is the value of $x^3+y^3$ if $x+y=0$?", a: "0", opts: ["0", "3xy", "None", "1"] },
            { q: "Value of $28^3 + (-15)^3 + (-13)^3$.", a: "16380", opts: ["0", "16380", "-16380", "None"] },
            { q: "Simplify $(x+y)(x^2-xy+y^2)$.", a: "$x^3 + y^3$", opts: ["$x^3 - y^3$", "$x^3 + y^3$", "$(x+y)^3$", "None"] },
            { q: "Simplify $(x-y)(x^2+xy+y^2)$.", a: "$x^3 - y^3$", opts: ["$x^3 - y^3$", "$x^3 + y^3$", "$(x-y)^3$", "None"] },
            { q: "Number of factors for $x^3-1$.", a: "2", opts: ["1", "2", "3", "0"] }
        ],
        "Moderate": [
            { q: "Factorise $8x^3 + y^3 + 27z^3 - 18xyz$.", a: "$(2x+y+3z)(4x^2+y^2+9z^2-2xy-3yz-6xz)$", opts: ["Complex Product", "None", "0", "$(2x+y+3z)^3$"] },
            { q: "If $x+y+z=9$ and $xy+yz+zx=26$, find $x^2+y^2+z^2$.", a: "29", opts: ["81", "29", "55", "None"] },
            { q: "Evaluate $(1/2)^3 + (1/3)^3 - (5/6)^3$.", a: "-5/12", opts: ["0", "-5/12", "5/12", "1"] },
            { q: "Factorise $a^3 - 0.064$.", a: "$(a-0.4)(a^2+0.4a+0.16)$", opts: ["$(a-0.4)^3$", "$(a-0.4)(a^2+0.4a+0.16)$", "None", "0"] },
            { q: "Simplify $(a+b+c)^2 - a^2 - b^2 - c^2$.", a: "2(ab+bc+ca)", opts: ["0", "2(ab+bc+ca)", "abc", "None"] },
            { q: "If $x^2-1$ is a factor of $ax^3+bx^2+cx+d$, find relation.", a: "a+c=0 and b+d=0", opts: ["a=c", "a+c=0 and b+d=0", "a+b+c+d=0", "None"] },
            { q: "Find the product $(2x-y+3z)(4x^2+y^2+9z^2+2xy+3yz-6xz)$.", a: "$8x^3-y^3+27z^3+18xyz$", opts: ["$8x^3+y^3+27z^3$", "$8x^3-y^3+27z^3+18xyz$", "None", "0"] },
            { q: "Value of $a^3+b^3+c^3$ if $a+b+c=15$ and $abc=100$.", a: "Cannot be determined without $ab+bc+ca$", opts: ["300", "Cannot be determined", "0", "None"] },
            { q: "Find value of $x^3-y^3$ if $x-y=5$ and $xy=6$.", a: "215", opts: ["125", "215", "155", "None"] },
            { q: "Is $x^3+y^3+z^3-3xyz$ always non-negative for $x,y,z > 0$?", a: "Yes", opts: ["Yes", "No", "Only if x=y=z", "None"] }
        ],
        "Tough": [
            { q: "If $a+b+c=5$ and $ab+bc+ca=10$, find $a^3+b^3+c^3-3abc$.", a: "-25", opts: ["25", "-25", "0", "50"] },
            { q: "Factorise $(x-y)^3 + (y-z)^3 + (z-x)^3$.", a: "3(x-y)(y-z)(z-x)", opts: ["0", "3(x-y)(y-z)(z-x)", "$(x-y+y-z+z-x)^3$", "None"] },
            { q: "If $a^2+b^2+c^2-ab-bc-ca=0$, then ____.", a: "a = b = c", opts: ["a+b+c=0", "a = b = c", "abc=1", "None"] },
            { q: "Simplify $\\frac{(a^2-b^2)^3 + (b^2-c^2)^3 + (c^2-a^2)^3}{(a-b)^3 + (b-c)^3 + (c-d)^3}$.", a: "(a+b)(b+c)(c+a)", opts: ["1", "(a+b)(b+c)(c+a)", "0", "None"] },
            { q: "If $x+y+z=1$, $xy+yz+zx=-1$, $xyz=-1$, find $x^3+y^3+z^3$.", a: "1", opts: ["1", "-1", "0", "3"] },
            { q: "Factorise $2\\sqrt{2}a^3 + 8b^3 - 27c^3 + 18\\sqrt{2}abc$.", a: "($\\sqrt{2}a+2b-3c$)(...)", opts: ["Product form", "None", "0", "1"] },
            { q: "If $x^{1/3} + y^{1/3} + z^{1/3} = 0$, then $(x+y+z)^3 = ____$.", a: "27xyz", opts: ["xyz", "27xyz", "9xyz", "None"] },
            { q: "Find value of $x^3+y^3+15xy-125$ if $x+y=5$.", a: "0", opts: ["0", "125", "250", "None"] },
            { q: "Simplify $\\frac{x^2-y^2}{x-y}$.", a: "x + y", opts: ["x + y", "x - y", "1", "0"] },
            { q: "If $a+b+c=0$, find $\\frac{a^2}{bc} + \\frac{b^2}{ca} + \\frac{c^2}{ab}$.", a: "3", opts: ["0", "1", "3", "abc"] }
        ]
    },
    "Applied Problems & Area/Volume": {
        "Easy": [
            { q: "Area of a rectangle is $x^2 + 5x + 6$. Possible length and breadth?", a: "(x+2), (x+3)", opts: ["(x+1), (x+6)", "(x+2), (x+3)", "x, (x+5)", "None"] },
            { q: "If the side of a square is $(x+1)$, its area is ____.", a: "$x^2 + 2x + 1$", opts: ["$x^2 + 1$", "$x^2 + 2x + 1$", "$2x + 2$", "None"] },
            { q: "Volume of a cuboid is $3x^2 - 12x$. Possible dimensions?", a: "3, x, (x-4)", opts: ["3, x, x", "3, x, (x-4)", "3, 4, x", "None"] },
            { q: "Perimeter of a triangle is $x^2+x$. Two sides are $x^2$ and $x$. Third side?", a: "0", opts: ["1", "0", "x", "None"] },
            { q: "If cost of $x$ apples is $x^2 - x$, cost of 1 apple is?", a: "x - 1", opts: ["x", "x-1", "1", "None"] },
            { q: "Area of a circle is $\\pi(x^2 + 6x + 9)$. Radius is ____.", a: "x + 3", opts: ["x + 3", "x - 3", "x + 9", "None"] },
            { q: "Volume of a cube is $x^3 + 3x^2 + 3x + 1$. Side is ____.", a: "x + 1", opts: ["x", "x + 1", "$x^2 + 1$", "None"] },
            { q: "If speed is $x+2$ and time is $x-2$, distance is ____.", a: "$x^2 - 4$", opts: ["$x^2 + 4$", "$x^2 - 4$", "2x", "0"] },
            { q: "Find area of a square with perimeter $4x + 8$.", a: "$x^2 + 4x + 4$", opts: ["$x^2 + 4$", "$x^2 + 4x + 4$", "None", "0"] },
            { q: "A rectangular park has area $25x^2 - 35x + 12$. Possible breadth?", a: "5x - 3 or 5x - 4", opts: ["5x-3", "5x+3", "x-12", "None"] }
        ],
        "Moderate": [
            { q: "What are the possible expressions for the dimensions of a cuboid with volume $35y^2 + 13y - 12$?", a: "5, (7y-3), (y+4) [If 5 is a factor]", opts: ["(5y+4), (7y-3)", "None", "0", "1"] },
            { q: "Area of a square is $x^2 + x + 1/4$. Find its side.", a: "x + 1/2", opts: ["x + 1/4", "x + 1/2", "$x^2 + 1/2$", "None"] },
            { q: "Volume of a cylinder is $\\pi r^2 h$. If $V = \\pi(x^3 + 2x^2 + x)$ and $r = x+1$, find $h$.", a: "x", opts: ["x", "x+1", "1", "None"] },
            { q: "If the product of two numbers is $x^4 - 1$ and one is $x^2+1$, other is ____.", a: "$x^2 - 1$", opts: ["$x^2 + 1$", "$x^2 - 1$", "x - 1", "None"] },
            { q: "A square sheet of side $a$ has a square hole of side $b$. Remaining area?", a: "$a^2 - b^2$", opts: ["$(a-b)^2$", "$a^2 - b^2$", "2a - 2b", "None"] },
            { q: "If the area of a triangle is $1/2(x^2 - 5x + 6)$ and base is $(x-3)$, find altitude.", a: "x - 2", opts: ["x - 2", "x - 3", "x + 2", "None"] },
            { q: "Find the volume of a cube whose surface area is $6(x+y)^2$.", a: "$(x+y)^3$", opts: ["$(x+y)^2$", "$(x+y)^3$", "$6(x+y)^3$", "None"] },
            { q: "Possible dimensions of a cuboid with volume $12ky^2 + 8ky - 20k$?", a: "4k, (3y+5), (y-1)", opts: ["4k, (3y+5), (y-1)", "None", "0", "1"] },
            { q: "If distance is $x^3+1$ and speed is $x^2-x+1$, time is?", a: "x + 1", opts: ["x - 1", "x + 1", "1", "None"] },
            { q: "Area of rectangle is $x^2 - y^2$. If width is $x-y$, perimeter is ____.", a: "4x", opts: ["2x+2y", "4x", "4y", "None"] }
        ],
        "Tough": [
            { q: "Factorise the expression for volume: $x^3 - 7x + 6$.", a: "(x-1)(x-2)(x+3)", opts: ["(x-1)(x-2)(x+3)", "None", "0", "1"] },
            { q: "Find the area of a path $1$ unit wide around a square park of side $x$.", a: "4x + 4", opts: ["4x", "4x+4", "$x^2+4x$", "None"] },
            { q: "If the area of a square is doubled, the side increases by a factor of ____.", a: "√2", opts: ["2", "√2", "4", "None"] },
            { q: "Find total surface area of a cuboid with dimensions $(x+1), (x+2), (x+3)$.", a: "$6x^2 + 24x + 22$", opts: ["$x^2+6x+6$", "$6x^2 + 24x + 22$", "None", "0"] },
            { q: "Possible values of $x$ for which the area $(x-2)(x-3)$ is positive?", a: "x < 2 or x > 3", opts: ["x > 3", "x < 2", "x < 2 or x > 3", "None"] },
            { q: "If the volume of a sphere is $4/3 \\pi (x+1)^3$, find its surface area.", a: "$4 \\pi (x+1)^2$", opts: ["$4 \\pi (x+1)^2$", "$4 \\pi x^2$", "None", "0"] },
            { q: "Diagonal of a rectangle with sides $2xy$ and $x^2-y^2$ is ____.", a: "$x^2 + y^2$", opts: ["$x+y$", "$x^2+y^2$", "$x^2-y^2$", "None"] },
            { q: "If a polynomial $p(x)$ represents profit, and $p(x) = (x-10)(20-x)$, what $x$ gives zero profit?", a: "10 and 20", opts: ["10", "20", "10 and 20", "0"] },
            { q: "Find dimensions of rectangle with area $L^2 + 3L + 2$.", a: "(L+1) and (L+2)", opts: ["(L+1), (L+2)", "L, (L+3)", "None", "0"] },
            { q: "A cube of side $x$ is cut into $x^3$ unit cubes. Total surface area of all unit cubes is?", a: "$6x^3$", opts: ["$6x^2$", "$6x^3$", "$x^3$", "None"] }
        ]
    }
};
