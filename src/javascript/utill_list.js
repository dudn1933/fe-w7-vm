const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};
const getWallet = () => {
  const moneyType = ['10', '50', '100', '500', '1000', '5000', '10000'];
  const wallet = moneyType.map((type) => {
    return { name: type, count: randomNumber() };
  });
  return wallet;
};

const getMenuList = () => {
  const menuTitle = [
    ['콜라', 500],
    ['사이다', 1000],
    ['젤리', 400],
    ['포도환타', 300],
    ['레몬주스', 900],
    ['봉봉', 1200],
    ['코코아칩', 1000],
    ['제로콜라', 1000],
    ['커피', 2000],
    ['초코우유', 1000],
    ['게토레이', 7000],
    ['초콜릿', 600],
    ['딸바주스', 1000],
    ['바나나칩', 500],
    ['커피우유', 1000],
    ['알로에', 1200],
    ['콘칩', 1000],
    ['새우깡', 1000],
    ['감자칩', 2000],
    ['칸쵸', 1000],
  ];

  const menuList = menuTitle.map(([name, price]) => {
    return { name, price, count: randomNumber() };
  });

  return menuList;
};

export { getMenuList, getWallet };
