function buy_asis(item, price, quantity) {
  console.log(`${item}상품을${quantity}개 골라서 점원에게 주었습니다.`);
  setTimeout(function() {
    console.log("계산이 필요합니다");
    let total = price*quantity;
    return total;
  }, 1000);
}

function pay(tot) {
  console.log(`${tot}원을 지불하였습니다.`);
}

let tot = buy_asis("고구마", 1000, 5);
pay(tot);
// setTimeout처럼 비동기방식으로 인해 순서가 명확해지지 않는 문제인해 순서를 원하는 대로 하기 위해 callback함수가 필요함