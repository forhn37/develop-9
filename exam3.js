function buy_tobe(item, price, quantity, callback) {
  console.log(`${item}상품을${quantity}개 골라서 점원에게 주었습니다.`);
  setTimeout(function() {
    console.log("계산이 필요합니다");
    let total = price*quantity;
    callback(total);
  }, 1000);
}

function pay(tot) {
  console.log(`${tot}원을 지불하였습니다.`);
}

buy_tobe("고구마", 1000, 5, pay);

// buy_tobe실행 후 callback처리 그 후 마지막 펑션 진행
// buy_tobe("고구마", 1000, 5, pay);실행 후 console.log(`${item}상품을${quantity}개 골라서 점원에게 주었습니다.`); 출력 후 setTimeout을 호출한다 1초 후에 console.log("계산이 필요합니다"); 출력 후 total을 매개변수로 가진 pay함수가 실행된다. 