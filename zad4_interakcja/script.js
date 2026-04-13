const themeBtn = document.getElementById("themeBtn");
const toggleBtn = document.getElementById("toggleProjects");

let isRed = true;

themeBtn.addEventListener("click", () => {
    const link = document.querySelector("link[rel='stylesheet']");

    if (isRed) {
        link.href = "green.css";
    } else {
        link.href = "red.css";
    }

    isRed = !isRed;
});

const projects = document.querySelector(".projects");

toggleBtn.addEventListener("click", () => {
    if (projects.style.display === "none") {
        projects.style.display = "block";
    } else {
        projects.style.display = "none";
    }
});