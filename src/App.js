import Deact from './javascript/core/Deact.js';
import { _ } from './javascript/utils/dom.js';
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
      selectMoney: 0,
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
    const { payMoney, changeMoney } = this;
    this.createComponent(ProductView, '#Product_view', () => {
      const { menulist } = this.state;
      return { menulist };
    });

    this.createComponent(ScreenView, '#Screen_view', () => {
      const { selectMoney } = this.state;
      return { selectMoney };
    });

    this.createComponent(WalletView, '#Wallet_view', () => {
      const { moneylist } = this.state;
      const totalMoney = () => {
        const total = this.state.moneylist.reduce((total, money) => {
          return total + money.title * money.count;
        }, 0);
        return total;
      };
      return {
        moneylist,
        payMoney: payMoney.bind(this),
        changeMoney: changeMoney.bind(this),
        totalMoney,
      };
    });
  }

  payMoney(type) {
    const { moneylist } = this.state;
    for (const money of moneylist) {
      if (money.title === type) {
        money.count--;
        // this.state.selectMoney.push(money.title);
      }
    }
    this.updateState({ moneylist });
  }

  changeMoney(type) {
    let { selectMoney } = this.state;
    selectMoney += Number(type);
    this.updateState({ selectMoney });
  }
}
