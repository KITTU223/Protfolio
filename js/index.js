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

//skills

const fill = document.querySelector('.fillpercentage');
const skillbox = document.querySelector('.skill_container');

fillbar = (e) =>{
fill.forEach(eachfill=>{
    let cls = eachfill.getAttribute('class');
    if(e){
        eachfill.setAttribute("class", cls.replace("cmt_",""));
    }else{
        eachfill.setAttribute("class", cls.replace("w-", "cmt_w-"));
    }
})
}
intoview(skillbox,fillbox);
