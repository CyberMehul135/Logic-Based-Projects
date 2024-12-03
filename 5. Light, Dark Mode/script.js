const darkModeBtn = document.querySelector("#bg-color")
const darkModeBtnContainer = document.querySelector("#container-bg-color")

const navBar = document.querySelector(".nav-container")
const body = document.querySelector("body")
const containerH2 = document.querySelector(".container-h2")

// Data Fetching 
const fullDarkMode = JSON.parse(localStorage.getItem("fullDarkMode"))
const containerDarkMode = JSON.parse(localStorage.getItem("containerDarkMode"))

// Data Showing
if(fullDarkMode) {
    navBar.classList.add("dark-mode-nav")
    body.classList.add("dark-mode")
    darkModeBtn.checked = true
} else {
    navBar.classList.remove("dark-mode-nav")
    body.classList.remove("dark-mode")
}

if(containerDarkMode) {
    containerH2.classList.add("dark-mode")
    darkModeBtnContainer.checked = true
} else {
    containerH2.classList.remove("dark-mode")
}

// Logic
darkModeBtn.addEventListener("change", () => {
    if(darkModeBtn.checked) {
        navBar.classList.add("dark-mode-nav")
        body.classList.add("dark-mode")
        localStorage.setItem("fullDarkMode", true)   // Data Storage
    }
    else {
        navBar.classList.remove("dark-mode-nav")
        body.classList.remove("dark-mode")
        localStorage.setItem("fullDarkMode", false)  // Data Storage
    }
})


darkModeBtnContainer.addEventListener("change", () => {
    if(darkModeBtnContainer.checked) {
        containerH2.classList.add("dark-mode")
        localStorage.setItem("containerDarkMode", true)  // Data Storage
    }
    else {
        containerH2.classList.remove("dark-mode")
        localStorage.setItem("containerDarkMode", false)  // Data Storage
    }
})
