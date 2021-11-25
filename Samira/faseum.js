function faseUm() {
    var escolha = prompt("escolha 1 ou 2");

    while(escolha != 1 && escolha != 2){
       
        alert("escolha invalida");
        escolha = prompt("1-Contra-atacar.\n2-Desviar de seu golpe." )
    }
    if (escolha == 1){
        window.location.href= "./samifasedois.html";
    }else if (escolha == 2) {
        window.location.href = "../gamer_over/game.html";
    }
}