import Deact from './javascript/core/Deact.js';
import { sample } from './javascript/utill_list.js';
import ProductView from './javascript/components/ProductView.js';
export default class App extends Deact {
  setup() {
    this.state = {
      sample: sample(),
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
      const { sample } = this.state;
      return {
        sample,
      };
    });
  }
}
