import './style.scss';

import { increment, decrement, toggleViewMode } from './model/action';

import store from './model/store';

function component(store) {
    const { value, viewMode } = store.getState();

    let element = document.createElement('div');
    element.classList.add('hello');

    let label = document.createElement('p');
    switch(viewMode) {
        case 'string':
            label.innerHTML = value;
            break;
        case 'json':
            label.innerHTML = JSON.stringify(store.getState());
            break;
    }
    element.appendChild(label);

    element.appendChild(button('Toggle viewmode', () => {
        store.dispatch(toggleViewMode());
    }));

    element.appendChild(button('increment', () => {
        store.dispatch(increment(1));
    }));

    element.appendChild(button('decrement', () => {
        store.dispatch(decrement(1))
    }));

    return element;
  }
  
  function button(label, callback) {
    let button = document.createElement('button');
    button.innerHTML = label;
    button.addEventListener('click', callback);
    return button;
  }

  document.body.appendChild(component(store));

  store.subscribe(() => {
      document.body.innerHTML = "";
      document.body.appendChild(component(store));
  });