var input=document.getElementById("input");
var result=document.getElementById("result");
var inputType=document.getElementById("inputType");
var resultType=document.getElementById("resultType");

var inputeValue,resultValue;

inputeValue=inputType.value;
resultValue=resultType.value;

input.addEventListener("keyup",myOutput);
inputType.addEventListener("change",myOutput);
resultType.addEventListener("change",myOutput);

function myOutput(){
    inputeValue=inputType.value;
    resultValue=resultType.value;

    if(inputeValue==="meter"&&resultValue==="meter"){
        result.value=input.value;

    }else if(inputeValue==="meter"&&resultValue==="kilometer"){
        result.value=Number(input.value)*0.001;
    }else if(inputeValue==="meter"&&resultValue==="centimeter"){
        result.value=Number(input.value)*100;
    }

    
    if(inputeValue==="centimeter"&&resultValue==="meter"){
        result.value=Number(input.value)*0.01;

    }else if(inputeValue==="centimeter"&&resultValue==="kilometer"){
        result.value=Number(input.value)* 0.00001;
    }else if(inputeValue==="centimeter"&&resultValue==="centimeter"){
        result.value=input.value;
    }

    if(inputeValue==="kilometer"&&resultValue==="meter"){
        result.value=Number(input.value)*1000;

    }else if(inputeValue==="kilometer"&&resultValue==="kilometer"){
        result.value=input.value;
    }else if(inputeValue==="kilometer"&&resultValue==="centimeter"){
        result.value=Number(input.value)* 100000;
    }



}
