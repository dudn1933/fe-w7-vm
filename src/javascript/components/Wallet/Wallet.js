import Component from '../../core/Component.js';

export default class Wallet extends Component {
  selectPropsToUse() {
    const { name, count } = this.props;
    this.selfProps = { name, count };
  }
  getTemplate() {
    const { name, count } = this.selfProps;
    return `
      <div class="coin${!count ? ' click_off' : ''}">${name}원</div>
      <div class="coin_count">${count}</div>
      `;
  }
  mountComponents() {}
  setEventLinstener() {}
}
