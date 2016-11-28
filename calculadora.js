window.onload=manejarClics;

var img="nengo.jpg";

function manejarClics() {
	
	var uno=document.getElementById("uno");
	uno.addEventListener("mouseenter",function() {
								clicEn(uno.src);
								});
	uno.addEventListener("mouseleave",function() {
								clic();
								});
	uno.addEventListener("click",function(){
								aja(uno.src)
	});

	var dos=document.getElementById("dos");
	dos.addEventListener("mouseenter",function() {
								clicEn(dos.src);
								});
	dos.addEventListener("mouseleave",function() {
								clic();
								});	

	dos.addEventListener("click",function(){
								aja(dos.src)
	});

	var tres =document.getElementById("tres")
	tres.addEventListener("mouseenter",function(){
									clicEn(tres.src);
	});
	tres.addEventListener("mouseleave",function() {
								clic();
								});
	tres.addEventListener("click",function(){
								aja(tres.src)
	});

	var cuatro =document.getElementById("cuatro")
	cuatro.addEventListener("mouseenter",function(){
									clicEn(cuatro.src);
	});
	cuatro.addEventListener("mouseleave",function() {
								clic();
								});
	cuatro.addEventListener("click",function(){
								aja(cuatro.src)
	});

	var cinco =document.getElementById("cinco")
	cinco.addEventListener("mouseenter",function(){
									clicEn(cinco.src);
	});
	cinco.addEventListener("mouseleave",function() {
								clic();
								});
	cinco.addEventListener("click",function(){
								aja(cinco.src)
	});

	var seis=document.getElementById("seis");
	seis.addEventListener("mouseenter",function() {
								clicEn(seis.src);
								});
	seis.addEventListener("mouseleave",function() {
								clic();
								});
	seis.addEventListener("click",function(){
								aja(seis.src)
	});

	var siete=document.getElementById("siete");
	siete.addEventListener("mouseenter",function() {
								clicEn(siete.src);
								});
	siete.addEventListener("mouseleave",function() {
								clic();
								});
	siete.addEventListener("click",function(){
								aja(siete.src)
	});

	var ocho =document.getElementById("ocho")
	ocho.addEventListener("mouseenter",function(){
									clicEn(ocho.src);
	});
	ocho.addEventListener("mouseleave",function() {
								clic();
								});
	ocho.addEventListener("click",function(){
								aja(ocho.src)
	});

	var nueve =document.getElementById("nueve")
	nueve.addEventListener("mouseenter",function(){
									clicEn(nueve.src);
	});
	nueve.addEventListener("mouseleave",function() {
								clic();
								});
	nueve.addEventListener("click",function(){
								aja(nueve.src)
	});

}

function clicEn(imgs){
var s=document.getElementById("m").src=imgs;
}

function clic(imgs){
var s=document.getElementById("m").src=img;
}


function aja(imgs){
	img=imgs;
var s=document.getElementById("m").src=img;
}