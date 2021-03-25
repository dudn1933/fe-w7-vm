import Component from '../../core/Component.js';

export default class ScreenView extends Component {
  selectPropsToUse() {
    // this.props의 값으로 넘어온다. Component.js에서 내부동작.
    const { selectMoney, returnMoney } = this.props;
    this.selfProps = { selectMoney, returnMoney };
  }
  getTemplate() {
    const { selectMoney } = this.selfProps;
    return `
     <div class="won_screen">${selectMoney}원</div>
     <button class="btn">반환</button>
     <textarea class="log"></textarea>
    `;
  }
  mountComponents() {}
  setEventLinstener() {
    this.addEventLinstener('click', '.btn', ({ target }) => {
      const { selectMoney, returnMoney } = this.props;
      returnMoney(selectMoney);
    });
  }
}
