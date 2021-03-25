import Component from '../../core/Component.js';

export default class ScreenView extends Component {
  selectPropsToUse() {
    // this.props의 값으로 넘어온다. Component.js에서 내부동작.
    const { selectMoney, record, returnMoney } = this.props;
    this.selfProps = { selectMoney, record, returnMoney };
  }
  getTemplate() {
    const { selectMoney, record } = this.selfProps;

    return `
     <div class="won_screen">💰️${selectMoney}원</div>
     <button class="btn">반&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;환</button>
     <textarea class="log">${record.join('\n')}</textarea>
    `;
  }
  mountComponents() {}
  setEventLinstener() {
    this.addEventLinstener('click', '.btn', ({ target }) => {
      const { selectMoney, returnMoney } = this.props;
      returnMoney();
    });
  }
}
