let FormValidation = () => {
let users = async (Name,pass) => { 
    try {
    let SiteUsers = await fetch('https://easycam-production.up.railway.app/users')  
    let res = await SiteUsers.json() 
     
    return res.some(user => user.username === Name && user.password === pass ) ? 'ouruser'   
    : res.some(user => user.username === Name && user.password != pass ) ? 'same' 
    : false 
    }   catch (error) {
        console.error("Ошибка при проверке пользователей:", error);
        return false;
    }
    
}

const loginbutton = document.querySelector('.head__navigate__button')
let formm = document.querySelector('.form') 
formm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(formm); 
    const data = Object.fromEntries(formData.entries()); // Преобразуем FormData в объект
    let {user , password } = data
    let valid = await users(`${user.replace(/\s/g, '')}`,`${password.replace(/\s/g, '')}`) 
    console.log(valid)
    if (valid === false && inputs.passinputmain.classList.contains('notinvalid') === false && inputs.userinput.value.trim().length > 5) { 
            const response = await fetch('https://easycam-production.up.railway.app/form', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
        }

    ) 
        loginbutton.click() 
        loginbutton.textContent = `${user.replace(/\s/g, '')}` 
    
    
    const result = await response.json();
     console.log("Ответ сервера:", result);
    ;
    } else if (valid == 'ouruser')  {
          
            loginbutton.click() 
            loginbutton.textContent = `${user.replace(/\s/g, '')}` 
        
    
    } else if (valid === 'same') {
         inputs.invalid.textContent = 'Имя пользователя занят'
    }
}); 


let inputs = {
  userinputmain: document.querySelector('.header__main__verification__input__main--one'),
  passinputmain: document.querySelector('.header__main__verification__input__main--two'),
  userinput: document.querySelector('.header__main__verification__input__main--one--input'),
  passinput: document.querySelector('.header__main__verification__input__main--two--input'),
  invalid: document.querySelector('.header__main__verification__input__invalid--area')
}


let inputnotvalid = (obj) => {
    if (obj === 'user') {
        inputs.userinputmain.classList.add('notinvalid')
    } else if (obj === 'pass') {
        inputs.passinputmain.classList.add('notinvalid')
    } 
} 

inputs.passinput.addEventListener('input' , (e) => {
    
    if (inputs.passinput.value.length < 8) {
        inputnotvalid('pass')
        inputs.invalid.textContent = 'Пароль должен иметь минимум 8 символов'
    } else if (inputs.passinput.value.length >= 8) {
        inputs.passinputmain.classList.remove('notinvalid') 
        inputs.invalid.textContent = ''
    } else if (inputs.passinput.value.length > 20) {
        inputnotvalid('pass')
        inputs.invalid.textContent = 'Пароль должен иметь максимум 20 символов'
    }
}) 
} 

export {FormValidation}