// menu mobile
const menuMobile = () => {
    let navBar = document.querySelector('.nav__mobile');
    let btnMenu = document.querySelector('.btnmenu');
    btnMenu.addEventListener('click', () => {
        navBar.classList.toggle('active');
        btnMenu.classList.toggle('active');

    });
    window.addEventListener('resize', () => {
        if(window.innerWidth > 768) {
            btnMenu.classList.remove('active');
            navBar.classList.remove('active');
        }
    })
}
menuMobile();