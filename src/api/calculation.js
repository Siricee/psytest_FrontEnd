/**
 * 两个变量的卡方检验函数
 * @param a
 * @param b
 * @param c
 * @param d
 * @returns {number}
 */

export const K2test = (a,b,c,d)=>{
  let bottom = (a+b)*(c+d)*(a+c)*(b+d);
  return 4*Math.pow(a*d-b*c,2)/bottom
};
