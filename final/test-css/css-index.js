import _ from 'lodash';
import './css-style.css';

import styles from  './css-style.css';


function component() {
  var element = document.createElement('div');

   // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  

  console.log(styles);
  console.log(JSON.stringify(styles));

  return element;
}

document.body.appendChild(component());