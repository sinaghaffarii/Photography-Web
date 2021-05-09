window.onscroll = function () {
  myFunction()
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  var scrolled = (winScroll / height) * 100
  document.getElementById('myBar').style.width = scrolled + '%'
}

const nav = document.querySelector('.nav-link')
const burger = document.querySelector('.burger')
const links = nav.querySelectorAll('a')

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-open')
  burger.classList.toggle('toggle')
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    burger.classList.toggle('toggle')
  })
})
