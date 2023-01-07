let skillSlide = document.getElementsByClassName("section-2-container-subcontainer-2-lower-skill-data");
let numss = 3;
let ii = 0;
function skillNext() {
    if (ii < 2) {
        skillSlide[ii].classList.remove("active-skill");
        skillSlide[ii + 1].classList.add("active-skill");
        ii++;
    }
    else {
        skillSlide[ii].classList.remove("active-skill");
        ii = 0;
        skillSlide[ii].classList.add("active-skill");
        skillSlide[ii + 1].classList.remove("active-skill");
    }
}
function skillPrev() {
    if (ii > 0) {
        skillSlide[ii].classList.remove("active-skill");
        skillSlide[ii - 1].classList.add("active-skill");
        ii--;
    }
    else {
        skillSlide[ii].classList.remove("active-skill");
        skillSlide[ii + 2].classList.add("active-skill");
        ii = 2;
    }
}