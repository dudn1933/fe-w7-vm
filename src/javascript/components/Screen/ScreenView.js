import Component from '../../core/Component.js';

export default class ScreenView extends Component {
  selectPropsToUse() {
    // this.props의 값으로 넘어온다. Component.js에서 내부동작.
    const { selectMoney } = this.props;
    this.selfProps = { selectMoney };
    console.log(this.selfProps);
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
      // won_screen에 있는 값을 나누어 지갑에 반환.
    });
  }
}
