var responsiveSlider = function () {

    var slider = document.getElementById("ADSslider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("ADSslideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("ADSprev1");
    var next = document.getElementById("ADSnext1");

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 5000);

};

window.onload = function () {
    responsiveSlider();
}

var left = document.getElementById("left");
var right = document.getElementById("right");
var viewport = document.getElementById("viewport");
left.addEventListener('click', function() {
   viewport.scrollBy({
      left: -600,
      behavior: 'smooth'
   });
});
right.addEventListener('click', function() {
   viewport.scrollBy({
      left: 600,
      behavior: 'smooth'
   });
});
var left1 = document.querySelector('.left1');
var right1 = document.querySelector('.right1');
var viewport1 = document.querySelector('.viewport1');
left1.addEventListener('click', function() {
   viewport1.scrollBy({
      left: -600,
      behavior: 'smooth'
   });
});
right1.addEventListener('click', function() {
   viewport1.scrollBy({
      left: 600,
      behavior: 'smooth'
   });
});