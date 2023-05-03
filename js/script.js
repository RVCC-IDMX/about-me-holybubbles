const hamburger = document.querySelector('.hamburger-icon');
const dropDownMenu = document.querySelector('.navbar-links');
const dropDownLinks = document.querySelectorAll('.navbar-links ul li a');

hamburger.addEventListener('click', e => {
    dropDownMenu.classList.toggle('opened');
    hamburger.classList.toggle('closed');

    for (const link of dropDownLinks) {
        link.addEventListener('click', e=> {
            
    dropDownMenu.classList.toggle('opened');
    hamburger.classList.toggle('closed');
        });
    }
});