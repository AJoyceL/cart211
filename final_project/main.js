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
    <header>
        <h1>Can you escape?</h1>
        <h3>Do you wish to return to normalcy? To the beauty of oblivion? Wouldn't it feel better?</h3>
        <div>
            <button class="next-btn" onclick="switchContent()">Now You Know</button>
        </div>
    </header>
`;

const newContent = `
    <header class= "black-screen">
        <button id="loaderBtn" class="loader-button" onclick="switchContent()">
            <span class="loader"></span>
        </button>
    </header>
`;

function switchContent() {
    clickCount++;
    const body = document.getElementById("mainBody");

    if(clickCount <= 9) {
        body.innerHTML = newContent;
        body.className = "dark-body";
    }
    else if (clickCount === 10) {
        window.location.href = "closing.html";
    }
}