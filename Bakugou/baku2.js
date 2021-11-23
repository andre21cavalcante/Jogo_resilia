function faseDois() {
    var escolha = prompt("escolha 1 ou 2");

    while(escolha != 1 && escolha != 2){
       
        alert("escolha invalida");
        escolha = prompt("1- Ele se esconde entre umas rochas, fazendo com que o inimigo o procure\n2- Ele ataca o inimigo de imediato." )
    }
    if (escolha == 1){
        window.location.href= "./baku3.html";
    }else if (escolha == 2) {
        window.location.href = "../gamer_over/game.html";
    }
}