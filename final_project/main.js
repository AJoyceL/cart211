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
     // ==== RISKY / SAFE ====
    {
        q: "Do you usually pick the safe option or the risky one?",
        a: "Safe",
        b: "Risky"
    },

    // ==== NIGHT / MORNING ====
    {
        q: "Are you more productive in the morning or at night?",
        a: "Morning",
        b: "Night"
    },

    // ==== BOOK / VIDEO ====
    {
        q: "Would you rather read a book or watch a video?",
        a: "Book",
        b: "Video"
    },

    // ==== PLANNING / IMPROVISING ====
    {
        q: "Do you prefer planning or improvising?",
        a: "Planning",
        b: "Improvising"
    },

    // ==== INTROVERT / EXTROVERT ====
    {
        q: "Are you an introvert or an extrovert?",
        a: "Introvert",
        b: "Extrovert"
    },

    // ==== SCROLLING / CREATING ====
    {
        q: "Do you spend more time scrolling or creating?",
        a: "Scrolling",
        b: "Creating"
    },

    // ==== INTUITION / DATA ====
    {
        q: "Do you trust your intuition or data?",
        a: "Intuition",
        b: "Data"
    },

    // ==== FRIENDS / ALGORITHMS ====
    {
        q: "Are you more influenced by friends or algorithms?",
        a: "Friends",
        b: "Algorithms"
    },

    // ==== PRIVACY / CONVENIENCE ====
    {
        q: "Do you value privacy or convenience more?",
        a: "Privacy",
        b: "Convenience"
    },

    // ==== LIKE IT / SUSPICIOUS ====
    {
        q: "If an app feels ‘personalised,’ do you like it or get suspicious?",
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
        function pickOne(list) {
            return list[Math.floor(Math.random() * list.length)];
        }    

        // ==== RISKY / SAFE ====
        if (answers.includes("Risky")) {
            predictions.push(pickOne([
                "You definitely click “I agree” on terms and conditions without even pretending to scroll.",
                "Consequences are a future-you problem.",
                "Your motto: ‘How bad could it be?",
                "You make choices like you’re speed-running life."
            ]));
        }
        if (answers.includes("Safe")) {
            predictions.push(pickOne([
                "Safe? You probably read restaurant menus before arriving.",
                "You pack an umbrella even when it says 0% chance of rain.",
                "You think twice… then think again… just to be safe.",
                "You Google things like ‘is this safe’ way too often."
            ]));
        }

        // ==== NIGHT / MORNING ====
        if (answers.includes("Night")) {
            predictions.push(pickOne([
                "You're basically a vampire, but instead of blood you survive on snacks and procrastination.",
                "Your sleep schedule isn’t broken — it’s jazz.",
                "You become a genius at 1AM for absolutely no reason.",
                "Your brain starts working at the exact moment it should be sleeping."
            ]));
        }
        if (answers.includes("Morning")) {
            predictions.push(pickOne([
                "You get everything done early so you can spend the rest of the day questioning your life choices.",
                "You’re basically a solar-powered human.",
                "Your motivation rises with the sun and dies with the slightest snack break.",
                "You peak at 9 AM and it’s downhill from there."
            ]));
        }

        // ==== VIDEO / BOOK ====
        if (answers.includes("Video")) {
            predictions.push(pickOne([
                "You start one short video and suddenly it’s 3AM and you’re an expert on jellyfish mating rituals.",
                "Your attention span is 0.2 seconds, but hey — at least the algorithm loves you.",
                "You watch tutorials you’ll never use in real life.",
                "You learn more from 15-second clips than school ever taught you."
            ]));
        }
        if (answers.includes("Book")) {
            predictions.push(pickOne([
                "You carry a book ‘just in case,’ even though you have zero spare time.",
                "You read to relax, then get emotionally destroyed by chapter 12.",
                "You go to the bookstore ‘just to look’… and we both know how that ends.",
                "“Your natural habitat is ‘just one more chapter.’"
            ]));
        }

        // ==== IMPROVISING / PLANNING ====
        if (answers.includes("Improvising")) {
            predictions.push(pickOne([
                "Every day is a ‘we’ll figure it out’ kind of day.",
                "You decide dinner at the exact moment your stomach growls.",
                "You treat instructions like vague suggestions.",
                "Somehow, it always works out… eventually."
            ]));
        }
        if (answers.includes("Planning")) {
            predictions.push(pickOne([
                "You make lists for your lists. Chaos fears you.",
                "You plan your snacks before the movie starts.", 
                "You arrive early to things that don’t have a time.",
                "You schedule your spontaneous moments."
            ]));
        }

        // ==== INTROVERT / EXTROVERT ====
        if (answers.includes("Introvert")) {
            predictions.push(pickOne([
                "Your ideal party includes you, a blanket, and zero expectations.",
                "Your social battery dies faster than your phone at 3%.",
                "You get tired just thinking about plans.",
                "Your favorite part of the party: leaving."
            ]));
        }
        if (answers.includes("Extrovert")) {
            predictions.push(pickOne([
                "You’re the person who says ‘one more story’ at 2AM.",
                "You get energy from people like you’re solar-powered.",
                "You talk like you’re being paid per word.",
                "Your volume has no ‘low’ setting."
            ]));
        }

        // ==== SCROLLING / CREATING ====
        if (answers.includes("Scrolling")) {
            predictions.push(pickOne([
                "You know it’s bad when Instagram says ‘You're all caught up.’",
                "Your thumb has elite athletic training.",
                "You say ‘one more video’ and lie every time.",
                "Your finger could qualify for the Olympics."
            ]));
        }
        if (answers.includes("Creating")) {
            predictions.push(pickOne([
                "You start projects faster than you finish them.",
                "If inspiration calls at 3AM, you answer.",
                "You get ideas at the worst possible times.",
                "You don’t ‘start small,’ you start big."
            ]));
        }

        // ==== DATA / INTUITION ====
        if (answers.includes("Data")) {
            predictions.push(pickOne([
                "Spreadsheets are your emotional support animal.",
                "You check the numbers before choosing a snack.",
                "You never guess — you estimate.",
                "Your brain runs on Excel spreadsheets."
            ]));
        }
        if (answers.includes("Intuition")) {
            predictions.push(pickOne([
                "Your gut has more authority than Google.",
                "Your internal GPS? Vibes only.",
                "You make choices based on a feeling you had four days ago.",
                "You trust the vibe check over the fact check."
            ]));
        }

        // ==== ALGORITHMS / FRIENDS ====
        if (answers.includes("Algorithms")) {
            predictions.push(pickOne([
                "Your personality is 40% ‘You might also like…’",
                "You and your For You Page are spiritually linked.",
                "Your For You Page has read your soul.",
                "Your ads know things you’ve never said out loud."
            ]));
        }
        if (answers.includes("Friends")) {
            predictions.push(pickOne([
                "Your group chat controls your destiny.",
                "If a friend says ‘trust me,’ you do. Immediately.",
                "You change plans after one ‘omg same.'",
                "You’re a ‘tell me what we’re doing’ type."
                
            ]));
        }

        // ==== PRIVACY / CONVENIENCE ====
        if (answers.includes("Privacy")) {
            predictions.push(pickOne([
                "You cover your webcam like it’s staring back.",
                "You read terms & conditions… at least once.",
                "You cover your phone like someone might read it.",
                "You refuse every popup on instinct."
            ]));
        }
        if (answers.includes("Convenience")) {
            predictions.push(pickOne([
                "You’d teleport to the fridge if you could.",
                "Your motto: ‘Is there an easier way?’",
                "If it’s faster, it wins.",
                "You choose the path of least resistance… always."
            ]));
        }

        // ==== LIKE IT / SUSPICIOUS ====
        if (answers.includes("Like it")) {
            predictions.push(pickOne([
                "You love personalization so much you’d let Spotify name your firstborn.",
                "Careful—your fridge might start giving you pep talks someday.",
                "If something says ‘Made just for you,’ you’re emotionally attached.",
                "You don’t walk into stores—you walk into curated experiences."
            ]));
        }
        if (answers.includes("Suspicious")) {
            predictions.push(pickOne([
                "You get ads so accurate you start questioning reality.",
                "You don’t trust anything labeled ‘just for you.’ Rightfully so.",
                "You feel emotionally threatened by personalized ads.",
                "You see personalised recommendations and whisper, ‘Who sent you?’"
            ]));
        }

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
    <header class="white-screen" id="fullScreenBtn">
        <p class="white-p">loading...</p>
    </header>
`;

const newContent2 = `
    <header class="black-screen" id="fullScreenBtn">
        <div class="loader-wrapper">
            <span class="loader"></span>
        </div>
    </header>
`;

const newContent3 = `
    <header class="flash-screen" id="fullScreenBtn">
        <p class="black-p"> Are you sure you're alone?</p>
    </header>
`;



function switchContent() {
    clickCount++;
    const body = document.getElementById("mainBody");

    if(clickCount <= 2) {
        body.innerHTML = newContent;
        body.className = "white-screen";
        document.getElementById("fullScreenBtn")
        .addEventListener("click", switchContent);
        return;
    }
    if (clickCount === 3) {
        body.innerHTML = newContent2;
        body.className = "dark-body";

        document.getElementById("fullScreenBtn")
        .addEventListener("click", switchContent);
        return;
    }
    if(clickCount === 5) {
        body.innerHTML = newContent3;
        body.className = "flash-screen";
        document.getElementById("fullScreenBtn")
        .addEventListener("click", switchContent);
        return;
    }
    else if (clickCount === 6) {
        window.location.href = "closing.html";
    }
}