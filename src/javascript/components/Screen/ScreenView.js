import Component from '../../core/Component.js';

export default class ScreenView extends Component {
  selectPropsToUse() {
    // this.props의 값으로 넘어온다. Component.js에서 내부동작.
    const { summoney } = this.props;
    this.selfProps = { summoney };
  }
  getTemplate() {
    return `
     <div class="won_screen">0원</div>
     <button class="btn">반환</button>
     <textarea class="log"></textarea>
    `;
  }
  mountComponents() {
    // const { summoney } = this.selfProps;
    // this.createComponent(Screen, '.won_screen', () => {
    //   return summoney;
    // });
  }
  setEventLinstener() {}
}
