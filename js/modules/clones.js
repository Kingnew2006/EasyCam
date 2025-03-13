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


export {page__ready}

