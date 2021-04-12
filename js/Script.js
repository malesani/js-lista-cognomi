//information utente
var cognome = prompt("scrive il tuo cognome");

//list cognomi
var list_cognomi = [
  "Bianchi",
  "Neri",
  "Rossi",
  "Verdi",
  "Gialli",
  "Bueno"
];
list_cognomi.push(cognome);


//stampa 
for(var i = 1; i < list_cognomi.length; i++){
  var list_complete = list_cognomi.sort()[i];

  var contenuto_precendente = document.getElementById('lista').innerHTML;

  document.getElementById('lista').innerHTML = contenuto_precendente + "<li>" +list_complete+ "</li>";
  
}


//stampa 
var indice = list_cognomi.indexOf(cognome)
console.log(indice);

document.getElementById("position").innerHTML = "tu posizione nella lista è la numero = "+ indice;

 

