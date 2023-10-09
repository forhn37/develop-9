// buy_normal함수 실행시 total이라는 값을 출력
function buy_normal(item, price, quantity) {
  console.log(`${item}상품을 ${quantity}개 골라서 점원에게 주었습니다.`);
  console.log("계산이 필요합니다");
  let total = price*quantity;
  return total;
}
// pay함수는 매개변수로 문자열을 만들어서 출력
function pay(tot) {
  console.log(`${tot}원을 지불하였습니다.`);
}
// 함수의 인자를 입력 후 함수를 호출하면 return값이 total이므로 
// pay(tot) === pay(price*quatity) === pay(total); 이 됨
// pay함수를 출력시 문자열을 출력하므로 콘솔이 찍힘 
// 동기화방식
let tot = buy_normal("고구마", 1000, 5);
pay(tot);

// 동기방식 예제