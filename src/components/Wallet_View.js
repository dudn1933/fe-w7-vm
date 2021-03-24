export class Wallet_View extends Component {
  render(props) {
    // props = [{ title, count },{ title, count },...]
    return `
    <ul>
        <li><button>${this.props[0].title}</button><span class=${this.props[0].title}>${this.props[0].count}</span></li>
        <li><button>${this.props[1].title}</button><span class=${this.props[1].title}>${this.props[1].count}</span></li>
        <li><button>${this.props[2].title}</button><span class=${this.props[2].title}>${this.props[2].count}</span></li>
        <li><button>${this.props[3].title}</button><span class=${this.props[3].title}>${this.props[3].count}</span></li>
        <li><button>${this.props[4].title}</button><span class=${this.props[4].title}>${this.props[4].count}</span></li>
        <li><button>${this.props[5].title}</button><span class=${this.props[5].title}>${this.props[5].count}</span></li>
        <li><button>${this.props[6].title}</button><span class=${this.props[6].title}>${this.props[6].count}</span></li>
    </ul>
    `;
  }
}
