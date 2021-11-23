function faseUm() {
    var escolha = prompt("escolha 1 ou 2");

    while(escolha != 1 && escolha != 2){
       
        alert("escolha invalida");
        escolha = prompt("1- One For All- 100%: uma técnica que permite a Izuku atacar usando todo o poder do One For All na parte desejada de seu corpo, com custo de quebrá-la após a execução.\n2-  One For All- 30%: uma técnica que permite a Izuku usar 30% do One For All no braço direito." )
    }
    if (escolha == 1){
        window.location.href= "./fina.html";
    }else if (escolha == 2) {
        window.location.href = "../gamer_over/game.html";
    }
}