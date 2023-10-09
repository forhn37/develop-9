function buy_normal(item, price, quantity) {
  console.log(`${item}상품을 ${quantity}개 골라서 점원에게 주었습니다.`);
  console.log("계산이 필요합니다");
  let total = price*quantity;
  return total;
}

// function pay(tot) {
//   console.log(`${tot}원을 지불하였습니다.`);
// }

// let tot = buy_normal("고구마", 1000, 5);
// pay(tot);

// // 동기방식 예제