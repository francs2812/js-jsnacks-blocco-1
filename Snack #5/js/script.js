var numeri = [];

for(var i=0; i<6; i++) {
    var numero = parseInt(prompt("Numero"));
    if(!(numero % 2 == 0)) {
        numeri.push(numero);
    } 
}
 document.write(numeri);
