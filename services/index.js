
function validateForm() {
    const name = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const login = { name, pass };

    if (login.name === "" || login.pass === "") {
        alert("preencha todos os campos");
    } else if (login.name !== "admin" || login.pass !== "admin") {
        alert("usuário ou senha incorretos");
    } else {
        window.location.href = './home/home.html';
    }
}