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

// return `
//     <div className="App">
//         <Menu>

//         </Menu>

//         <Real_time_View>

//         </Real_time_View>

//         <Wallet>

//         </Wallet>
//     </div>
//   `;
