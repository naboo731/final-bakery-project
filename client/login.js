const loginEmailInput = document.querySelector("#login-email-input")
const loginPasswordInput = document.querySelector("#login-password-input")
const loginBtn = document.querySelector(".loginbtn")


const errCallback= () =>{alert(' ❗️ There was an error in your request. Try again. ❗️')}


const userLogin = () => {
    console.log(loginEmailInput.value)
    console.log(loginPasswordInput.value)
    axios.post("http://localhost:5500/api/bakery/loginUser", {
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
     // if (firstName = ""){
        //     alert("❌ Please enter a first name to create an account")
        // }
        // else if (lastName = ""){
        //     alert("❌ Please enter a last name to create an account")
        // }
        // else if (email = ""){
        //     alert("❌ Please enter an email address to create an account")
        // }
        // else if (password = "" || password.length < 8){
        //     alert("❌ Please enter a valid password with a length of at least 8 characters to create an account")
        // }
    axios.post("http://localhost:5500/api/bakery/user", {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: createEmailInput.value,
        password: createPasswordInput.value
    })
    .then((res)=>{
        if(res.status === 200){
            alert("✅ Your user account has been created! ✅")
        } 
        else {
            alert("❌ Your user account cannot be created! ❌")
        }
    }).catch(errCallback)
}

loginBtn.addEventListener('click', userLogin)
signUpBtn.addEventListener('click', signUpUser)
