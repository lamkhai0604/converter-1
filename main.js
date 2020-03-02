const currency = prompt("select your currency")
let amount = prompt("enter your number") ; // should accept number only
let rate = 23000;
//vnd to USD

function vndtoUSD () {
    let result = amount / rate ;
    console.log("Vnd to Usd is", result)
}

function usdtoVnd () {
    let result = amount * rate;
    console.log("usd to vnd is", result)
}

if (currency == "vnd"){
    vndtoUSD()
} else if (currency == "usd" ) {
    usdtoVnd()
} else if (amount<0){
    alert ("Please input your number")
} else {
    console.log("please enter a correct currency")
}








