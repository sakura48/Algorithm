/**
 * Input:  digits = [1,2,3]
 * Output: [1,2,4]
 */

const solucation = (digits) => {
    if(digits[digits.length - 1] + 1 === 10){
        for(let i = digits.length - 1; i >= 0; i--){
            if(digits[i] === 9){
                digits[i] = 0
                if(i === 0){
                    digits.unshift(1)
                }
            } else{
                digits[i] += 1
                break
            }
        }
    } else{
        digits[digits.length - 1] += 1
    }
    return digits
}

console.log(solucation([9,9]))
