var slides = document.querySelector('.ab_slide');
var slide = document.querySelectorAll('.ab_slide li');
var currentIdx = 0;
var slideCount = slide.length;
var slideWidth = 300;
var slideMargin = 30;
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

makeClone();

function makeClone() {
    for(var i = 0; i<slideCount; i++){
        //a.cloneNode(), a.cloneNode(true)
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.appendChild(b)
        slides.appendChild(cloneSlide);
    }
    for(var i = slideCount - 1; i>=0; i--){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.prepend(b)
        slides.prepend(cloneSlide);
    }

    updateWidth();
    setInitialPos();

    setTimeout(function() {
    slides.classList.add('animated');
    },100);
}

function updateWidth(){
    var currentSlides = document.querySelectorAll('.ab_slide li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setInitialPos(){
    var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
    //slides {transform:translateX{-1000px};}
    slides.style.transform = 'translateX('+ initialTranslateValue+'px)';
}

nextBtn.addEventListener('click',function() {
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click',function() {
    moveSlide(currentIdx - 1);
});

function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) +'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount){

        setTimeout(function(){
            slides.classList.remove('animated')
            slides.style.left = '0px';
            currentIdx = 0;
        },500);
        setTimeout(function(){
            slides.classList.add('animated')
        },600);
    }
}

//clearInterval(timer);

var timer = undefined;

function autoSlide() {
    if(timer == undefined) {
        timer = setInterval(function(){
             moveSlide(currentIdx + 1);
        }, 3000);
    }
}
autoSlide();
function stopSlide() {
    clearInterval(timer);

    timer = undefined;
    console.log(timer);
}
slides.addEventListener('mouseenter', function() {
    stopSlide();
});
slides.addEventListener('mouseleave', function() {
    autoSlide();
});