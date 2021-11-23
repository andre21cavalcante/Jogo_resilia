function faseTres() {
    var escolha = prompt("escolha 1 ou 2");

    while(escolha != 1 && escolha != 2){
       
        alert("escolha invalida");
        escolha = prompt("1-Stun Grenade: Katsuki cria uma esfera de luz em sua mão que explode em larga escala de flash.\n2-AP Shot: o ataque especial de Bakugou- Ele estende uma de suas mãos e usa a outra para formar um círculo com a palma estendida. Logo em seguida dispara uma explosão através de um círculo, criando um feixe de explosão concentrada." )
    }
    if (escolha == 2){
        window.location.href= "./final.html";
    }else if (escolha == 1) {
        window.location.href = "../gamer_over/game.html";
    }
}