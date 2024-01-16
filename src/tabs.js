import tabChange from "./tabChange";
import bgNav from './bgNav.jpg'

let tabActive;

const tabs = () => {

    const divBut = document.createElement('div');
    divBut.classList.add('mainBut')
    document.body.append(divBut)
    document.getElementById("nav").insertBefore(divBut, document.getElementById("nav").firstChild);
    divBut.style.backgroundImage = `url(${bgNav})`


    const tabOne = document.createElement('button');
    tabOne.classList.add('one')
    tabOne.innerHTML = 'MENU'
    tabOne.addEventListener('click', () => {
        tabActive = tabOne.className;
        tabChange(tabActive)
        console.log(tabActive)
        if (tabOne.className == tabActive) {
        }
        tabTwo.classList.remove('active');
        tabThree.classList.remove('active');
        tabOne.classList.add("active");
    })




    const tabTwo = document.createElement('button');
    tabTwo.classList.add('two')
    tabTwo.innerHTML = 'ABOUT'
    tabTwo.addEventListener('click', () => {
        tabActive = tabTwo.className;
        tabChange(tabActive)
        tabOne.classList.remove('active');
        tabThree.classList.remove('active');
        tabTwo.classList.add("active");
    })



    const tabThree = document.createElement('button');
    tabThree.classList.add('three')
    tabThree.innerHTML = 'CONTACT'
    tabThree.addEventListener('click', () => {
        tabActive = tabThree.className;
        tabChange(tabActive)
        tabOne.classList.remove('active');
        tabTwo.classList.remove('active');
        tabThree.classList.add("active");
    })




    divBut.appendChild(tabOne)
    divBut.appendChild(tabTwo)
    divBut.appendChild(tabThree)

}

export { tabs }