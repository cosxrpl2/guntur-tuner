// Navigasi tab
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        contents.forEach(content => {
            content.style.display = "none";
        });

        document.getElementById(tab.getAttribute("data-tab")).style.display = "block";
    });
});

// Edit profil alert
document.querySelector('.edit-btn').addEventListener('click', function() {
    alert("Fitur Edit Profil belum tersedia!");
});