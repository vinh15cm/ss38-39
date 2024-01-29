let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let num1 = 0;
let num2 = 0;
let num3 = 0;
let time = setInterval(timeout, 0.5);
function timeout() {
    num1++;
    num2++;
    num3++;
    number1.innerText = num1;
    number2.innerText = num2;
    number3.innerText = num3;
    if (num1 >= 12001 && num2 >= 5001 && num3 >= 7501) {
        clearInterval(time);
    }
}