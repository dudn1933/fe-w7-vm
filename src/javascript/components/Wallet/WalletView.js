import Component from '../../core/Component.js';
import Wallet from './Wallet.js';

export default class WalletView extends Component {
  selectPropsToUse() {
    const { moneylist } = this.props;
    this.selfProps = { moneylist };
  }
  getTemplate() {
    return `
     <ul class="wallet_line"></ul>
    `;
  }
  mountComponents() {
    const { moneylist } = this.selfProps;
    moneylist.forEach((el) => {
      this.createComponent(Wallet, '.wallet_line', () => {
        const { title, count } = el;
        return { title, count };
      });
    });
  }
  setEventLinstener() {}
}
