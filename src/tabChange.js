import Menu from "./menu";

export default function tabChange(el) {
    let about = document.querySelector('#about')
    let menu = document.querySelector('#menu')
    let contact = document.querySelector('#contact')
    let allCont = document.getElementsByClassName('container')

    if (el === 'one') {
        console.log(el)
        for (let i = 0; i < allCont.length; i++) {
            allCont[i].classList.add('hidden')
        }
        menu.classList.remove('hidden')
    } else if (el === 'two') {
        console.log(el)
        for (let i = 0; i < allCont.length; i++) {
            allCont[i].classList.add('hidden')
        }
        about.classList.remove('hidden')
    } else if (el === 'three') {
        console.log(el)
        for (let i = 0; i < allCont.length; i++) {
            allCont[i].classList.add('hidden')
        }
        contact.classList.remove('hidden')
    } else {
        console.log(el)
        for (let i = 0; i < allCont.length; i++) {
            allCont[i].classList.add('hidden')
        }
        menu.classList.remove('hidden')
    }

}