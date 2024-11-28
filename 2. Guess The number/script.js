// IIFE   : Immediate Invoke Function Expression 
//        : Vournablity ne fix karva IIFE no use thay
//        : Vournablity means koi variable ne direct console ma excess karvu te
// Syntax : (function() {
//          })()


(function() {
    // Constant & Variables
    const form = document.querySelector(".game-form")
    const input = document.querySelector(".input-number")
    const submitBtn = document.querySelector(".submit-btn")
    const resetBtn = document.querySelector(".reset-btn")
    const scoreClosness = document.querySelector(".score-closeness")
    const yourGueses = document.querySelector(".your-guess")

    let arr = []
    resetBtn.disabled = true

    // Logic
    let randomNumber = Math.round(Math.random() * (100-0) + 0)
    console.log(randomNumber);

    form.addEventListener("submit", (e) => {
        
        e.preventDefault()
        
        if(input.value != "") {
            arr.push(input.value)
            yourGueses.innerText = `Your gueses : ${arr.join(", ")}`
        }

        if(arr.length <= 10 && input.value != "") {
            if(input.value < randomNumber) {
                scoreClosness.innerText = "Too low!"
            }
            else if(input.value > randomNumber) {
                scoreClosness.innerText ="Too high!"
            }
            else {
                scoreClosness.innerText = "You got it! Congrates"
                input.disabled = true
                submitBtn.disabled = true
                resetBtn.disabled = false
            }
        }

        if(arr.length === 10 && randomNumber != input.value) {
            scoreClosness.innerText = "You Loss!"
            input.disabled = true
            submitBtn.disabled = true
            resetBtn.disabled = false
        }

        input.value = ""

        console.log(arr);
    })


    resetBtn.addEventListener("click", () => {
        input.disabled = false
        submitBtn.disabled = false
        resetBtn.disabled = true

        scoreClosness.innerText = ""
        yourGueses.innerText = ""
        arr = []

        randomNumber = Math.round(Math.random() * (100-0) + 0)
        console.log(randomNumber);
    })

})()
