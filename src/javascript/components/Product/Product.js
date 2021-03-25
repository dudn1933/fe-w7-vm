import Component from '../../core/Component.js';

export default class Product extends Component {
  selectPropsToUse() {
    const { selectMoney, title, price, count } = this.props;
    this.selfProps = { selectMoney, title, price, count };
  }
  getTemplate() {
    const { selectMoney, title, price, count } = this.selfProps;
    return `
      <li class="menu_piece">
        <div class="menu_box ${!count ? 'soldout' : ''} ${
      selectMoney < price ? 'expensive' : ''
    }">${title}</div>
        <div class="menu_price">${price} 원</div>
      </li>
      `;
  }
  mountComponents() {}
  setEventLinstener() {}
}
