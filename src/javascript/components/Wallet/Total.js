import Component from '../../core/Component.js';

export default class Wallet extends Component {
  selectPropsToUse() {
    const { moneylist } = this.props;
    this.selfProps = { moneylist };
  }
  getTemplate() {
    const { moneylist } = this.selfProps;
    const total = moneylist.reduce((total, money) => {
      return total + money.title * money.count;
    }, 0);
    return `
        <div class="wallet_total">${total}</div>
      `;
  }
}
