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
 * BUTTON VANISH
 */ 

// const questions = document.querySelectorAll(".question-container");
// questions.forEach(question => {
//     const buttons = question.querySelectorAll(".answer-btn");
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             button.classList.add("vanish");
//             buttons.forEach(otherBtn => {
//                 if(otherBtn !== button) {
//                     otherBtn.classList.add("vanish");
//                 };
//             });
//         });
//     });
// });


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