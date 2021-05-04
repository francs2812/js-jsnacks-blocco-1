//funzioni
function somma(nom, cogn) {
    nomeCognome = nom + " " + cogn;
    return nomeCognome;
}

var nomi = ["Giulio", "Fabio"];
var cognomi = ["Marzullotti", "Spaghettani", "Luciani", "Frangella", "Frattani"];
var listaInvitati = "";


for(var i=0; i < nomi.length; i++){
    for(var i2 = 0 ; i2 < cognomi.length; i2++){
                somma(nomi[i2], cognomi[i2]);
                listaInvitati += "<li>"+ nomeCognome +"</li>";
                console.log(nomeCognome);
            }
        }

// for(var i = 0 ; i < cognomi.length; i++){
//     somma(nomi[0], cognomi[i]);
//     listaInvitati += "<li>"+ nomeCognome +"</li>";
//     console.log(nomeCognome);
// }
// for(var i = 0 ; i < cognomi.length; i++){
//     somma(nomi[1], cognomi[i]);
//     listaInvitati += "<li>"+ nomeCognome +"</li>";
//     console.log(nomeCognome);
//}

document.getElementById("lista").innerHTML = listaInvitati; 
