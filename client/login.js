const loginEmailInput = document.querySelector("#login-email-input")
const loginPasswordInput = document.querySelector("#login-password-input")
const loginBtn = document.querySelector(".loginbtn")

let loggedInUser = ''

const errCallback= () =>{alert(' ❗️ There was an error in your request. Try again. ❗️')}


const userLogin = () => {
    axios.post("http://localhost:5500/api/bakery/loginUser", {
            email: loginEmailInput.value,
            password: loginPasswordInput.value
        })
    .then(()=>{
        loggedInUser = loginEmailInput.value
        alert("✅ You have been logged in! ✅")

        loginEmailInput.value = ""
        loginPasswordInput.value = ""

        const loginHeaderBtn = document.querySelector("#login-user-btn")
        loginHeaderBtn.classList.replace("fa-user", "fa-user-slash") 

        // const iconText = document.querySelector(".login-icon-text")
        const deleteHeaderBtn = document.querySelector(".fa-user-slash")
        deleteHeaderBtn.addEventListener('click', () => {
            console.log(loggedInUser)
            axios.delete("/api/bakery/user", {
                email: loggedInUser
            })
        .then(()=> {
            alert("✅ Your account has been deleted.")
    
            userWarning.classList.replace("fa-user-slash", "fa-user")
        })
            
        }).catch(errCallback)

    }).catch(errCallback)
}

console.log('logedin user: ',loggedInUser)
//////////////////////////

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
        console.log(res.status)
        if(res.status === 200){
            alert("✅ Your user account has been created! ✅")
        } 
        else {
            alert("❌ Your user account cannot be created! ❌")
        }

        firstNameInput.value = ''
        lastNameInput.value = ""
        createEmailInput.value = ""
        createPasswordInput.value = ""

    }).catch(errCallback)
}

loginBtn.addEventListener('click', userLogin)
signUpBtn.addEventListener('click', signUpUser)

//////////////////////
