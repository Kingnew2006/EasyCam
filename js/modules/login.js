
let loginfunc = () => {
const login = {
    visibality: document.querySelector('.header__main__verification__input__main--two--visibality'),
    inputvisibility: document.querySelector('.header__main__verification__input__main--two--input'),

    visibalityor() {
        
        this.visibality.addEventListener('click' , () => {
            this.visibality.classList.toggle('visibility-active')
            this.visibality.classList.toggle('visibility-unactive') 
            if ( this.inputvisibility.type === 'password' ) {
                this.inputvisibility.setAttribute('type' , 'text')
            } else {
                this.inputvisibility.setAttribute('type' , 'password')
            } 
        })
    }

}
login.visibalityor()  

const loginbutton = document.querySelector('.head__navigate__button')
const loginform = document.querySelector('.header__main__verification')
const loginexit = document.querySelector('.header__main__verification__title__exit')

loginexit.addEventListener('click' , () => {
    loginform.classList.toggle('header__main__verification--unactive')
})

loginbutton.addEventListener('click' , () => {
    loginform.classList.toggle('header__main__verification--active')
    loginform.classList.toggle('header__main__verification--unactive')
})

}
export  { loginfunc } 