const minusBtn = document.querySelector(".minus-button")
const plusBtn = document.querySelector(".plus-button")
const displayCounter = document.querySelector(".display-counter")
const input = document.querySelector("#input")
const resetBtn = document.querySelector(".reset-btn")


// Logic
plusBtn.addEventListener("click", () => {
    let inputValue = parseInt(input.value)
    let displayCounterValue = parseInt(displayCounter.innerText)

    displayCounter.innerText = displayCounterValue + inputValue
})

minusBtn.addEventListener("click", () => {
    let inputValue = parseInt(input.value)
    let displayCounterValue = parseInt(displayCounter.innerText)

    displayCounter.innerText = displayCounterValue - inputValue
})

resetBtn.addEventListener("click", () => {
    displayCounter.innerText = 0
})




