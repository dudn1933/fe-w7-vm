import Deact from './javascript/core/Deact.js';
import { menuList, sumMoney, moneyList } from './javascript/utill_list.js';
import ProductView from './javascript/components/Product/ProductView.js';
import ScreenView from './javascript/components/Screen/ScreenView.js';
import WalletView from './javascript/components/Wallet/WalletView.js';

export default class App extends Deact {
  setup() {
    this.state = {
      menulist: menuList(),
      summoney: sumMoney(),
      moneylist: moneyList(),
    };
  }

  getTemplate() {
    return `
     <div id="Product_view"></div>
     <div id="Screen_view"></div>
     <div id="Wallet_view"></div>
    `;
  }

  mountComponents() {
    const { payMoney } = this;
    this.createComponent(ProductView, '#Product_view', () => {
      const { menulist } = this.state;
      return { menulist };
    });

    this.createComponent(ScreenView, '#Screen_view', () => {
      const { summoney } = this.state;
      return { summoney };
    });

    this.createComponent(WalletView, '#Wallet_view', () => {
      const { moneylist } = this.state;
      return { moneylist, payMoney: payMoney.bind(this) };
    });
  }
  payMoney(type) {
    const { moneylist } = this.state;
    for (const money of moneylist) {
      if (money.title === type) {
        money.count--;
      }
      ``;
    }
    this.updateState({ moneylist });
  }
}
