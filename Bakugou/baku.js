function faseUm() {
    var escolha = prompt("escolha 1 ou 2");

    while(escolha != 1 && escolha != 2){
       
        alert("escolha invalida");
        escolha = prompt("1- Ataca utilizando seu poder.\n2- Espera o inimigo atacar." )
    }
    if (escolha == 1){
        window.location.href= "./baku2.html";
    }else if (escolha == 2) {
        window.location.href = "../gamer_over/game.html";
    }
}