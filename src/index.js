import About from './about';
import Contact from './contact';
import Footer, { footer } from './footer';
import Menu from './menu';
import './styles.css'
import { tabs } from './tabs';
function component() {
    tabs()
    Menu()
    About()
    Contact()
    Footer()
}

document.body.appendChild(component());