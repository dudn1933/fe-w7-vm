import Component from '../../core/Component.js';

export default class Wallet extends Component {
  selectPropsToUse() {
    const { title, count } = this.props;
    this.selfProps = { title, count };
  }
  getTemplate() {
    const { title, count } = this.selfProps;
    return `
      <div class="coin">${title}원</div>
      <div class="coin_count">${count}</div>
      `;
  }
  mountComponents() {}
  setEventLinstener() {}
}
