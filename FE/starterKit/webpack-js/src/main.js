import headerComp from "./components/header/header";
import "./assets/sass/style.scss"
import { dynamicBanner } from "./components/dynamicBanner/dynamicBanner";
const mountComponents = ()=>{
    document.body.appendChild(headerComp);
    dynamicBanner.then((banner)=> document.body.appendChild(banner))
    
}
mountComponents();