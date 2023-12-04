document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-icon');
    let link = document.querySelector('.link');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        link.classList.toggle('open');
    };
});