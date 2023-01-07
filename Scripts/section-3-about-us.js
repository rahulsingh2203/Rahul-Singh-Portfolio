let slides = document.getElementsByClassName("section-2-container-subcontainer-1-slide");
let slidesNum = slides.length;
let i = 0;
function nextSlide() {
    if (i < slidesNum - 1) {
        slides[i].classList.remove("active-slide-about-us");
        slides[i + 1].classList.add("active-slide-about-us");
        i++;
    }
    else {
        slides[i].classList.remove("active-slide-about-us");
        i = 0;
        slides[i].classList.add("active-slide-about-us");
        slides[i + 1].classList.remove("active-slide-about-us");
    }
}
function prevSlide() {
    if (i > 0) {
        slides[i].classList.remove("active-slide-about-us");
        slides[i - 1].classList.add("active-slide-about-us");
        i--;
    }
    else {
        slides[i].classList.remove("active-slide-about-us");
        slides[i + 2].classList.add("active-slide-about-us");
        i = slidesNum - 1;
    }
}