/**
 *罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 *   字符          数值
 *   I             1
 *   V             5
 *   X             10
 *   L             50
 *   C             100
 *   D             500
 *   M             1000
 *
 *   Input:"MCMXCIV"
 *   Output: 1994
 */

const solucation = (s) => {
    const map = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let num = 0
    let arr = [...s]
    while(arr.length !== 0){
        if(arr.length > 1 && (map[arr[arr.length-1]] > map[arr[arr.length-2]])){
            num += map[arr[arr.length-1]] - map[arr[arr.length-2]]
            arr.pop()
        } else{
            num += map[arr[arr.length-1]]
        }
        arr.pop()
    }
    return num
}

console.log(solucation("MCMXCIV"))