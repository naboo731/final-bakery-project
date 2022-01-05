const loginEmailInput = document.querySelector("#login-email-input")
const loginPasswordInput = document.querySelector("#login-password-input")
const loginBtn = document.querySelector(".loginbtn")
const rightHeader = document.querySelector(".right-header")

let loggedInUser = {
    user: ''
}

const errCallback= () =>{alert(' ❗️ There was an error in your request. Please try again. ❗️')}


const userLogin = () => {
    axios.post("http://localhost:5500/api/bakery/loginUser", {
            email: loginEmailInput.value,
            password: loginPasswordInput.value
        })
    .then(()=>{
        loggedInUser.user = loginEmailInput.value
       alert("✅ You have been logged in! ✅")

       loginEmailInput.value = ""
       loginPasswordInput.value = ""

       let deleteUser = document.createElement("div")
       deleteUser.classList.add('delete-user-div')
       deleteUser.innerHTML = `<button id="delete-user-btn" class="fas fa-user-slash" style="font-size:36px;color:#5b6e74"></button>
       <span class="login-icon-text">Delete Account</span>`
       rightHeader.appendChild(deleteUser)

       const deleteUserBtn = document.querySelector("#delete-user-btn")
       deleteUserBtn.addEventListener("click", () => {
           axios.delete(`http://localhost:5500/api/bakery/user/${loggedInUser.user}`).then(()=>{
               alert("✅ Your account has been deleted.")

               deleteUserBtn.parentElement.remove()

           }).catch((err)=> alert('Error deleting user'))
       })

       
    }).catch((err)=>alert('Error logging user in.'))
}

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

    }).catch((err)=> alert('Error creating user account.'))
}

loginBtn.addEventListener('click', userLogin)
signUpBtn.addEventListener('click', signUpUser)


