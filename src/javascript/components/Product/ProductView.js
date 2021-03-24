import Component from '../../core/Component.js';
import Product from './Product.js';

export default class ProductView extends Component {
  selectPropsToUse() {
    const { menulist, selectBeverage } = this.props;
    this.selfProps = { menulist, selectBeverage };
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
        const { selectMoney } = this.props;
        const { title, price, count } = el;
        return { selectMoney, title, price, count };
      });
    });
  }
  setEventLinstener() {
    const { selectBeverage } = this.selfProps;
    this.addEventLinstener('click', '.menu_box', ({ target }) => {
      const name = target.innerText;
      selectBeverage(name);
    });
  }
}
