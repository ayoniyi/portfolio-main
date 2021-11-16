const card = document.querySelector('.card')
const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')
const container4 = document.querySelector('.container4')
//Items
//
const title = document.querySelector('.title')
const title2 = document.querySelector('.container2 h1')
const title3 = document.querySelector('.container3 h1')
const title4 = document.querySelector('.container4 h1')
//
const phone = document.querySelector('.phone iframe')
const phone2 = document.querySelector('.phone2 iframe')
const phone3 = document.querySelector('.phone3 iframe')
const phone4 = document.querySelector('.phone4 iframe')
//
const cta = document.querySelector('.cta')
const cta2 = document.querySelector('.cta2')
const cta3 = document.querySelector('.cta3')
const cta4 = document.querySelector('.cta4')

//Animate In Card 1
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none'
  //Popout
  //title.style.transform = 'translateZ(150px)'
  phone.style.transform = 'translateZ(200px)  rotateZ(5deg)' //rotateZ(-45deg)
  cta.style.transform = 'translateZ(175px)'
})
//Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  //Popback
  title.style.transform = 'translateZ(0px)'
  phone.style.transform = 'translateZ(0px) rotateZ(0deg)'
  cta.style.transform = 'translateZ(0px)'
})

//Animate In Card 2
container2.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none'
  //Popout
  //title2.style.transform = 'translateZ(150px)'
  phone2.style.transform = 'translateZ(200px)  rotateZ(-5deg)' //rotateZ(-45deg)
  cta2.style.transform = 'translateZ(175px)'
})
//Animate Out
container2.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  //Popback
  //title2.style.transform = 'translateZ(0px)'
  phone2.style.transform = 'translateZ(0px) rotateZ(0deg)'
  cta2.style.transform = 'translateZ(0px)'
})

//Animate In Card 3
container3.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none'
  //Popout
  //title2.style.transform = 'translateZ(150px)'
  phone3.style.transform = 'translateZ(200px)  rotateZ(-5deg)' //rotateZ(-45deg)
  cta3.style.transform = 'translateZ(175px)'
})
//Animate Out
container3.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  //Popback
  //title2.style.transform = 'translateZ(0px)'
  phone3.style.transform = 'translateZ(0px) rotateZ(0deg)'
  cta3.style.transform = 'translateZ(0px)'
})

//Animate In Card 4
container4.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none'
  //Popout
  //title2.style.transform = 'translateZ(150px)'
  phone4.style.transform = 'translateZ(200px)  rotateZ(5deg)' //rotateZ(-45deg)
  cta4.style.transform = 'translateZ(175px)'
})
//Animate Out
container4.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  //Popback
  //title2.style.transform = 'translateZ(0px)'
  phone4.style.transform = 'translateZ(0px) rotateZ(0deg)'
  cta4.style.transform = 'translateZ(0px)'
})
