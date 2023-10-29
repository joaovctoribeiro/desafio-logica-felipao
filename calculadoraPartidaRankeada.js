function amountWinsLosses(playerWins, playerLosses) {
    
    let playerBalance = playerWins - playerLosses;
    let playerLevel = "";

    if (playerWins < 10) {

        playerLevel = "Ferro";

    } else if (playerWins >= 10 && playerWins <= 20) {

        playerLevel = "Bronze";

    } else if (playerWins >= 21 && playerWins <= 50) {

        playerLevel = "Prata";

    } else if (playerWins >= 51 && playerWins <= 80) {

        playerLevel = "Ouro";

    } else if (playerWins >= 81 && playerWins <= 90) {

        playerLevel = "Diamante";

    } else if (playerWins >= 91 && playerWins <= 100) {

        playerLevel = "Lendário";

    } else {

        playerLevel = "Imortal";

    }

    console.log(`O Herói tem um saldo de ${playerBalance} e está no nível de ${playerLevel}`);

}

amountWinsLosses(55, 3);