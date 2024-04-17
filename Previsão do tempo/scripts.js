let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function tela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em "+ dados.name

    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp )+ "°C"

    //Arredondar Math.floor

    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+dados.weather[0].icon +".png"

    document.querySelector(".umidade").innerHTML = "Umidade " + Math.floor(dados.main.humidity)+"%"
}

async function buscarcity(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())
    // fetch -> para acessar um servidor 

    tela(dados)
}

function buttonclick() {
    let cidade = document.querySelector(".pesquisa").value

    buscarcity(cidade)
}

