import Deact from './javascript/core/Deact.js';
import { _ } from './javascript/utils/dom.js';
import { menuList, moneyList } from './javascript/utill_list.js';
import ProductView from './javascript/components/Product/ProductView.js';
import ScreenView from './javascript/components/Screen/ScreenView.js';
import WalletView from './javascript/components/Wallet/WalletView.js';

export default class App extends Deact {
  setup() {
    this.state = {
      menulist: menuList(),
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
    const { payMoney, selectBeverage, inputMoney, returnMoney } = this;
    this.createComponent(ProductView, '#Product_view', () => {
      const { menulist, selectMoney } = this.state;
      return {
        menulist,
        selectMoney,
        selectBeverage: selectBeverage.bind(this),
      };
    });

    this.createComponent(ScreenView, '#Screen_view', () => {
      const { selectMoney } = this.state;
      //여기  Money에 새로운 함수 넣어주어야 함.
      return { selectMoney, returnMoney: returnMoney.bind(this) };
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
        inputMoney: inputMoney.bind(this),
        totalMoney,
      };
    });
  }

  payMoney(type) {
    const { moneylist } = this.state;
    for (const money of moneylist) {
      if (money.title === type) {
        money.count--;
      }
    }
    this.updateState({ moneylist });
  }
  selectBeverage(name) {
    let { menulist, selectMoney } = this.state;
    for (const beverage of menulist) {
      if (beverage.title === name && beverage.price <= selectMoney) {
        beverage.count--;
        selectMoney -= beverage.price;
      }
    }
    this.updateState({ menulist, selectMoney });
  }

  // coin 클릭시 스크린 돈 변경
  inputMoney(type) {
    let { selectMoney } = this.state;
    selectMoney += Number(type);
    this.updateState({ selectMoney });
  }

  //반환누를시 0원으로 만들어주는 함수
  returnMoney(inputMoney) {
    let { moneylist, selectMoney } = this.state;
    // 코인이 [10, 50, 100, 500, 1000, 5000, 10000] 이순서대로 반환됨
    // ex 58000원일 경우 [ 0, 0, 0, 0, 3, 1, 5]
    const returnCoin = this.distributeCoin(inputMoney);
    let newMoneyList = moneylist;
    selectMoney -= Number(inputMoney);
    newMoneyList = newMoneyList.map(
      (v, i) => (v = { title: v.title, count: v.count + returnCoin[i] })
    );
    this.updateState({ moneylist: newMoneyList, selectMoney });
  }

  //코인을 돌려주는 함수
  distributeCoin(inputMoney) {
    let coinlist = [10000, 5000, 1000, 500, 100, 50, 10];
    let remainder = inputMoney;
    let result = [];

    coinlist.map((v) => {
      result.push(Math.floor(remainder / v));
      remainder = remainder % v;
    });
    return result.reverse();
  }
}
