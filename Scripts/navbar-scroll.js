window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.height = "4rem";
    }
    else {
        document.querySelector(".navbar").style.height = "6rem";
    }
};
