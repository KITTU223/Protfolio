const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

//for videos
const btns = document.querySelectorAll('.nav-btn');
const slider = document.querySelectorAll('.video-slider');
const contents = document.querySelectorAll('.content');

var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove('active');
    });
    slider.forEach((slide) =>{
        slide.classList.remove('active');
    });
    contents.forEach((content) =>{
        content.classList.remove('active');
    });
    btns[manual].classList.add('active');
    slider[manual].classList.add('active');
    contents[manual].classList.add('active');
}

btns.forEach((btn, i) =>{
    btn.addEventListener('click', () =>{
        sliderNav(i);
    });
});

