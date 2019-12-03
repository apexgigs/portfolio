
function cashRegister(){
var jordans= document.getElementById('jordan').value;
var backPack= document.getElementById('supreme').value;
var watch = document.getElementById('gShock').value;
var coat= document.getElementById('london').value;
var shirt= document.getElementById('guess').value;
var sunGlasses= document.getElementById('rayban').value;

var ammount= (jordans*200) + (backPack*150) + (watch*90) + (coat*600) + (shirt*50) + (sunGlasses*160) ;

var result= document.getElementById('total').value=ammount;

}
