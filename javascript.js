

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

let firstNum = 0;
let operSign = '';
let secondNum =0;



const numbs = document.querySelectorAll('.numbs');

numbs.forEach(contents => {
    contents.addEventListener('click', (e) => {
        displayUpdate(e);
    })
})

let displayUpdate = (e) => {
    displayValue += e.target.id;
    display.innerText = displayValue;
};




const butnClear = document.querySelector('#clean');

function clearDisp() {
    displayValue =0;
    display.innerText = 0;
}

butnClear.addEventListener('click', function(){
    clearDisp();
    
})

