const header = document.getElementById('header')
const title= document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img ')
const name1 = document.getElementById('name1')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)



function getData() {
    header.innerHTML = '<img src="book.jpg" alt="">'
    title.innerHTML = 'Lorem, ipsum dolor sit amet consectetur.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, non exercitationem delectus expedita.'
    profile_img.innerHTML = '<img src="img78.jpg" alt="">'

    name1.innerHTML = 'punamrajbanc'
    date.innerHTML = 'June20,2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
    
   
   
}