document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = document.querySelector("input[type='text']").value;
    let senha = document.querySelector("input[type='password']").value;


    if (usuario === "admin" && senha === "1234") {
        alert("Login bem-sucedido! 🚀");
        window.location.href = "dashboard.html"; // Redireciona para outra página
    } else {
        alert("Usuário ou senha incorretos. Tente novamente!");
    }
});
