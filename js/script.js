function calcular() {

    let total = 0;

    // pega quantidades
    let qtdHamburguer = document.getElementById("hamburguer").value;
    let qtdBatata = document.getElementById("batata").value;
    let qtdRefri = document.getElementById("refrigerante").value;

    // calcula
    total = total + (qtdHamburguer * 38);
    total = total + (qtdBatata * 10);
    total = total + (qtdRefri * 6);

    // mostra resultado
    document.getElementById("resultado").innerHTML = "Total: R$ " + total;
}