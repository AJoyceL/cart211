/**
 * HAMBURGER MENU
 * */ 
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('menu');

openMenu.addEventListener('click', () => {
    menu.classList.add('menu-deployed');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu-deployed');
});



/**
 * GAME PAGES
*/

const questions = [
    {
        q: "Do you usually pick the safe option or the risky one?",
        a: "Safe",
        b: "Risky"
    },
    {
        q: "Are you more productive in the morning or at night?",
        a: "Morning",
        b: "Night"
    },
    {
        q: "Would you rather read a book or watch a video?",
        a: "Book",
        b: "Video"
    },
    {
        q: "Do you prefer planning or improvising?",
        a: "Planning",
        b: "Improvising"
    },
    {
        q: "Are you an introvert or an extrovert?",
        a: "Introvert",
        b: "Extrovert"
    },
    {
        q: "Do you spend more time scrolling or creating?",
        a: "Scrolling",
        b: "Creating"
    },
    {
        q: "Do you trust your intuition or data?",
        a: "Intuition",
        b: "Data"
    },
    {
        q: "Are you more influenced by friends or algorithms?",
        a: "Friends",
        b: "Algorithms"
    },
    {
        q: "Do you value privacy or convenience more?",
        a: "Privacy",
        b: "Convenience"
    },
    {
        q: "If an app feels ‘personalized,’ do you like it or get suspicious?",
        a: "Like it",
        b: "Suspicious"
    },
]

let index = 0;
let answer = [];

if(!localStorage.getItem('userAnswers')) {
    localStorage.setItem('userAnswers', JSON.stringify([]));
}

const qText = document.getElementById("question-text");
const btnA = document.getElementById("answerA");
const btnB = document.getElementById("answerB");

function loadQuestion() {
    const item = questions[index];

    qText.classList.remove("fade-in");
    qText.classList.add("fade-out");

    setTimeout(() => {
        qText.textContent = item.q;
        btnA.textContent = item.a;
        btnB.textContent = item.b;

        qText.classList.remove("fade-out");
        qText.classList.add("fade-in");

    }, 200);
}

// record answers
function selectAnswer(choice) {
    answer.push(choice);
    if(answer.length === questions.length) {
        localStorage.setItem("userAnswers", JSON.stringify(answer));
        window.location.href = "guessing.html";
        return;
    }
    index++;
    loadQuestion();
}

if(btnA){
    btnA.addEventListener("click", () => selectAnswer(btnA.textContent));
    btnB.addEventListener("click", () => selectAnswer(btnB.textContent));
    loadQuestion();  
}


/**
 * GUESSING PAGE
*/
const guessesContainer = document.querySelector("#guesses");

if (guessesContainer) {

    const answers = JSON.parse(localStorage.getItem("userAnswers"));

    if (answers.length < 10) {
        guessesContainer.innerHTML = `<p>Go back and answer the questions first.</p>`;
    } 
    else {
        const predictions = [];

        if (answers.includes("Risky")) predictions.push("You lean toward thrill-seeking behaviours.");
        if (answers.includes("Safe")) predictions.push("You are predictable and security-oriented.");

        if (answers.includes("Night")) predictions.push("You are most active when the world is quiet.");
        if (answers.includes("Morning")) predictions.push("You like structure and early productivity.");

        if (answers.includes("Video")) predictions.push("Your mind responds strongly to visual content.");
        if (answers.includes("Book")) predictions.push("You think in deep, structured narratives.");

        if (answers.includes("Improvising")) predictions.push("You embrace spontaneity and uncertainty.");
        if (answers.includes("Planning")) predictions.push("You prefer control and planning over chaos.");

        if (answers.includes("Introvert")) predictions.push("You recharge through solitude.");
        if (answers.includes("Extrovert")) predictions.push("You thrive on social energy.");

        if (answers.includes("Scrolling")) predictions.push("You are influenced by passive consumption.");
        if (answers.includes("Creating")) predictions.push("You enjoy bringing ideas to life.");

        if (answers.includes("Data")) predictions.push("You trust numbers more than instincts.");
        if (answers.includes("Intuition")) predictions.push("Your decisions follow emotion and instinct.");

        if (answers.includes("Algorithms")) predictions.push("Your behaviour aligns well with predictive systems.");
        if (answers.includes("Friends")) predictions.push("Social influence shapes your decisions.");

        if (answers.includes("Privacy")) predictions.push("You resist digital tracking.");
        if (answers.includes("Convenience")) predictions.push("You trade privacy for comfort.");

        if (answers.includes("Like it")) predictions.push("Personalisation makes things easier for you.");
        if (answers.includes("Suspicious")) predictions.push("You are aware of digital manipulation.");

        guessesContainer.innerHTML = `
            <h2>Hi! It's so nice to get to know you better ;)</h2>
            <div class="guess-list guess-grid">
                ${predictions.map(item => `<div class="guess-bubble">${item}</div>`).join("")}
            </div>
            
            <div>
                <button class="next-btn">
                    <a href="pattern.html">See your patterns →</a>
                </button>
            </div>
            `;
    }

    //animation
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const bubbles = document.querySelectorAll(".guess-bubble");

            bubbles.forEach((bubble, i) => {
                const delay = i * 150;
                bubble.style.animationDelay = `${delay}ms`;
                bubble.style.animationPlayState = "running";
            });

            observer.disconnect(); 
        }
    });
}, {
    threshold: 0.4  
});

observer.observe(guessesContainer);

}



/**
 * PATTERN PAGE
*/
(function patternPage() {
    const patternContainer = document.getElementById("patternOutput");
    if (!patternContainer) return;

    const answers = JSON.parse(localStorage.getItem("userAnswers")) || [];

    // if (answers.length < 9) {
    //     patternContainer.innerHTML = `<p>You need to answer all questions first.</p>`;
    //     return;
    // }

    const predictionMap = [
        { 
            safe: "You prefer the safe option.", 
            risky: "You prefer the risky option." },
        { 
            morning: "You're an early bird.", 
            night: "You're a night owl." 
        },
        { 
            book: "You prefer to spend your time reading books.", 
            video: "You prefer to spend your time watching videos." 
        },
        { 
            planning: "You've often planned out your schedule.", 
            improvising: "You're often improvising on the spot." 
        },
        { 
            introvert: "You're more comfortable at home.", 
            extrovert: "You're more comfortable in public." 
        },
        { 
            scrolling: "You spend a lot of time scrolling.", 
            creating: "You spend a lot of time creating." 
        },
        { 
            intuition: "You rely more on your emotion and intuition.", 
            data: "You rely more on measurable facts or data." 
        },
        { 
            friends: "Your friends have more sway in your life.", 
            algorithms: "You're comfortable with algorithms." 
        },
        { 
            privacy: "You favour your privacy.", 
            convenience: "You favour convenience." 
        },
        { 
            like: "You like the personalisation aspect.", 
            suspicious: "You're suspicious of personalisation aspect." 
        }
    ];

    const patterns = answers.map((ans, idx) => {
        const category = predictionMap[idx];
        return category[ans.toLowerCase()] || "No clear pattern found.";
    });
        
    patternContainer.innerHTML = `
        <h2>Here's your data ;)</h2>
        <div class="pattern-grid">
            ${patterns.map(text => `<div class="pattern-bubble">${text}</div>`).join("")}
        </div>
        <div>
            <button class="next-btn">
                <a href="shadow.html">Your Digital Shadow →</a>
            </button>
        </div>
    `;

    const observer = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;

        const bubbles = patternContainer.querySelectorAll(".pattern-bubble");
        bubbles.forEach((bubble, i) => {
            bubble.style.animationDelay = `${i * 120}ms`;
            bubble.style.animationPlayState = "running";
        });

        observer.disconnect();
    }, { threshold: 0.25 });

    observer.observe(patternContainer);
})();



/**
 * LOOP PAGE
*/

let clickCount = 0;

const defaultContent = `
<body id="mainBody">
    <nav class="sticky">
        <div>logo?</div>

        
        <div class="hamburger-menu">
            <button id="open-menu">
                <span class="fa fa-bars"></span>
            </button>
        </div>

        <div class="menu" id="menu">
            <button class="close-menu" id="close-menu">&times;</button>

            <a href="hello friend.html" >Hello, friend!</a>
            <a href="questions.html">Questions for my friend</a>
            <a href="guessing.html">Guessing game</a>
            <a href="pattern.html">Pattern in your clicks</a>
            <a href="shadow.html">Your digital shadow</a>
            <a href="illusion.html">The illusion of choice</a>
            <a href="data.html">Everything you do is data</a>
            <a href="darkroom.html">In the darkroom</a>
            <a href="escape.html">Can you escape?</a>
            <a href="closing.html">Now you know</a>
        </div>
    </nav>
    <header>
        <h1>Can you escape?</h1>
        <h3>
            Do you wish to return to normalcy? To the beauty of oblivion? Woudln't it feel better?
        </h3>

        <div>
            <button class="next-btn" id="switchBtn" onclick="switchContent()">Now You Know</button>

        </div>
    </header>

    <footer>
        <a href="" class="fa fa-regular fa-envelope"></a>
        <p>
            ©Joyce Angelina Lam, cart 211, fall 2025, final project, credits: Sh. Zuboff The Age of Surveillance Capitalism. 2019
        </p>
    </footer>

    <script src="main.js"></script>
    <script></script>
</body>
`;

const newContent = `
    <body id="mainBody">
        <header class= "black-screen">
            <button id="loaderBtn" class="loader-button" onclick="switchContent()">
                <span class="loader"></span>
            </button>
        </header>
    </body>
`;

function switchContent() {
    clickCount++;
    const body = document.getElementById("mainBody");

    if(clickCount <= 5) {
        body.innerHTML = newContent;
        body.className = "dark-body";
    }
    else if (clickCount === 6) {
        window.location.href = "closing.html";
    }
}