let CelciusInput = document.querySelector('#Celcius > input')
let FahrenheitInput = document.querySelector('#Fahrenheit > input')
let KelvinInput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function rounderNumber(number){
    return Math.round(number*100)/100

}

CelciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(CelciusInput.value)
    let fTemp = (cTemp*(9/5))+32
    let kTemp = cTemp + 273.15

    FahrenheitInput.value = rounderNumber(fTemp)
    KelvinInput.value = rounderNumber(kTemp)
})

FahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    CelciusInput.value = rounderNumber(cTemp)
    KelvinInput.value = rounderNumber(kTemp)
})

KelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(KelvinInput.value)
    let cTemp = kTemp - 273.15 
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    CelciusInput.value = rounderNumber(cTemp)
    FahrenheitInput.value = rounderNumber(fTemp)
})


btn.addEventListener('click', ()=>{
    CelciusInput.value = ""
    FahrenheitInput.value = ""
    KelvinInput.value = ""
})
