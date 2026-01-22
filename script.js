const body = document.body;
const dmIcon = document.querySelector(".dm-icon");
const islemImg = document.querySelector(".islem");
const winTriggers = document.querySelectorAll(".win-trigger");
const closeBtns = document.querySelectorAll(".close-btn");
const titles = document.querySelectorAll(".window-title");

const sounds = {
  click: new Audio("assets/select.wav"),
  hover: new Audio("assets/click.ogg")
};

let drag = { active: false, offset: { x: 0, y: 0 }, el: null };

document.querySelector(".toggle-dm").onclick = () => {
  sounds.click.play();
  body.classList.toggle("darkmode");
  const isDark = body.classList.contains("darkmode");
  const suffix = isDark ? "white" : "black";
  
  dmIcon.src = `assets/${isDark ? 'sun' : 'moon'}.svg`;
  islemImg.src = `assets/islem${suffix}.svg`;
  
  const icons = { about: 'about', contact: 'phone', work: 'work' };
  Object.entries(icons).forEach(([key, val]) => {
    document.querySelector(`.${key}-icon`).src = `assets/${val}${suffix}.svg`;
  });
};

winTriggers.forEach(btn => {
  btn.onclick = () => {
    const win = document.getElementById(btn.dataset.window);
    sounds.click.play();
    win.classList.remove("hide", "close");
    
    if (window.innerWidth > 768) {
      win.style.left = Math.random() * (window.innerWidth / 4) + "px";
      win.style.top = Math.random() * (window.innerHeight / 4) + "px";
    }
    
    setTimeout(() => win.classList.add("show"), 10);
  };
});

closeBtns.forEach(btn => {
  btn.onclick = () => {
    const win = btn.closest(".window");
    sounds.hover.play();
    win.classList.remove("show");
    win.classList.add("close");
    setTimeout(() => win.classList.add("hide"), 400);
  };
});

titles.forEach(title => {
  title.onmousedown = (e) => {
    if (window.innerWidth <= 768) return;
    drag.el = title.closest(".window");
    drag.active = true;
    drag.offset.x = e.clientX - drag.el.offsetLeft;
    drag.offset.y = e.clientY - drag.el.offsetTop;
  };
});

document.onmousemove = (e) => {
  if (!drag.active) return;
  drag.el.style.left = `${e.clientX - drag.offset.x}px`;
  drag.el.style.top = `${e.clientY - drag.offset.y}px`;
};

document.onmouseup = () => drag.active = false;