const winkelMandje = ["Bananen","Whiskey","Chips","Bonen","Aardappelen"];
var aantal = winkelMandje.length;
document.getElementById("id1").innerHTML = "aantal producten in het winkelmandje:" + aantal;
document.getElementById('id2').innerHTML = winkelMandje.join('<br>');
document.getElementById('id3').innerHTML = 'het 4e product is:'+ winkelMandje[3];
winkelMandje[1] = 'bier';
document.getElementById('id4').innerHTML = 'Whiskey is vervangen door Bier '+ winkelMandje.join(', ');
function addProduct(){
    const nieuwProduct = prompt("voer het nieuwe produt in:");
winkelMandje.push(nieuwProduct);
document.getElementById('id5').innerHTML = winkelMandje}
if (winkelMandje.length > 1){document.getElementById('id6').innerHTML ="<p>u heeft genoeg producten om te tonen.</p>"
+ winkelMandje.join('<br>');
} else{
    document.getElementById('id6').innerHTML = "<p>u heeft niet genoeg producten om te tonen.</p>";
}
if(winkelMandje[4] == "drop"){
    document.getElementById('id7').innerHTML ="<p>u heeft drop</p>"
} else{
    document.getElementById('id7').innerHTML ="<p>u heeft geen drop.</p>";
}
document.getElementById('id8').innerHTML ="<p>producten met spaties:</p>"
+ winkelMandje.join(' ');
document.getElementById('id9').innerHTML ="<p>oude winkelmand</p>" + winkelMandje.join(', ');
winkelMandje.splice(0, 2);
document.getElementById('nieuwewinkelmand').innerHTML ="nieuwe winkelmand:" + winkelMandje.join(', ');
const winkelMandje = ["Bananen","Whiskey","Chips","Bonen","Aardappelen"];
winkelMand.sort();
document.getElementById('id10').innerHTML = 'gesorteerde array:' + winkelMandje.join(', ');