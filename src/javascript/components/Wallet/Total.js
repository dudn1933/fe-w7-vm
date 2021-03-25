import Component from '../../core/Component.js';

export default class Total extends Component {
  selectPropsToUse() {
    const { totalmoney } = this.props;
    this.selfProps = { totalmoney };
  }

  getTemplate() {
    const { totalmoney } = this.selfProps;

    return `
        <div class="total_money">${totalmoney}원</div>
      `;
  }
}
