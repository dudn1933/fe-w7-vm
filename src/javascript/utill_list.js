const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};
const moneyList = () => {
  const moneyType = ['10', '50', '100', '500', '1000', '5000', '10000'];
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
    500,
    1000,
    400,
    300,
    900,
    1200,
    1000,
    1000,
    2000,
    1000,
    7000,
    600,
    1000,
    500,
    1000,
    1200,
    1000,
    1000,
    2000,
    1000,
  ];

  let menu = menuTitle.map(
    (v, i) => (v = { title: v, price: menuPrice[i], count: randomNumber() })
  );

  return menu;
};

export { menuList, moneyList };


