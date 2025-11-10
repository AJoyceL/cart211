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
