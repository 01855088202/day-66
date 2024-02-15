
//pin Generate-------------------------------------
function generatePin() {
    var getPin = Math.round(Math.random()*10000)
    return getPin;
}

//Pin Check 4digit or not=======================
function pinChecker() {
    var getPinCheck = generatePin();
    var getPinString = getPinCheck + '';
    if (getPinString.length == 4) {
        return getPinCheck;
    }else{
        return generatePin();
    }

}

//Button-------------------------------------------
 document.getElementById('btn-pin').addEventListener('click',function(){
    var newPin = pinChecker();
    
    
    var inputField = document.getElementById('pinField')
    inputField.value = newPin;
 })

 //pin-matcher========================================
 document.getElementById('calculator').addEventListener('click',function(event){
     
    var number = event.target.innerText;
    
    var field = document.getElementById('inputPin');
    var newValue=field.value;
    if (isNaN(number)) {
        if (number=='c') {
            field.value='';    
        }
        else if (number=='<') {
            var newValuenum=newValue.split('');
            newValuenum.pop();
            console.log(newValuenum);
            var joinvalue=newValuenum.join('');
            field.value=joinvalue;
        } 
    } else {
        var newNumber=newValue+number;
        field.value=newNumber;    
    }
})

//checked pin
document.getElementById('sub').addEventListener('click',function () {
    //generate.pin
    var generatePin=document.getElementById('pinField')
    generatePinValue=generatePin.value;
    //type-pin
    var typePin=document.getElementById('inputPin')
    var typePinValue=typePin.value;   
    if (generatePinValue==typePinValue) {
        document.getElementById('green').style.display='block';
           
    }
      else{
        document.getElementById('red').style.display='block';
       
    }
})




