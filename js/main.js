const lines = document.querySelector('.header__main__comp__buttons__lines')
const arrline = Array.from(lines.children) 
const slidder = {
    perv: document.querySelector('.header__main__comp__buttons--perv'),
    next: document.querySelector('.header__main__comp__buttons--next'),
    sliddermain: document.querySelector('.header__main__comp--active')  ,
    
    

    slidderindex: 0,

    src: ['./img/main/IMG.png' , './img/main/iPhones Mockup (Space Gray) 1.png' , './img/main/5 1.png'] ,

    update() {
        this.sliddermain.setAttribute('src' , `${this.src[this.slidderindex]}` ) ,
        arrline.forEach((line , i) => { 
              if ( i === this.slidderindex ) {
                line.classList = 'header__main__comp__buttons__lines--active'
              } else if ( i !== this.slidderindex) {
                line.classList = 'header__main__comp__buttons__lines--deactive'
              }
        })  
     v

    } , 

    nextpic() {
        this.next.addEventListener('click' , () => { 
            this.slidderindex = (this.slidderindex + 1) % 3;
            this.update();
            
        })
    } ,

    pervpic() {
        this.perv.addEventListener('click' , () => { 
            this.slidderindex = (this.slidderindex - 1 + 3) % 3;
            this.update();
           
        })
    }

}
slidder.nextpic() 
slidder.pervpic()
console.log( )


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



 
