import Component from '../core/Component.js';
export default class Product extends Component {
  selectPropsToUse() {
    const { title, count, price } = this.props;
    this.selfProps = { title, count, price };
  }
  getTemplate() {
    const { title, price } = this.selfProps;
    return `
      <li class="menu_piece">
        <div class="menu_box">${title}</div>
        <div class="menu_price">${price}</div>
      </li>
      `;
  }
  mountComponents() {}
  setEventLinstener() {}
}
