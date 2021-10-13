/**
 *给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。如果反转后整数超过 32 位的有符号整数的范围，就返回 0。
 * Input: x = 123
 * Output: 321
 * Input: x = -123
 * Output: -321
 */

const solucation1 = (x) => {
    let str = x.toString()
    let arr = [...str].reverse()
    let result = x >= 0 ? parseInt(arr.join('')) : -parseInt(arr.join(''))
    if((result > Math.pow(2,31) - 1) || (result < Math.pow(-2,31))){
        return 0
    }
    return result
}

const solucation2 = (x) => {
    let result = 0
    let num = x
    while(num !== 0){
        result = result * 10 + num%10
        num = parseInt(num/10)
        if((result > Math.pow(2,31) - 1) || (result < Math.pow(-2,31))){
            return 0
        }
    }
    return result
}

console.log(solucation1(-123))
console.log(solucation2(-123))