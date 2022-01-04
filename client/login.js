const loginEmailInput = document.querySelector("#login-email-input")
const loginPasswordInput = document.querySelector("#login-password-input")
const loginBtn = document.querySelector(".loginbtn")


const errCallback= () =>{alert(' ❗️ There was an error in your request. Try again. ❗️')}

const userLogin = () => {
    console.log(loginEmailInput.value)
    console.log(loginPasswordInput.value)
    axios.get("http://localhost:5500/api/bakery/user", {
        email: loginEmailInput.value,
        password: loginPasswordInput.value
    })
    .then(()=>{
        alert("✅ You have been logged in! ✅")
        // const loginHeaderBtn = document.querySelector("#login-user-btn")
        // loginHeaderBtn.classList.replace("fa-user", "fa-user-slash") 
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
    .then((res)=>{
        if(res.status === 200){
            alert("✅ Your user account has been created! ✅")
        } else {
            alert("❌ Your user account cannot be created! ❌")
        }
    }).catch(errCallback)
}

loginBtn.addEventListener('click', userLogin)
signUpBtn.addEventListener('click', signUpUser)
