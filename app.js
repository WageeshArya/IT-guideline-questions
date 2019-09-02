let sel = document.querySelector('select');

document.querySelector('button').addEventListener('click',(e) => {
    if(sel.value === "0" ){
        alert('Please choose an option before submitting');
    }
    else if(sel.value === "1"){
        tables();
    }
    else if(sel.value === "2"){
        largest();
    }
    else if(sel.value === "3"){
        factorial();
    }
    else if(sel.value === "4"){
        sumAvg();
    }
    else if(sel.value === "5"){
        acBal();
    }
    else{   
        count();
    }
    e.preventDefault();
});

function tables() {
    for(let i=5; i<=15; i++){
        for(let j=1; j<=10; j++){
            document.write(`${i} * ${j} = ${i*j} Square = ${Math.pow((i*j),2)}, Cube = ${Math.pow((i*j),2)}`);
            document.write("<br>");
        }
        document.write("<br>");
    }
};

//LARGEST OF THREE NUMBERS

function largest() {
    let form = document.createElement('form');
    let n1 = document.createElement('input'); 
    let n2 = document.createElement('input');
    let n3 = document.createElement('input');
    let btn = document.createElement('button');
    
    n1.setAttribute('type','number');
    n2.setAttribute('type','number');
    n3.setAttribute('type','number');
    btn.setAttribute('type','submit');
    btn.innerHTML = 'Find largest';

    document.body.appendChild(form);
    form.appendChild(n1);
    form.appendChild(n2);
    form.appendChild(n3);
    form.appendChild(btn);

    form.addEventListener('submit', e => {

        let num1 = parseInt(n1.value);
        let num2 = parseInt(n2.value);
        let num3 = parseInt(n3.value);
        console.log(`${n1.value} , ${n2.value} , ${n3.value}`);
        console.log( typeof num1);
        if(num1>num2 && num1>num3){
            result = document.createElement('div');
            result.innerHTML = `The greatest is: ${num1}`;
            document.querySelector('.container').appendChild(result);
        }
        else if(num2>num1 && num2>num3){
            result = document.createElement('div');
            result.innerHTML = `The greatest is: ${num2}`;
            document.querySelector('.container').appendChild(result);
        }
        else if(num3>num2 && num3>num1){
            result = document.createElement('div');
            result.innerHTML = `The greatest is: ${num3}`;
            document.querySelector('.container').appendChild(result);
        }

        else if(num1 === num2 && num1 === num3){
            result = document.createElement('div');
            result.innerHTML = `All numbers enterd are equal.`;
            document.querySelector('.container').appendChild(result);
        }
        btn.disabled = 'true';
        e.preventDefault();
    });
};

// FACTORIAL

function factorial(){
    
    let factorialNumber = document.createElement('input');
    factorialNumber.setAttribute('type','number');
    factorialNumber.style.display = 'block';

    let btn = document.createElement('button');
    btn.innerText = "Find Factorial";

    let container = document.querySelector('.container');
    container.appendChild(factorialNumber);
    container.appendChild(btn);
    
    btn.addEventListener('click',(e) => {
        
        let fact = parseInt(factorialNumber.value); 
        
        temp = 1;
        for(let i=1;i<=fact;i++){
            temp *= i;
        }

        result = document.createElement('div');
        result.innerHTML = `The factorial is: ${temp}`;
        container.appendChild(result);
    });
}

// SUM AND AVERAGE OF LIST OF NUMBERS

function sumAvg(){
    let list  = document.createElement('input');
    list.setAttribute('type','number');
    list.setAttribute('placeholder','Enter a number');
    
    let btn = document.createElement('button');
    btn.setAttribute('type','submit');
    btn.innerHTML = 'Add to List';

    let form = document.createElement('form');
    form.appendChild(list);
    form.appendChild(btn);

    document.querySelector('.container').appendChild(form);
    let array = [];
    let count = 0;
    form.addEventListener('submit', e => {
        if( parseInt(list.value) !== 0 && list.value !==''){
            array.push(parseInt(list.value));
            list.value = '';
            console.log(array);
            e.preventDefault();
        }
        else{
            let sum=0;
            let avg;
            for(let i=0;i<array.length;i++){
                sum+=array[i];
            }
            avg = sum/array.length;

            console.log(`Sum = ${sum}, average = ${avg}`);

            result = document.createElement('div');
            result.innerHTML = `The sum is: ${sum} and the average is: ${avg}`;
            document.querySelector('.container').appendChild(result);

            btn.disabled = 'true';
        }
        e.preventDefault();
    })
}

function acBal(){
    let form = document.createElement('form');
    let years = document.createElement('input');
    let btn = document.createElement('button');

    let acbal = 1000;  //initial amount
    let temp = acbal;

    years.setAttribute('placeholder','Number of years');
    btn.setAttribute('type','submit');
    btn.innerHTML ='Calculate';

    document.querySelector('.container').appendChild(form);
    form.appendChild(years);
    form.appendChild(btn);

    form.addEventListener('submit', (e) => {
        
        for(let i=1;i<parseInt(years.value);i++){
            temp += temp*0.05;
            console.log(acbal);
        }
        e.preventDefault();
        result = document.createElement('div');
        result.innerHTML = `Total interest is ${temp - acbal} and current account balance is ${temp}`;
        document.querySelector('.container').appendChild(result);
    })
}

function count(){
    let list  = document.createElement('input');
    list.setAttribute('type','number');
    list.setAttribute('placeholder','Enter a number');
    
    let btn = document.createElement('button');
    btn.setAttribute('type','submit');
    btn.innerHTML = 'Add to List';

    let calc = document.createElement('button');
    calc.style.backgroundColor = 'green';
    calc.innerHTML = 'Calculate';

    let form = document.createElement('form');
    form.appendChild(list);
    form.appendChild(btn);
    form.appendChild(calc);

    document.querySelector('.container').appendChild(form);

    let array = [];

    let poscount = 0;
    let negcount = 0;
    let zerocount = 0;
    
    form.addEventListener('submit', e => {
        array.push(parseInt(list.value));
        console.log(array);
        list.value = '';
        e.preventDefault();
    })

    calc.addEventListener('click', e => {
        for(let i=0;i<array.length;i++){
            if(array[i]>0)  ++poscount;
            else if(array[i]<0) ++negcount;
            else    ++zerocount;
        }

        btn.disabled = 'true';
        
        result = document.createElement('div');
        result.innerHTML = `Positive numbers: ${poscount} , negative numbers: ${negcount}, and zeroes: ${zerocount}`;

        document.querySelector('.container').appendChild(result);
        
        e.preventDefault();
    })
}
