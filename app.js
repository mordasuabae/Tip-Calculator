//elements
var input = document.querySelector('input')
var input2 = document.querySelector('.input2')
var button = document.querySelector('.button')
var text = document.querySelector('.text')
var num = document.querySelector('.num')
var select = document.querySelector('.select')

button.addEventListener('click',click)
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // displayTotal(inputValue)
        tip()
        // Cancel the default action, if needed
        event.preventDefault();
        
    }
});

function click(params) {
    console.log('add tip function')
    tip()
}

function tip() {
    var value = select.value
    .replace('%','')
    var r = value.split(' ')

    var inputValue = Number(input.value)
    // var inputValue = toString(input.value)
    var percent = Number(r[0])
    // var percent = toString(r[0])
    var people = Number(input2.value)
    var share
    if(input2.value === ''){
        console.log('people are not sharing the bill')
    }else{
        console.log('people are sharing the bill')
        console.log(input2.value)
        share = true
    }
    
    if(percent === 5){
        var tip = percent * inputValue 
        var fin = tip / 100
        if(share){
            var shared = shareTip(fin,people)
            console.log(shared)
            
            return displayTotal(shared + ' ' + 'each')
        }else{
            
            displayTotal(fin)
        }


    }else {
        // console.log("percent", percent)
        // console.log("inputvalue", inputValue)
        var tip = percent * inputValue
        var fin2 = tip / 100
        if(share){
            var shared = shareTip(fin2,people)
            console.log(shared)
            
            return displayTotal(shared + ' ' + 'each')
        }else{

            displayTotal(fin2)
        }

    }

}

function shareTip(tip,numberofpeople) {
    if(numberofpeople){
        var split =  tip / numberofpeople
        return split
    }
}

function displayTotal(val) {
    text.innerHTML = '<b>' + 'Total Amount' + '</b>' + '<br>' + '$' + `${val}`
    // num.innerHTML = 
}
