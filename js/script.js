// Dark Mode Toggle (Bonus Feature)
const toggleButton = document.createElement("button");
toggleButton.textContent = "Dark Mode";
document.body.appendChild(toggleButton);
toggleButton.onclick = () => {
    document.body.classList.toggle("dark-mode");
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
