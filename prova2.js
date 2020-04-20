


//var nome = window.prompt("Inserisci il tuo nome");
//if (nome != null) {

//}


//document.write(nome);

o="www";
document.write(o);


var x = 123;
function somma(a, b) {
	return a + b;
}

console.log(x);
console.log(somma(3, 5));
console.log(window.x);
console.log(window.somma(3, 5));
console.log(this.x);
console.log(this.somma(3, 5));

console.log(innerWidth + "x" + innerHeight)	// 1280x386

window.onresize = function() {
  console.log(window.innerWidth + "," + window.innerHeight);
};

for (var i=0; i<frames.length; i++) {
	console.log(frames[i].location.href)
}


var myParagrafo = document.getElementById("paragrafo");
myParagrafo.ondblclick = function(e) {
	e.target.innerHTML = "Hai fatto doppio click sul paragrafo!";
};



var myParagrafo = document.getElementById("paragrafo");
myParagrafo.onmouseover = function(e) { e.target.className = "overClass"; };
myParagrafo.onmouseout  = function(e) { e.target.className = "outClass";  };


//document.onmousemove = function(e) {
//  console.log("Posizione rispetto alla finestra: " + e.clientX + ", " + e.clientY);
//  console.log("Posizione rispetto alla pagina: " + e.pageX + ", " + e.pageY);
//};



var myForm = document.forms.myForm;
myForm.addEventListener("submit", function(e) {
	var spnTotale = document.getElementById("spnTotale");
	var txtQta = document.getElementById("txtQta");
	var txtPrezzo = document.getElementById("txtPrezzo");
	var txtIVA = document.getElementById("txtIVA");
	spnTotale.innerHTML = (txtQta.valueAsNumber * txtPrezzo.valueAsNumber) +
                          (txtQta.valueAsNumber * txtPrezzo.valueAsNumber *
                           txtIVA.valueAsNumber)/100;
	e.preventDefault();
});
