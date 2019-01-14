import './style.scss';

import { 
    dodge,
    heroAttack
} from './model/action';

import store from './model/store';

function component(store) {
    const { hero, monster } = store.getState();

    let element = document.createElement('div');

    let label = document.createElement('p');

    element.appendChild(heroView(hero));
    element.appendChild(monsterView(monster));

    element.appendChild(button('up', () => {
        store.dispatch(dodge(1, 0));
    }));

    element.appendChild(button('down', () => {
        store.dispatch(dodge(1, 2));
    }));

    element.appendChild(button('left', () => {
        store.dispatch(dodge(0, 1));
    }));

    element.appendChild(button('attack', () => {
        store.dispatch(heroAttack());
    }));

    return element;
  }
  
  function statisticView(statistic) {
      const element = document.createElement('div');
      
      element.appendChild(text(`HP: ${statistic.hp}/${statistic.maxHp}`));

      return element;
  }

  function heroView(hero) {
    const element = document.createElement('div');
    element.appendChild(text('Hero'));
    element.appendChild(text(hero.currentState));
    element.appendChild(text(JSON.stringify(hero.position)));
    element.appendChild(statisticView(hero.statistic));
    return element;
  }

  function monsterView(monster) {
    const element = document.createElement('div');
    element.appendChild(statisticView(monster.statistic));
    return element;
  }

  function text(text) {
    const element = document.createElement('p');
    element.innerHTML = text;
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