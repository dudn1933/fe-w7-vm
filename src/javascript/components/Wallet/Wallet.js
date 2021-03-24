import Component from '../../core/Component.js';

export default class Wallet extends Component {
  selectPropsToUse() {
    const { title, count } = this.props;
    this.selfProps = { title, count };
  }
  getTemplate() {
    const { title, count } = this.selfProps;

    return `
      <li class="coin">${title}</li>
      <li class="coin_count">${count}</li>
      `;
  }
  mountComponents() {}
  setEventLinstener() {}
}
