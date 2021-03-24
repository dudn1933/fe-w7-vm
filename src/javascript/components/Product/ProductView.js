import Component from '../../core/Component.js';
import Product from './Product.js';

export default class ProductView extends Component {
  selectPropsToUse() {
    // this.props의 값으로 menulist가 넘어온다. Component.js에서 내부동작.
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
