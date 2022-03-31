function atualizar() {
var mensagem = window.document.getElementById('div1')
var imagem = window.document.querySelector('img#imagens')
var titulo = document.querySelector('header#cab')
var data = new Date()
var hora = data.getHours()
var hora2 = data.getMinutes()
var hora3 = data.getSeconds()

var myVar = setInterval(myTimer ,1000);
    function myTimer() {
        var d = new Date(), displayDate;
       if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          displayDate = d.toLocaleTimeString('pt-BR');
       } else {
          displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/sao_paulo'});
       }
          document.getElementById("horacerta").innerHTML ='Agora são exatamente: '+ displayDate;
    }


// add o 0 se o minuto for menor que 10
if (hora2 <10){
    hora2 = '0' + hora2
}

mensagem.innerHTML = `Olá, você nos visitou: ${hora} horas e ${hora2} minutos.`

if (hora >4 && hora <12){
    imagem.src="manha.png"
    document.body.style.background = "#af6c72"
    titulo.innerHTML = `<h1>Bom dia! </h1>`
} else if (hora >=12 && hora <18) {
    imagem.src="tarde.png"
    document.body.style.background = "#a2d8fb"
    titulo.innerHTML = `<h1> Boa tarde!</h1>`
} else {
    imagem.src="noite.png"
    document.body.style.background = "#081d20"
    titulo.innerHTML = `<h1> Boa noite!</h1>`
}
}