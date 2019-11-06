// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti
// BONUS:
// generare la distribuzione di quelli che diventano rossi al click, in modo casuale;
// generare l’intera griglia in js, invece che scriverla noi a mano nel file html;
// controllo sul click di un quadrato, se è stato già cliccato dò un feedback aggiuntivo, oltre il fatto che è colorato di già;
// varie ed eventuali che vi possono venire in mente.

for (var i = 0; i < 8; i++) {
  document.getElementById('tabella').innerHTML += "<tr id=row"+ [i] +"></tr>";
  for (var j = 0; j < 8; j++) {
    document.getElementById("row"+[i]).innerHTML += "<td></td>";    
  }
}

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
