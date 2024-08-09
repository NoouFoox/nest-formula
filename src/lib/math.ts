/* eslint-disable */
import { add, multiply, subtract, divide, bignumber } from 'mathjs';
export default {
  // 加
  add(num1, num2) {
    return +add(bignumber(+num1), bignumber(+num2));
  },
  // 多个数相加
  multipleAdd(numArr) {
    if (numArr.length === 1) {
      return numArr[0];
    } else {
      return +add(...numArr.map((d) => bignumber(+d)));
    }
  },
  // 乘
  multiply(num1, num2) {
    // @ts-ignore
    return +multiply(bignumber(+num1), bignumber(+num2));
  },
  // 减
  subtract(num1, num2) {
    return +subtract(bignumber(+num1), bignumber(+num2));
  },
  // 除
  divide(num1, num2) {
       // @ts-ignore
    return +divide(bignumber(+num1), bignumber(+num2));
  },
  // 科学计数法转数字
  getFullNum(num) {
    // 处理非数字
    if (isNaN(num)) {
      return num;
    }
    // 处理不需要转换的数字
    const str = '' + num;
    if (!/e/i.test(str)) {
      return num;
    }
    return num.toFixed(18).replace(/\.?0+$/, '');
  },
};
