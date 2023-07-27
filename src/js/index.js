import navView from './navView.js';
import footerView from './footerView.js';
import homeView from './homeView.js';
import menuView from './menuView.js';
import contactView from './contactView.js';

const init = function () {
  homeView.render(navView.sendBtn(0), navView.sendClearBtnLine());

  [homeView, menuView, contactView].forEach((el, i) =>
    el.addHandlerClick(navView.sendBtn(i), navView.sendClearBtnLine())
  );

  homeView.addHandlerClickViewMenu(
    menuView,
    navView.sendBtn(1),
    navView.sendClearBtnLine()
  );
};
init();
