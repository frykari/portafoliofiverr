
/*   Preloader   */
window.addEventListener("load", ()=>{
    document.querySelector(".preloader").classList.toggle("preloader-none");
});
/*   fin Preloader   */


//****************** BOTONONES ******************//
/*
let etiqueta = document.querySelectorAll(".buttonMove");

etiqueta.forEach(link => {
    link.addEventListener("mouseover", () => {
 	window.removeEventListener("mousemove", moverCursor);
	cursor.classList.add("scale0");
	let insideMove = link.querySelectorAll(".insideMove");
	const t = link.getBoundingClientRect();

	insideMove.forEach(l1 => {
	    l1.classList.add("scale12");
	    function mover(e){
		let left = e.pageX;
		let top = e.pageY;
		l1.style.top = top - t.top + "px";
		l1.style.left = left - t.left + "px";
	    };
	    l1.parentNode.addEventListener("mousemove", mover);
	});
    });
    link.addEventListener("mouseleave", () => {
 	window.addEventListener("mousemove", moverCursor);
	cursor.classList.remove("scale0");
	let insideMove = link.querySelectorAll(".insideMove");

	insideMove.forEach(l2 => {
	    l2.classList.remove("scale12");
	    l2.parentNode.onmousemove = null;
	});
    });
});
*/
//****************** End BOTONONES ******************//

//****************** icono traductor ******************//
//a la versión en español tenemos que agregar "traductor_none" para jugar con ese,
//sirviendonos de refencias _on y el _off para saber a quien quitar o agregar "traductor_none"
let iconoTraductor = document.querySelector(".boton_traductor");
let traductorOff = document.querySelectorAll(".traductor_off");
let traductorOn = document.querySelectorAll(".traductor_on");
let contador = 0;
iconoTraductor.addEventListener("click", iconoTraductor.onclick);
iconoTraductor.onclick = function (){
				contador++;
				if(contador%2==0){
				    traductorOff.forEach(traduce =>{
					traduce.classList.add("traductor_none");
				    });
				    traductorOn.forEach(traduce =>{
					traduce.classList.remove("traductor_none");
				    });
				}else{
				    traductorOff.forEach(traduce =>{
					traduce.classList.remove("traductor_none");
				    });
				    traductorOn.forEach(traduce =>{
					traduce.classList.add("traductor_none");
				    });
				};
			    };
//****************** end icono traductor ******************//

/************** effecto magnetico simple **************/
// uso: con solo poner la class ".button_magnetico_simple" en algun elemento
/*
let simpleMagnetico = document.querySelectorAll(".button_magnetico_simple");
simpleMagnetico.forEach(sm=>{
    sm.style.transition = `all 0.25s linear`;
});

simpleMagnetico.forEach(sm=>{
    sm.addEventListener("mousemove", (e)=>{
	const bm = sm.getBoundingClientRect();
	x = e.pageX - bm.left - bm.width/2;
	y = e.pageY - bm.top - bm.height/2;
	sm.style.transform =`translate(${0.2*x}px,${0.1*y}px)`;
    });
});
simpleMagnetico.forEach(sm=>{
    sm.addEventListener("mouseout", ()=>{
	sm.style.transform =`translate(0,0)`;
    });
});
*/
/************** fin effecto magnetico simple **************/






