function escuchando() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    reconocimiento = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZFb5fP0MB/model.json", listo);

}
function listo() {
    console.log("te escuchan cuando no te das cuenta");
    reconocimiento.classify(baile);
}
function baile(error, resultados) {
    if (!error) {
        console.log(resultados);
        var sonido = resultados[0].label;
        var porcentaje = resultados[0].confidence;
        var creeper = document.getElementById("pig");
        var steve = document.getElementById("SPC");
        var gato = document.getElementById("cat");
        if (porcentaje > 0.8 && sonido != sonido_anterior) {

            if (sonido == "creeper") {
                gato.src = "gato-coptero.gif";
                steve.src = "steve_corriendo.gif";
                creeper.src = "580b57fcd9996e24bc43c2f7.png";
            }
            else if (sonido == "gatitos") {
                creeper.src = "ObeseOffbeatImago-size_restricted.gif"
                gato.src = "gato.png";
                steve.src = "640px-Steve_SSBU.png";
            }
            else if (sonido == "steve") {
                creeper.src = "ObeseOffbeatImago-size_restricted.gif"
                gato.src = "gato.png";
                steve.src = "640px-Steve_SSBU.png";
            }
            else if (sonido == "creeper vs zombies") {
                gato.src = "tumblr_984947a2500883b0680cb6eca81058d7_59eeaa6b_500.gif";
                steve.src = "minecraft-steve-run-steve.gif";
                creeper.src = "creeper.gif"
            }
            else if (sonido == "revenge") {
                gato.src = "gato-coptero.gif";
                steve.src = "steve corriendo por su vida.gif";
                creeper.src = "minecraft-explosion-creeper-4a4nd9in95grdygt.gif"

            }
            else if (sonido == "Ruido de fondo"){
                gato.src = "gato.png";
                steve.src = "640px-Steve_SSBU.png";
                creeper.src = "580b57fcd9996e24bc43c2f7.png";
            }
        }
        sonido_anterior=sonido
    }
}
