function multiplyBiggerNumByTwo(num1, num2) {
  let BigNum;
  if (num1 > num2) {
    BigNum = num1;
  } else {
    BigNum = num2;
  }
  return BigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let BigNum;
  if (num1 > num2) {
    BigNum = num1;
  } else {
    BigNum = num2;
  }
  return BigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let BigNum;
  if (sum1 > sum2) {
    BigNum = sum1;
  } else {
    BigNum = sum2;
  }
  return `I ate ${BigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let BigNum;
  if (weight1 < weight2) {
    BigNum = weight1;
  } else {
    BigNum = weight2;
  }
  return `I adopted a dog that weighs ${BigNum} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
