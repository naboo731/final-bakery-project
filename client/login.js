const loginEmailInput = document.querySelector("#login-email-input")
const loginPasswordInput = document.querySelector("#login-password-input")
const loginBtn = document.querySelector(".login-btn")

const errCallback= () =>{alert('There was an error in your request. Try again.')}

const userLogin = () => {
    axios.get("http://localhost:5500/api/bakery/user", {
        email: loginEmailInput.value,
        password: loginPasswordInput.value
    })
    .then(()=>{
        alert("You have been logged in!")
    }).catch(errCallback)
}


const firstNameInput = document.querySelector("#first-name-input")
const lastNameInput = document.querySelector("#last-name-input")
const createEmailInput = document.querySelector("#create-email-input")
const createPasswordInput = document.querySelector("#create-password-input")
const signUpBtn = document.querySelector("#sign-up-btn")

const signUpUser = () => {
    axios.post("http://localhost:5500/api/bakery/user", {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: createEmailInput.value,
        password: createPasswordInput.value
    })
    .then(()=>{alert("Your user account has been created!")}).catch(errCallback)
}

loginBtn.addEventListener('click', userLogin)
signUpBtn.addEventListener('click', signUpUser)