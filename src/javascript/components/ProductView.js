import Component from '../core/Component.js';
import Product from './Product.js';
export default class ProductView extends Component {
  selectPropsToUse() {
    const { sample } = this.props;
    this.selfProps = { sample };
  }
  getTemplate() {
    return `
     <ul class="menu_line"></ul>
    `;
  }
  mountComponents() {
    const { sample } = this.selfProps;
    sample.forEach((el) => {
      this.createComponent(Product, '.menu_line', () => {
        const { title, count, price } = el;
        return { title, count, price };
      });
    });
  }
  setEventLinstener() {}
}
