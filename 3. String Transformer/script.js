// Constatnt & Variables
const input = document.querySelector(".input-string")
const lowerCase = document.querySelector(".lower-case")
const upperCase = document.querySelector(".upper-case")
const camelCase = document.querySelector(".camel-case")
const pascalCase = document.querySelector(".pascal-case")
const snakeCase = document.querySelector(".snake-case")
const kebabCase = document.querySelector(".kebab-case")
const trim = document.querySelector(".trim")

// Logic
lowerCase.innerText = input.value.toLowerCase()
upperCase.innerText = input.value.toUpperCase()

camelCase.innerText = camelString(input.value)
pascalCase.innerText = pascalString(input.value)

snakeCase.innerText = input.value.toLowerCase().replaceAll(" ", "_")
kebabCase.innerText = input.value.toLowerCase().replaceAll(" ", "-")
trim.innerText = input.value.toLowerCase().replaceAll(" ", "")


input.addEventListener("input", (e) => {
    const inputValue = input.value

    lowerCase.innerText = inputValue.toLowerCase()
    upperCase.innerText = inputValue.toUpperCase()

    camelCase.innerText = camelString(inputValue)
    pascalCase.innerText = pascalString(inputValue)

    snakeCase.innerText = inputValue.toLowerCase().replaceAll(" ", "_")
    kebabCase.innerText = inputValue.toLowerCase().replaceAll(" ", "-")
    trim.innerText = inputValue.toLowerCase().replaceAll(" ", "")
})


function camelString(string) {
    const lowerCase = string.toLowerCase()
    const splitString = lowerCase.split(" ")
    const finalArray = splitString.map((str, i) => {
        if(i == 0) {
            return str
        }
        else {
            return capitalString(str)
        }
    })

    return finalArray.join("")
}

function pascalString(string) {
    const lowerCase = string.toLowerCase()
    const splitString = lowerCase.split(" ")
    const finalArray = splitString.map((str) => {
        return capitalString(str)
    })

    return finalArray.join("")
}

function capitalString(str) {
    if(!str) return str
    
    const firstCharacter = str[0].toUpperCase()
    const finalArray = firstCharacter + str.slice(1,str.length)
    return finalArray
}




// function camelValue(value) {
//     let smallValue = value.toLowerCase()

//     let splitValue = smallValue.split(" ")

//     let firstValue = splitValue[0]

//     let capitalFirstIndex = splitValue.map((value) => {
//         return value[0].toUpperCase() + value.slice(1,value.length)
//     }) 

//     let restValue = capitalFirstIndex.slice(1,capitalFirstIndex.length).join("")

//     return firstValue + restValue

// }

// function pascalValue(value) {
//     let smallValue = value.toLowerCase()

//     let splitValue = smallValue.split(" ")

//     let capitalFirstIndex = splitValue.map((value) => {
//         return value[0].toUpperCase() + value.slice(1,value.length)
//     })

//     let finalValue = capitalFirstIndex.join("")

//     return finalValue
// }
