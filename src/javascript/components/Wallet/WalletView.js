import Component from '../../core/Component.js';
import Wallet from './Wallet.js';
import Total from './Total.js';

export default class WalletView extends Component {
  getTemplate() {
    return `
     <ul class="wallet_line"></ul>
     <div class="wallet_total"></div>
    `;
  }
  mountComponents() {
    const { wallet } = this.props;
    wallet.forEach((el, index) => {
      this.createComponent(
        Wallet,
        '.wallet_line',
        () => {
          const { wallet } = this.props;
          const { name, count } = wallet[index];
          return { name, count };
        },
        'li'
      );
    });
    
    this.createComponent(Total, '.wallet_total', () => {
      const { wallet } = this.props;
      return { wallet };
    });
  }

  setEventLinstener() {
    const { inputMoney } = this.props;
    this.addEventLinstener('click', '.coin', ({ target }) => {
      const unit = target.innerText.replace(/[^0-9]/g, '');
      inputMoney(unit);
    });
  }
}
