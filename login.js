document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (email === "p@gmail.com" && password === "p") {
        alert("Login Berhasil!");
        window.location.href = "pp.html"; // Arahkan ke halaman lain
    } else {
        alert("Email atau Password salah!");
    }
});
