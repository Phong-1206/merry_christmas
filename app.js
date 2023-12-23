var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')
var content_text =document.querySelector('.content-text')
boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    // boxContent.classList.add('active')
}

content.onclick = function(){
    boxContent.classList.add('active')
}
content_text.onclick = function(){
    boxContent.classList.remove('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}