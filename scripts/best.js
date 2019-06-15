var bestItem = document.querySelector(".main__best-pos");
var bestVideo = document.querySelector(".main__best-iframe");
var modalShadow = document.querySelector(".modal-shadow");
var closeBtn = document.querySelector(".modal-shadow-close");

bestItem.onclick = function(){
	bestVideo.style.display = "block";
	modalShadow.style.display = "block";
}
modalShadow.onclick = function(){
	bestVideo.style.display = "none";
	modalShadow.style.display = "none";
}	
closeBtn.onclick = function(){
	bestVideo.style.display = "none";
	modalShadow.style.display = "none";
}	
