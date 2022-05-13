// import "./assets/sass/style.scss"
import { dynamicBanner } from "./components/dynamicBanner/dynamicBanner";
const mountComponents = ()=>{
    // document.body.appendChild(banner)
    dynamicBanner.then((banner)=> document.body.appendChild(banner))
}
mountComponents();