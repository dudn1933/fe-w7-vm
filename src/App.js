import Utill from './javascript/utill_list.js';

class App {
  constructor(props) {
    // super(props);
    this.state = {
      money: new Utill().Money_list(),
      menu: new Utill().Menu_list(),
      ALL_money: new Utill()
        .Money_list()
        .map((v) => Number(v.title.replace(/[^0-9]/g, '') * v.count))
        .reduce((acc, cur) => (acc = acc + cur)),
    };
  }
  render() {
    return [this.state.money, this.state.menu, this.state.ALL_money];
  }
}

const test = new App();

console.log(test.render());

export default App;

// import Deact from "./core/Deact3.js";
// import { _ } from "./utils/dom.js";
// export default class App extends Deact {
//   setup() {
//     this.state = {
//     };
//   }
//   setPropsFromState() {
//     const { sample, dd } = this.state;
//     this.props = {
//       sample,
//       dd,
//     };
//   }
//   getTemplate() {
//     const { sample, dd } = this.props;
//     return `
//             <header>${dd}의 ${sample} Page</header>
//             <div id="raccoon"></div>
//         `;
//   }
//   mountComponents() {
//     this.createComponent(Raccoon, "#raccoon", () => {
//       const { raccoon, pengdori } = this.state;
//       return {
//         raccoon,
//         pengdori,
//         changeHeaderName: this.changeHeaderName.bind(this),
//       };
//     });
//   }
//   changeHeaderName() {
//     const { pengdori } = this.state;
//     this.updateState({ pengdori: !pengdori });
//   }
// }
