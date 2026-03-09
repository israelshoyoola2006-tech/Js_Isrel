// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})


// simple form alert

document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault()

alert("Message sent successfully!")

})