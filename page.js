const header = document.querySelector("header");

window.addEventListener("scroll", function (){
    header.classList.toggle("sticky",this.window.scrollY > 80);
});

const navList = document.querySelector('.nav-list');

const btn = document.querySelector('.bag-img');


btn.onclick = () => {
    navList.classList.toggle('open');
    btn.textContent('X')
}

window.onscroll = () => {
    navList.classList.remove('open');
}