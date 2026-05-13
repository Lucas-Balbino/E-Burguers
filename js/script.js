function calcular() {

    let total = 0;


    // pega quantidades
    let qtdHamburguer = document.getElementById("hamburguer").value;
    let qtdBatata = document.getElementById("batata").value;
    let qtdRefri = document.getElementById("refrigerante").value;

    // calculo
    total = total + (qtdHamburguer * 38);
    total = total + (qtdBatata * 10);
    total = total + (qtdRefri * 6);

 
    // mostra resultado
    document.getElementById("resultado").innerHTML = "Total: R$ " + total;
}

function contato() {
 
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
 
    if (nome == "") {
        alert("Por favor, preencha o nome.");
        return;
    }
 
    if (email == "") {
        alert("Por favor, preencha o email.");
        return;
    }
 
    if (telefone == "") {
        alert("Por favor, preencha o telefone.");
        return;
    }
 
    alert("Obrigado, " + nome + "! Entraremos em contato pelo email " + email + " ou pelo telefone " + telefone + ".");
 
}