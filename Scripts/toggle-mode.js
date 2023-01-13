let bodyBackground = document.body;
let section1SpanName = document.getElementById("span-name");
let section1SpanRahul = document.getElementById("span-rahul");
let navbarLi = document.getElementsByClassName("scr");
let section2ContainerSubContainer1 = document.getElementsByClassName("section-2-container-subcontainer-1");
let aboutUsData = document.getElementsByClassName("data-about-us");
let modeToggle = document.getElementsByClassName("section-2-container-subcontainer-2-upper");
let projects = document.getElementsByClassName("section-3-container-subcontainer-1");
let footer = document.getElementsByClassName("footer-links");


function navbar() {
    for (let i = 0; i <= 2; i++) {
        navbarLi[i].classList.toggle("light-li");
        navbarLi[0].classList.toggle("light-active");
    }
}
/*function aboutUs() {
    for (let i = 0; i <= 3; i++) {
        aboutUsData[i].classList.toggle("light-about-us");
    }
} */

function togglebtn() {
    let x = document.getElementById("togglebtn");
    if (x.innerHTML === "ON") {
        x.innerHTML = "OFF";
    } else {
        x.innerHTML = "ON";
    }
}
function footers(){

}



function toggleMode() {
    bodyBackground.classList.toggle("light-body");
    section1SpanName.classList.toggle("light-span-name");
    section1SpanRahul.classList.toggle("light-span-rahul");
    navbar();
    section2ContainerSubContainer1[0].classList.toggle("light-section-2-container-subcontainer-1");
    modeToggle[0].classList.toggle("light-section-2-container-subcontainer-2-upper");
    togglebtn();
    projects[0].classList.toggle("light-section-3-container-subcontainer-1");
    footers();
    //document.getElementsByClassName("footer-links")[0].style.color = "black";
    //aboutUs();
}