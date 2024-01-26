let icon = document.getElementById("icon");
let bar = document.getElementById("bar");
icon.onclick = function () {
    if (bar.style.width == "50px") {
        bar.style.transition = "2s";
        bar.style.width = "200px";
    }

    else {
        bar.style.width = "50px";
        bar.style.transition = "2s";
    }
}