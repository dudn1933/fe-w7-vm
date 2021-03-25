import Component from '../../core/Component.js';
import Product from './Product.js';

export default class ProductView extends Component {
  getTemplate() {
    return `
     <ul class="menu_line"></ul>
    `;
  }
  mountComponents() {
    const { menuList } = this.props;
    menuList.forEach((el, index) => {
      this.createComponent(Product, '.menu_line', () => {
        const { menuList } = this.props;
        const { name, price, count } = menuList[index];
        const { inputedMoney } = this.props;
        return { inputedMoney, name, price, count };
      });
    });
  }
  setEventLinstener() {
    const { selectBeverage } = this.props;
    this.addEventLinstener('click', '.menu_box', ({ target }) => {
      const name = target.innerText;
      selectBeverage(name);
    });
  }
}
