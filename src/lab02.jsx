import { createElement, render } from './mini';


const div = 'div';
const divProps = { class: 'container' };

const span = 'span';
const spanProps = {};
const spanChildren1 = 'Hello';
const spanChildren2 = 'World!';

const component = createElement(div, divProps, [
  createElement(span, spanProps, spanChildren1),
  createElement(span, spanProps, spanChildren2),
]);

/**
 
  Todo: In similar manner to lab01, 
  use `createElement` and `render` to generate the following DOM:

 <div class="container">
   <span>Hello</span>
   <span>World!</span>
 </div>
 */

//

const containerId = document.getElementById('app');

render(component, containerId);
