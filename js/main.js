 

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

const MainForm = document.querySelector('.header__main__verification__input')
MainForm.elements[0].value = 'User1'
MainForm.elements[1].value = '123456789'
console.log(MainForm.elements[0].value)  
let readycard = document.querySelector('.main__readymade__main__card')
let page__ready = {

clonecard: readycard.cloneNode(true) , 
clonecard_2: readycard.cloneNode(true) ,
textnew() {
this.clonecard.childNodes[3].textContent = 'Для бизнеса' 
this.clonecard_2.childNodes[3].textContent = 'Для улицы' 
},
cards__main: document.querySelector('.main__readymade__main') ,
cloneing() {
    this.textnew()
     this.cards__main.append(this.clonecard) 
     this.cards__main.append(this.clonecard_2)  
   
    
}
}
page__ready.cloneing() 

let newses = []
let newsboard = document.querySelector('.main__news__board')
let news = async () => {
    let res = await fetch('https://easycam-production.up.railway.app/news') 
    let data = await res.json()
    newses = data  



}  
let newsload = async () => {
  newses.forEach((key) => {
     let {title , news__dater , description } = key 
         let newscard = document.createElement('div')  
         newscard.classList.add('main__news__board__card')

        let newstitle = document.createElement('div') 
         newstitle.classList.add('main__news__board__card__title' ) 
        newstitle.textContent = `${title}` 
        newscard.append(newstitle) 

        let twomain = document.createElement('div')
        twomain.classList.add('main__news__board__card__twomain')
        newscard.append(twomain)

        let newsdata = document.createElement('div')
        newsdata.classList.add('main__news__board__card__twomain__date')
        newsdata.textContent = `${news__dater.split("T")[0]}`
        twomain.append(newsdata) 

        let descriptions = document.createElement('div') 
        descriptions.classList.add('main__news__board__card__twomain__description') 
        descriptions.textContent = `${description}`
        twomain.append(descriptions)
        

        newsboard.append(newscard)  

  }) 
}

news().then(()=> {console.log(newses) , newsload()  })
 
 
   
let spiner = document.querySelector('.spiner__main')
let wel = document.querySelector('.welcome')
window.onload = (e) => {
    setTimeout(() => {
        spiner.classList.add('out')
        
    }, 500)
    setTimeout(() => {
        spiner.classList.add('off')
        
    }, 1000)
    setTimeout(() => {
        spiner.classList = 'none'
    }, 1000)

}    

let users = async (Name) => {
    let SiteUsers = await fetch('https://easycam-production.up.railway.app/users')  
    let res = await SiteUsers.json() 

    res.forEach(user => {
        if (user.username === Name) {
            return false 
        } else 
        return true 

        
    })
    
} 
 

 


let formm = document.querySelector('.form') 
formm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(formm); 
    const data = Object.fromEntries(formData.entries()); // Преобразуем FormData в объект
    console.log(data); 
    let valid = await users(data.user) 
    console.log(valid)
    if (valid === true) {
            const response = await fetch('https://easycam-production.up.railway.app/form', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
        }
    
    )
      
     console.log("Ответ сервера:", result);
    ;
    } else {
        console.log('you are logined')
    }

   
});
