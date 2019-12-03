var creditCard, text;
var sum=0

creditCard= document.getElementById('cardNumber').value;




function validate(){

for (var i= creditCard.length; i>0; i--) {creditCard[i]
}


if((creditCard.length===16) && (creditCard[creditCard.length+1]!=creditCard[i]))
{
text="card number valid";
}

else {text= "card number not valid";

}

document.getElementById("legit").innerHTML=text;

}
