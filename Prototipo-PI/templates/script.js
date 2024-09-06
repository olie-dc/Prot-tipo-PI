// Script para alternar a barra lateral
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const barraLateral = document.querySelector('.barra-lateral');

    menuToggle.addEventListener('click', function() {
        barraLateral.classList.toggle('hidden');
    });
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter valores dos campos
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar credenciais (exemplo)
    if (username && password) {
        // Redirecionar para a página principal após login
        window.location.href = 'index.html';
    } else {
        alert('Preencha todos os campos!');
    }
});