export class Utill {
  random_number = () => {
    return Math.floor(Math.random() * 10);
  };

  Money_list = () => {
    let money = [
      { title: '10원', count: null },
      { title: '50원', count: null },
      { title: '100원', count: null },
      { title: '500원', count: null },
      { title: '1000원', count: null },
      { title: '5000원', count: null },
      { title: '10000원', count: null },
    ];
    money.map((v) => (v.count = this.random_number()));
    return money;
  };

  Menu_list = () => {
    let menu = [
      { title: '콜라', count: null, price: '500원' },
      { title: '사이다', count: null, price: '1000원' },
      { title: '파인애플 환타', count: null, price: '400원' },
      { title: '포도 환타', count: null, price: '300원' },
      { title: '레몬에이드', count: null, price: '900원' },
      { title: '봉봉', count: null, price: '1200원' },
      { title: '코코아주스', count: null, price: '1000원' },
      { title: '제로콜라', count: null, price: '1000원' },
      { title: '파워에이드', count: null, price: '2000원' },
      { title: '초코우유', count: null, price: '1000원' },
      { title: '게토레이', count: null, price: '7000원' },
      { title: '포카리스웨이트', count: null, price: '600원' },
      { title: '딸바주스', count: null, price: '1000원' },
      { title: '바나나우유', count: null, price: '500원' },
      { title: '커피우유', count: null, price: '1000원' },
      { title: '알로에', count: null, price: '1200원' },
      { title: '콘칩', count: null, price: '1000원' },
      { title: '새우깡', count: null, price: '1000원' },
      { title: '감자칩', count: null, price: '2000원' },
      { title: '칸쵸', count: null, price: '1000원' },
    ];
    menu.map((v) => (v.count = this.random_number()));

    return menu;
  };
}
// 랜덤숫자 생성하기

export default Utill;
