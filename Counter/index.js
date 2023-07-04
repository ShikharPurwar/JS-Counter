let num = document.getElementById("num1");
// console.log(num)
let reset = () =>{
    
    num.innerHTML = "0";
}

let decre = () =>{
    
    let num1= Number(num.innerHTML)
    
    num.innerHTML = num1 - 1;
   
    
}

let incre = () =>{
    
    let num1= Number(num.innerHTML)
    
    num.innerHTML = num1 + 1;
    
    
}

document.getElementById("a2").addEventListener('click', reset);
document.getElementById("a1").addEventListener('click', decre);
document.getElementById("a3").addEventListener('click', incre);