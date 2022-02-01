function carregar (){

  var mensagem = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');

  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var segundo = data.getSeconds();

  mensagem.innerHTML=`Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos`;

  if (hora >=0 && hora <=12){
    //carrega a foto da manhã
    img.src="imagens/dia.png";
    window.document.body.style.background="#be6f0a";
  }
  else if (hora>12 && hora <=18){
    //carrega a foto da tarde
    img.src="imagens/tarde.png";
    window.document.body.style.background="#f6e7ea";
  }
  else {
    //carrega a foto da noite
    img.src="imagens/noite.png";
    window.document.body.style.background="rgb(6, 87, 104)";
  }
}
