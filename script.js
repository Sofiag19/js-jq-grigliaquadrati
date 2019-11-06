// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

$(document).ready(function(){

  var contatoreRosso = [];
  $(".red").click(function(){
    $(this).css("background-color","red");
    $(this).off();
    var rosso = $(this).html();
    contatoreRosso.push(rosso);
    document.getElementById('red_score').innerHTML = contatoreRosso.length;
  });

  var contatoreVerde = [];
  $(".green").click(function(){
    $(this).css("background-color","green");
    $(this).off();
    var verde = $(this).html();
    contatoreVerde.push(verde);
    document.getElementById('green_score').innerHTML = contatoreVerde.length;
  });

})
