var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", 
"assets/img/a3.jpg", "assets/img/a4.jpg"];

pictures.forEach(function(ruta){
	
	var foto = document.createElement("img");
	foto.setAttribute("class","marco");

	foto.setAttribute("src", ruta);
	document.getElementById("cont-imgs").appendChild(foto);
		}
);
