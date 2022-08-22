const slider = document.querySelector('.slider');
const carousel = document.querySelector('.slider .carousel');
const item = document.querySelectorAll('.slider .carousel .item');
const image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg',];
let current = 0;
for (let i = 0; i < item.length; i++) {
    item[i].style.background = `url(${image[i]}) no-repeat center / cover`;
}
slider.onmousewheel = event => {
    current += event.deltaY / 20;
    carousel.style.transform = `rotateY(${current}deg)`;
};
























