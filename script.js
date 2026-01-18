const toggledm = document.querySelector(".toggle-dm");
const dmicon = document.querySelector(".dm-icon");
const about = document.querySelector(".about");
const aboutWindow = document.querySelector(".about-window");
const closeBtns = document.querySelectorAll(".close-btn");
const titles = document.querySelectorAll(".window-title");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let activeWindow = null;

toggledm.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    dmicon.src = document.body.classList.contains("darkmode") ? "sun.svg" : "moon.svg";
});

titles.forEach(title => {
    title.addEventListener("mousedown", e => {
        activeWindow = title.closest(".window");
        isDragging = true;
        offsetX = e.clientX - activeWindow.offsetLeft;
        offsetY = e.clientY - activeWindow.offsetTop;
    });
});

document.addEventListener("mousemove", e => {
    if (!isDragging || !activeWindow) return;
    activeWindow.style.left = e.clientX - offsetX + "px";
    activeWindow.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    activeWindow = null;
});

about.addEventListener("click", () => {
    const rw = Math.floor(Math.random() * (window.innerWidth / 3));
    const rh = Math.floor(Math.random() * (window.innerHeight / 3));

    aboutWindow.classList.remove("hide", "close");

    if (!aboutWindow.classList.contains("show")) {
        aboutWindow.style.left = rw + "px";
        aboutWindow.style.top = rh + "px";
        aboutWindow.classList.add("show");
    }
});

closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const w = btn.closest(".window");
        w.classList.remove("show");
        w.classList.add("close");
        setTimeout(() => {
            w.classList.add("hide");
            w.classList.remove("close");
        }, 100);
    });
});
