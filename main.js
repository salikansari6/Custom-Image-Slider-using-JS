let slides=document.querySelectorAll('.slide')

let next=document.getElementById('next')
let prev=document.getElementById('prev')

function nextslide(){
    let current=document.querySelector('.current')
    current.classList.remove('current')
    if(current.nextElementSibling){

        current.nextElementSibling.classList.add('current')

    }
    else{
        slides[0].classList.add('current')
    }


}

function prevSlide(){
    let current=document.querySelector('.current')
    current.classList.remove('current')
    if(current.previousElementSibling){

        current.previousElementSibling.classList.add('current')

    }
    else{
        slides[slides.length-1].classList.add('current')
    }


}


next.addEventListener('click',nextslide)
prev.addEventListener('click',prevSlide)