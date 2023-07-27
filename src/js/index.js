import navView from './navView.js';
import footerView from './footerView.js';
import homeView from './homeView.js';
import menuView from './menuView.js';
import contactView from './contactView.js';

const init = function () {
  homeView.render();
  homeView.addHandlerClick(navView.sendBtn(0));
  menuView.addHandlerClick(navView.sendBtn(1));
  contactView.addHandlerClick(navView.sendBtn(2));
  homeView.addHandlerClickViewMenu(menuView.render.bind(menuView));
};
init();
