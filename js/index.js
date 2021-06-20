const menuOpen = document.querySelector('.hamburger-icon')
const menuClose= document.querySelector ('.icon-close')
const body = document.querySelector ('.body')
const connectMenu= document.querySelector('.connect-menu')
const companyMenu = document.querySelector ('.company-menu')
const productMenu = document.querySelector ('.product-menu')
const productMenuMobile = document.querySelector ('.product-menu-mobile')
const companyMenuMobile = document.querySelector('.company-mobile-menu')
const connectMenuMobile = document.querySelector('.connect-menu-mobile')

//OPEN MOBILE MENU
menuOpen.addEventListener('click', ()=>{
  body.classList.add('menu-active')
})

//CLOSE MOBILE MENU 
menuClose.addEventListener('click', ()=>{
  body.classList.remove('menu-active')
})

//OPEN CONNECT MENU SUB-MENU IN DESKTOP 
connectMenu.addEventListener('click', ()=>{
  body.classList.toggle('connect-menu-active')
  body.classList.remove('company-menu-active') 
  body.classList.remove('product-menu-active') 
})

//OPEN COMPANY MENU SUB-MENU IN DESKTOP
companyMenu.addEventListener('click', ()=>{
  body.classList.toggle('company-menu-active')
  body.classList.remove('connect-menu-active')
  body.classList.remove('product-menu-active')
})

//OPEN PRODUCT MENU SUB-MENU IN DESKTOP
productMenu.addEventListener('click', ()=>{
  body.classList.toggle('product-menu-active')
  body.classList.remove('connect-menu-active')
  body.classList.remove('company-menu-active')
})

//OPEN PRODUCT MENU SUB-MENU IN MOBILE 
productMenuMobile.addEventListener('click', ()=>{
  body.classList.toggle('product-menu-mobile-active')
  body.classList.remove('connect-menu-mobile-active')
  body.classList.remove('company-menu-mobile-active')
})

//OPEN COMPANY MENU SUB-MENU IN MOBILE 
companyMenuMobile.addEventListener('click', ()=>{
  body.classList.toggle('company-menu-mobile-active')
   body.classList.remove('product-menu-mobile-active')
  body.classList.remove('connect-menu-mobile-active')
})

//OPEN CONNECT MENU SUB-MENU IN MOBILE 
connectMenuMobile.addEventListener('click', ()=>{
  body.classList.toggle('connect-menu-mobile-active')
  body.classList.remove('product-menu-mobile-active')
  body.classList.remove('company-menu-mobile-active')
})

    