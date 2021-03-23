import Deact from './javascript/core/Deact.js';
import { menuList } from './javascript/utill_list.js';
import ProductView from './javascript/components/Product/ProductView.js';

export default class App extends Deact {
  setup() {
    this.state = {
      menulist: menuList(),
    };
  }
  getTemplate() {
    return `
     <div id="product_view"></div>
     <div id="screen_view"></div>
     <div id="wallet_view"></div>
    `;
  }
  mountComponents() {
    this.createComponent(ProductView, '#product_view', () => {
      const { menulist } = this.state;
      return {
        menulist,
      };
    });
  }
}
