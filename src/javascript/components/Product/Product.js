import Component from '../../core/Component.js';

export default class Product extends Component {
  selectPropsToUse() {
    const { inputedMoney, name, price, count } = this.props;
    this.selfProps = { inputedMoney, name, price, count };
  }
  getTemplate() {
    const { inputedMoney, name, price, count } = this.selfProps;
    return `
      <li class="menu_piece">
        <div class="menu_box${!count ? ' soldout' : ''}${
      inputedMoney < price ? ' expensive' : ''
    }">${name}</div>
        <div class="menu_price">${price} 원</div>
      </li>
      `;
  }
}
