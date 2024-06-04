document.addEventListener("DOMContentLoaded", function(){
    const gravidade = 9.81;
    let tempo_segundos = prompt("Digite o tempo de queda em segundos:");
    if (tempo_segundos !== null && tempo_segundos !== ""){
        let distancia = Math.floor(0.5 * gravidade * tempo_segundos * tempo_segundos);
        let elemento = document.querySelector("#distância_percorrida");
        let segundos_informados = document.querySelector("#segundos_informados");

    elemento.textContent = distancia + "metros";
    segundos_informados.textContent = tempo_segundos + "segundos";

    setTimeout(function(){
        location.meload();
    }, 7000);
}else{
    this.location.reload();
}
});