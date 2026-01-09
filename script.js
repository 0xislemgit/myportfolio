const toggledm = document.querySelector(".toggle-darkmode");
if(localStorage.getItem("darkmode") == "active") {
    document.body.classList.add("darkmode");
}

toggledm.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")) {
        localStorage.setItem("darkmode", "active");
    } else {
        localStorage.setItem("darkmode", "inactive");
    }
}