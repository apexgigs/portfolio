function total(){
var billAmmount= (document.getElementById('billAmmount').value);
var tipAmmount =  document.getElementById('tipAmm').value;
var numOfGuest = document.getElementById('numOfGuest').value;


if(billAmmount === 0 || tipAmmount<=0 ){
alert('please fill all fields')

}

var indivisualPay= Math.floor((billAmmount*tipAmmount)/numOfGuest);

document.getElementById('youPay').innerHTML= indivisualPay + 'dollars';

}
