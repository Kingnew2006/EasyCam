
// slidder code

export const lines = document.querySelector('.header__main__comp__buttons__lines')
export const slidder = {
    
    arrline : Array.from(lines.children) ,
    perv: document.querySelector('.header__main__comp__buttons--perv'),
    next: document.querySelector('.header__main__comp__buttons--next'),
    sliddermain: document.querySelector('.header__main__comp--active')  ,
    
    

    slidderindex: 0,

    src: ['./img/main/IMG.png' , './img/main/iPhones Mockup (Space Gray) 1.png' , './img/main/5 1.png'] ,

    update() {
        this.sliddermain.setAttribute('src' , `${this.src[this.slidderindex]}` ) ,
        this.arrline.forEach((line , i) => { 
              if ( i === this.slidderindex ) {
                line.classList = 'header__main__comp__buttons__lines--active'
              } else if ( i !== this.slidderindex) {
                line.classList = 'header__main__comp__buttons__lines--deactive'
              }
        })  
      
    } , 

    picchange(direction) {
        this.slidderindex = (this.slidderindex + direction + this.src.length) % this.src.length;
        this.update();
    },

    nextpic() {
        this.next.addEventListener('click' , () => this.picchange(1))
    } ,

    pervpic() {
        this.perv.addEventListener('click' , () => this.picchange(-1))
    }

} 

// spinner code 

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