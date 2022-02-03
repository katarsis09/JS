function calculate(total, count, promo = null) {
 
  if (promo === 'ДАРИМ300' && total <= 300) {
    total = 0;
  } else if (promo === 'ДАРИМ300') {
    total -= 300;
  }


  if (count >= 10) {
    let discountfive = total/100*5;
    total -= discountfive;
  }


  if (total > 50000) {
    let discountTwenty = (total - 50000)/100*20;
    total -= discountTwenty
  }

  if (total >= 20000 && promo === 'СКИДКА15') {
    let discountFifteen = total/100*15;
    total -= discountFifteen
  }


  return total;
}


calculate(21000, 10, 'СКИДКА15');

export default {calculate}