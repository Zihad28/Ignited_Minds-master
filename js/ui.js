function showTime(e) {
    e.setAttribute("done", "true");
    e.querySelector(".timeline-point").style.background = "blue";
    e.querySelector(".page").style.opacity = "100%";
    e.querySelector(".para").style.opacity = "100%";
}