import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

   // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
   btn.innerHTML = 'Click me and check the console 12!';
   btn.onclick = printMe;

   element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
   //对应到webpack.NamedModulesPlugin
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }