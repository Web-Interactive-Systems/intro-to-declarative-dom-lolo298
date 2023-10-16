import { createElement, render } from './mini';

const elementProps = { id: 'element-id' };
const children = 'Hello world!';
const elementType = 'h1';

const component = createElement(elementType, elementProps, children);

/**
 Todo: Check the devtool console and copy/paste the output of the log object below

 //What is component? {
    "type": "h1",
    "props": {
        "id": "element-id",
        "children": [
            {
                "type": "TEXT_ELEMENT",
                "props": {
                    "nodeValue": "Hello world!",
                    "children": []
                }
            }
        ]
    }
}
 
 */
console.log('what is component?', component);

/**
 Todo: Explore `createElement` and explain what this function does

  createElement prend 3 arguments: 
  - elementType: le type de l'élément à créer (h1, div, etc.)
  - elementProps: les propriétés de l'élément sous form d'un objet 
  - children: les enfants de l'élément (texte, autre élément, etc.)
  La fonction retourne un objet représentant l'élément à créer.

 */

/**
 Todo: check the file index.html and get the id of the app div container
 */
const containerId = 'app';
const container = document.getElementById(containerId);

/**
 Todo: Check the implementation of render.
 Use render to render component in the html dom
 */
render(component, container);
