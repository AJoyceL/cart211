        // document.addEventListener('DOMContentLoaded', () => {
        //     const hamburgerButton = document.querySelector ('.hamburger-menu button');
        //     const closeButton = document.querySelector('.close-menu');
        //     const menuI = document.querySelector('.menu');

        //     //Handles opening the menu
        //     hamburgerButton.addEventListener('click', () => {
        //         menuI.classList.add('menu-deployed');
        //     });

        //     // Handles closing the menu
        //     closeButton.addEventListener('click', () =>{
        //         menuI.classList.remove('menu-deployed');
        //     });
        // });

const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const menu = document.getElementById('menu');

  openMenu.addEventListener('click', () => {
    menu.classList.add('menu-deployed');
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu-deployed');
  });