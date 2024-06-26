let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light')
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for(var i = 0; themeDots.length > i; i++ ){
    themeDots[i].addEventListener("click",  function(){
        let mode = this.dataset.mode;
        console.log("Option clicked: ", mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == "light"){
        document.getElementById('theme-style').href = "styles/portfolio.css"
    }

    if(mode == "blue"){
        document.getElementById('theme-style').href = "/styles/blue.css"
    }

    if(mode == "green"){
        document.getElementById('theme-style').href = "/styles/green.css"
    }

    if(mode == "purple"){
        document.getElementById("theme-style").href = "/styles/purple.css"
    }

    localStorage.setItem('theme', mode);
} 

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwG9vCMBREFM4suhSiTdVPFu7-F-6JclKyZGGuKjFS-dqaZT6kKXS6r_15kub3YH2R5yw/exec'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
        alert('Success!', response)
        submitButton.disabled = false
        })
    .catch(error => {
    alert('Error!', error.message)
        submitButton.disabled = false
    }
    )
})
