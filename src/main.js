document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;

    var resultado = `
        nombre: ${nombre}
        email: ${email}
        password1: ${password1}
        password2: ${password2}
    `;

    console.log(resultado);

});