let skillSlide = document.getElementsByClassName("section-2-container-subcontainer-2-lower-skill-data");
let numss = 3;
let ii = 0;
function skillNext() {
    if (ii < numss - 1) {
        skillSlides[ii].classList.remove("active-skill");
        skillSlides[ii + 1].classList.add("active-skill");
        ii++;
    }
    else {
        skillSlides[ii].classList.remove("active-skill");
        i = 0;
        skillSlides[ii].classList.add("active-skill");
        skillSlides[ii + 1].classList.remove("active-skill");
    }
}
function skillPrev() {
    if (ii > 0) {
        skillSlides[ii].classList.remove("active-skill");
        skillSlides[ii - 1].classList.add("active-skill");
        ii--;
    }
    else {
        skillSlides[ii].classList.remove("active-skill");
        skillSlides[ii + 2].classList.add("active-skill");
        ii = numss - 1;
    }
}