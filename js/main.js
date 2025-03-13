import * as sliddermain from './modules/slidder.js' 
import * as login from './modules/login.js'
import * as clones from './modules/clones.js' 
import * as newss from './modules/news.js'
import * as Validation from './modules/FormValidation.js' 

// slidder
sliddermain.slidder.nextpic() 
sliddermain.slidder.pervpic() 
// login window 
login.loginfunc()
// cloneing some elements
clones.page__ready.cloneing() 
// fetch news from database
newss.news().then(()=> {newss.newsload()})  
// formValidation and input checks 
Validation.FormValidation()




 