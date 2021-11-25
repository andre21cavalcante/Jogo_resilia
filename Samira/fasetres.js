function faseTres() {
    var escolha = prompt("escolha 1 ou 2");

    while(escolha != 1 && escolha != 2){
       
        alert("escolha invalida");
        escolha = prompt("1-Fúria do dragão- Executa um poderoso chute giratório,arremessando seu alvo para trás, causando danos físicos ao alvo.\n2-Tempestade/Mutilar- Golpeia o chão enviando uma onda de choque que causa danos mágicos." )
    }
    if (escolha == 2){
        window.location.href= "./finalsami.html";
    }else if (escolha == 1) {
        window.location.href = "../gamer_over/game.html";
    }
}