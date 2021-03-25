import Deact from './javascript/core/Deact.js';
import { _ } from './javascript/utils/dom.js';
import { debounce } from './javascript/utils/fn.js';
import { getMenuList, getWallet } from './javascript/utill_list.js';
import ProductView from './javascript/components/Product/ProductView.js';
import ScreenView from './javascript/components/Screen/ScreenView.js';
import WalletView from './javascript/components/Wallet/WalletView.js';

export default class App extends Deact {
  setup() {
    this.state = {
      menuList: getMenuList(),
      wallet: getWallet(),
      inputedMoney: 0,
      record: [],
      resetTimer: debounce(() => {
        this.returnMoney();
      }, 5000),
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
    const { selectBeverage, inputMoney, returnMoney } = this;

    this.createComponent(ProductView, '#Product_view', () => {
      const { menuList, inputedMoney } = this.state;
      return {
        menuList,
        inputedMoney,
        selectBeverage: selectBeverage.bind(this),
      };
    });

    this.createComponent(ScreenView, '#Screen_view', () => {
      const { inputedMoney, record } = this.state;
      return { inputedMoney, record, returnMoney: returnMoney.bind(this) };
    });

    this.createComponent(WalletView, '#Wallet_view', () => {
      const { wallet } = this.state;

      return {
        wallet,
        inputMoney: inputMoney.bind(this),
      };
    });
  }

  inputMoney(unit) {
    this.subtractMoneyFromWallet(unit);
    this.addToInputedMoney(unit);

    const message = `💲${unit} 투입💲`;
    this.insertMessageToBoard(message);
    const chatLog = _.$('.log');
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  addToInputedMoney(unit) {
    const { inputedMoney } = this.state;
    this.updateState({ inputedMoney: inputedMoney + Number(unit) });
  }
  subtractMoneyFromWallet(unit) {
    const { wallet, resetTimer } = this.state;
    resetTimer();
    const newWallet = this.deepCopy(wallet);

    for (const money of newWallet) {
      if (money.name === unit) {
        money.count--;
      }
    }
    this.updateState({ wallet: newWallet });
  }
  selectBeverage(name) {
    const { menuList, resetTimer } = this.state;
    let { inputedMoney } = this.state;
    resetTimer();
    const newMenuList = this.deepCopy(menuList);
    for (const beverage of newMenuList) {
      if (beverage.name === name && beverage.price <= inputedMoney) {
        beverage.count--;
        inputedMoney -= beverage.price;
        const message = `✅${beverage.name} 선택✅`;
        this.insertMessageToBoard(message);

        setTimeout(() => {
          const message = `🍿${beverage.name} 나왔다🧃`;
          this.insertMessageToBoard(message);
        }, 2000);
      }
    }
    this.updateState({ menuList, inputedMoney });
    const chatLog = _.$('.log');
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  insertMessageToBoard(message) {
    const { record } = this.state;
    const newRecord = [...record, message];
    this.updateState({ record: newRecord });
    const chatLog = _.$('.log');
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  returnMoney() {
    let { wallet, inputedMoney } = this.state;
    if (!inputedMoney) return;
    const message = `💸${inputedMoney}반환💸`;
    this.insertMessageToBoard(message);
    const returnCoin = this.distributeCoin(inputedMoney);
    let newWallet = wallet;
    inputedMoney -= Number(inputedMoney);
    newWallet = newWallet.map(
      (v, i) => (v = { name: v.name, count: v.count + returnCoin[i] })
    );
    this.updateState({ wallet: newWallet, inputedMoney });
    const chatLog = _.$('.log');
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  distributeCoin(inputMoney) {
    const coinlist = [10000, 5000, 1000, 500, 100, 50, 10];
    let remainder = inputMoney;
    const result = [];

    coinlist.map((v) => {
      result.push(Math.floor(remainder / v));
      remainder = remainder % v;
    });
    return result.reverse();
  }
}
