import Component from '../../core/Component.js';
import Product from './Product.js';

export default class ProductView extends Component {
  selectPropsToUse() {
    const { menulist } = this.props;
    this.selfProps = { menulist };
  }
  getTemplate() {
    return `
     <ul class="menu_line"></ul>
    `;
  }
  mountComponents() {
    const { menulist } = this.selfProps;
    menulist.forEach((el) => {
      this.createComponent(Product, '.menu_line', () => {
        const { title, price, count } = el;
        return { title, price, count };
      });
    });
  }
  setEventLinstener() {}
}
