function faseUm() {
    var escolha = prompt("escolha 1 ou 2");

    while(escolha != 2 && escolha != 1){
       
        alert("escolha invalida");
        escolha = prompt("1-  Atacar: utilizando seu poder.\n2- Esquivar-se do golpe da criatura." )
    }
    if (escolha == 2){
        window.location.href= "./fase3.html";
    }else if (escolha == 1) {
        window.location.href = "../gamer_over/game.html";
    }
}