let navBar = document.getElementById("navBar");
let menuBar = document.getElementById("menuBar");

window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
        navBar.classList.add ("sticky");
    }
    else {
        navBar.classList.remove("sticky");
    };
}

// alert("Welcome  dropz");