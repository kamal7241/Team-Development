import _ from "lodash";
import "./assets/css/style.css";
import header from "./components/header/header"
// import img from "./assets/images/download.png"
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const myImage = new Image();
    myImage.src = require("./assets/images/download.png");
    // myImage.src = img;
    element.appendChild(myImage);
    return element;
  }
  
  document.body.appendChild(component());
  console.log("watch is working")