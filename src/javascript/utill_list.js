const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};
const moneyList = () => {
  const moneyType = [
    '10',
    '50',
    '100',
    '500',
    '1000',
    '5000',
    '10000',
  ];
  const money = moneyType.map((v) => {
    return { title: v, count: randomNumber() };
  });
  return money;
};

const menuList = () => {
  let menuTitle = [
    '콜라',
    '사이다',
    '젤리',
    '포도환타',
    '레몬주스',
    '봉봉',
    '코코아칩',
    '제로콜라',
    '커피',
    '초코우유',
    '게토레이',
    '초콜릿',
    '딸바주스',
    '바나나칩',
    '커피우유',
    '알로에',
    '콘칩',
    '새우깡',
    '감자칩',
    '칸쵸',
  ];
  let menuPrice = [
    '500원',
    '1000원',
    '400원',
    '300원',
    '900원',
    '1200원',
    '1000원',
    '1000원',
    '2000원',
    '1000원',
    '7000원',
    '600원',
    '1000원',
    '500원',
    '1000원',
    '1200원',
    '1000원',
    '1000원',
    '2000원',
    '1000원',
  ];

  let menu = menuTitle.map(
    (v, i) => (v = { title: v, price: menuPrice[i], count: randomNumber() })
  );

  return menu;
};

const sumMoney = () => {
  const moneyType = [
    '10원',
    '50원',
    '100원',
    '500원',
    '1000원',
    '5000원',
    '10000원',
  ];
  const money = moneyType.map((v) => {
    return { title: v, count: randomNumber() };
  });
  return money;
};

export { menuList, sumMoney, moneyList };
