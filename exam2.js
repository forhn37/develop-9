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
// tot가 인자인 pay함수 실행시 매개변수 파악을 위해 buy_asis가 실행되고  console.log(`${item}상품을${quantity}개 골라서 점원에게 주었습니다.`);이 찍히고 그다음에 setTimeout이 호출되고 return값이 나오지 않은상태에서 pay함수의 실행문인 console.log(`${tot}원을 지불하였습니다.`);가 실행되고 1초 후에 실행하기로 했던 setTimeout의 실행문인 console.log("계산이 필요합니다");이 찍힘
