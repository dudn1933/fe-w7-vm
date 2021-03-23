const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};
const moneyList = () => {
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

const menuList = () => {
  let menuTitle = [
    '콜라',
    '사이다',
    '파인애플 환타',
    '포도 환타',
    '레몬에이드',
    '봉봉',
    '코코아주스',
    '제로콜라',
    '파워에이드',
    '초코우유',
    '게토레이',
    '포카리스웨이트',
    '딸바주스',
    '바나나우유',
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

console.log(menuList());

export { menuList };
