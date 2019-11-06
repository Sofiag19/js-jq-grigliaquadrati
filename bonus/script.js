// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti
// BONUS:
// generare la distribuzione di quelli che diventano rossi al click, in modo casuale;
// generare l’intera griglia in js, invece che scriverla noi a mano nel file html;
// controllo sul click di un quadrato, se è stato già cliccato dò un feedback aggiuntivo, oltre il fatto che è colorato di già;
// varie ed eventuali che vi possono venire in mente.

$(document).ready(function(){

  // crazione numeri random per successivo paragone
  function numRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var tdRossi= [];
  var x = 0;
  var rosso;
  while (tdRossi.length<15) {
    rosso = numRandom(1,64);
    if (tdRossi.includes(rosso)==false) {
      tdRossi.push(rosso);
    }
    x++;
  }
  console.log(tdRossi);

  // creazione tabella con associato numero per identificazione
  var k = 0;
  for (var i = 0; i < 8; i++) {
    document.getElementById('tabella').innerHTML += "<tr id=row"+ [i] +"></tr>";
    for (var j = 0; j < 8; j++) {
      k++;
      var riga = document.getElementById("row"+[i]);
      if (tdRossi.includes(k)) {
        riga.innerHTML += "<td class='red'></td>";
      } else {
        riga.innerHTML += "<td class='green'></td>";
      }
    }
  }

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
