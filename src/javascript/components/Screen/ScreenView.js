import Component from '../../core/Component.js';
import { _ } from '../../utils/dom.js';

export default class ScreenView extends Component {
  selectPropsToUse() {
    // this.props의 값으로 넘어온다. Component.js에서 내부동작.
    const { inputedMoney, record, returnMoney } = this.props;
    this.selfProps = { inputedMoney, record, returnMoney };
  }
  getTemplate() {
    const { inputedMoney, record } = this.selfProps;

    return `
     <div class="won_screen">💰️${inputedMoney}원</div>
     <button class="btn">반&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;환</button>
     <textarea class="log">${record.join('\n')}</textarea>
    `;
  }

  componentDidMount() {
    const chatLog = _.$('.log');
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  setEventLinstener() {
    this.addEventLinstener('click', '.btn', ({ target }) => {
      const { returnMoney } = this.props;
      returnMoney();
    });
  }
}
