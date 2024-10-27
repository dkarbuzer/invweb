const chooseGameText = document.getElementById("chooseGameText");
chooseGameText.innerText = 
    language === "ru" ? "выберите игру" :
    language === "hi" ? "खेल चुनें" :
    language === "tr" ? "oyun seç" :
    language === "es" ? "elige un juego" :
    "choose a game";

const helpButton = document.getElementById("helpButton");
helpButton.innerText = 
    language === "ru" ? "поддержка" :
    language === "hi" ? "सहायता" :
    language === "tr" ? "destek" :
    language === "es" ? "soporte" :
    "support";

