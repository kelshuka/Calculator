

function calAdd(a,b) {
    //let inp = inps.split('');
    return a+b;
}

function calSub(a,b) {
    //let inp = inps.split('');
    return a-b;
}

function calMult(a,b) {
    //let inp = inps.split('');
    return a*b;
}

function calDiv(a,b) {
    //let inp = inps.split('');
    return a/b;
}


function operate(op,a,b) {
    if (op == "+") {
        return calAdd(a,b);
    } else if (op == "-") {
        return calSub(a,b);
    } else if (op == "*") {
        return calMult(a,b);
    } else if (op == "/") {
         return calDiv(a,b);
    } else {
        return "Type another operator";
    }
}


const display = document.querySelector('#display');

let displayValue = 0;


const numbs = document.querySelectorAll('.numbs');


numbs.forEach(contents => {
    contents.addEventListener('click', (e) => {
        displayValue += e.target.value;
        display.innerText = displayValue;

        if(e.target.value=="+"||e.target.value=="-"||e.target.value=="*"||e.target.value=="/") {
            console.log("matched");
            display.innerText = display.innerText.slice(1, display.innerText.length);
        }
        console.log(e.target.value + " clicked");
})
});



const butnEquals = document.querySelector('#equals');

let numArr = [];
//let operator;
let result = 0;
let prevValue = 0;

function calculate() {
    butnEquals.addEventListener('click', () => {
        let strng = display.innerText;
        numArr = strng.split(/(?<=[-+*\/])|(?=[-+*\/])/);
        console.log(numArr);
        try{
            while(numArr.length!=1){
            result = operate(numArr[1],parseFloat(numArr[0]),parseFloat(numArr[2]));
            numArr.splice(0,2);
            numArr[0] = result;
            display.innerText = numArr.join("");
            console.log("inside while");
            }
            display.innerText = result;
            console.log(result);
            //console.log(numArr);
            console.log(display);
        }catch(err){alert("error!!");}
    });
}

const butnClear = document.querySelector('#clean');
const butnDel = document.querySelector('#del');

butnDel.addEventListener('click', function(){
    display.innerText = display.innerText.slice(0,-1);
    //display.innerText;
    
})

function clearDisp() {
    displayValue =0;
    display.innerText = 0;
}

butnClear.addEventListener('click', function(){
    clearDisp();
    
})

calculate();
clearDisp();


//numbs.forEach(contents => {
 //   contents.addEventListener('click', (e) => {
        //displayUpdate(e);
 //   })
//})


//let displayUpdate = (e) => {
 //   displayValue += e.target.value;
 //   display.innerText = displayValue;
//};
