let projectSlide = document.getElementsByClassName("projects-list");
let nproj = 3;
let iii = 0;
function projectNext() {
    if (iii < 2) {
        projectSlide[iii].classList.remove("active-project");
        projectSlide[iii + 1].classList.add("active-project");
        iii++;
    }
    else {
        projectSlide[iii].classList.remove("active-project");
        iii = 0;
        projectSlide[iii].classList.add("active-project");
        projectSlide[iii + 1].classList.remove("active-project");
    }
}
function projectPrev() {
    if (iii > 0) {
        projectSlide[iii].classList.remove("active-project");
        projectSlide[iii - 1].classList.add("active-project");
        iii--;
    }
    else {
        projectSlide[iii].classList.remove("active-project");
        projectSlide[iii + 2].classList.add("active-project");
        iii = 2;
    }
}