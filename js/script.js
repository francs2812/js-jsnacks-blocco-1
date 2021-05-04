//funzioni
function somma(nom, cogn) {
    nomeCognome = nom + " " + cogn;
    return nomeCognome;
}

var nomi = ["a", "b"];
var cognomi = ["1", "2","3","4", "5"];
var listaInvitati = "";


for(var i=0; i < nomi.length; i++){
    console.log("i" + i);
    for(var i2 = 0 ; i2 < cognomi.length; i2++){
                somma(nomi[i], cognomi[i2]);
                listaInvitati += "<li>"+ nomeCognome +"</li>";
                console.log(nomeCognome);
            }
 }

document.getElementById("lista").innerHTML = listaInvitati; 
