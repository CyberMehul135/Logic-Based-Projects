// Constants & Variables 
const input = document.querySelector(".telephone-number-input")


// Logic 
input.addEventListener("input", (e) => {    
    const inputValue = input.value

    // Reg-Ex : input ma khali numeric value jaay te mate & string value nahi jaay te mate.
    if(/\d+$/g.test(inputValue)) {
        input.value = inputValue
    }
    else {
        input.value = inputValue.substring(0,inputValue.length - 1)
    }

    // Main Logic 
    if(inputValue.length == 4) {
        input.value = `+(${inputValue.slice(0,3)}) - ${inputValue.slice(3, inputValue.length)}`
    }

    if(inputValue.length == 9) {
        input.value = inputValue.slice(2,5)
    }
})