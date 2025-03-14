
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
export { news , newsload  , newses }