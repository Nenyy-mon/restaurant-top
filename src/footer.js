import bgNav from './bgNav.jpg'



function Footer() {
    let foot = document.getElementById('footer')
    foot.style.backgroundImage = `url(${bgNav})`

    foot.innerHTML = 'All content done by' + ' '
    let aTag = document.createElement('a')
    aTag.setAttribute('href', "https://www.instagram.com/jasamsone/")
    aTag.setAttribute('target', 'blank')
    aTag.setAttribute('id', 'atag')
    aTag.innerHTML = 'jasamsone'
    foot.appendChild(aTag)
}

export default Footer