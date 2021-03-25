import Component from '../../core/Component.js';

export default class Total extends Component {
  selectPropsToUse() {
    const { wallet } = this.props;
    this.selfProps = { wallet };
  }

  getTemplate() {
    const { wallet } = this.selfProps;
    const totalMoney = this.getTotalMoney(wallet);
    return `
        <div class="total_money">${totalMoney}원</div>
      `;
  }
  getTotalMoney(wallet) {
    return wallet.reduce((total, money) => {
      return total + money.name * money.count;
    }, 0);
  }
}
