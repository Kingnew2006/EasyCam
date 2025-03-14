//spinner on video page

 

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


// create elements 

let videoele = (title , url) => {
    let videopage = document.querySelector('.videopage__main')
    let videomain = document.createElement('div') 
    videomain.classList.add('videopage__main__video') 
    videopage.append(videomain)
    let videotitle = document.createElement('div') 
    videotitle.classList.add('videopage__main__video__title') 
    videotitle.innerHTML = `${title}` 
    videomain.append(videotitle) 
    let videoplayer = document.createElement('video') 
    videoplayer.setAttribute('src' , `${url}`) 
    videoplayer.controls = true
    videoplayer.classList.add('videopage__main__video__player') 
    videomain.append(videoplayer)

}

// fetch videos 

let videofetch = async () => {
    await fetch(`https://easycam-production.up.railway.app/videos`) 
        .then(data => data.json()) 
        .then(data => data.forEach(element => {
            let { title , url } = element 
            videoele(title,url)
        })) 
        .catch(e => console.log(e))
         
} 

videofetch() 