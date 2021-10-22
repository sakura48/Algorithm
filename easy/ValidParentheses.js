/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * Input: s = "()[]{}"  s = "{[]}"  s="(([]){})"
 * Output: true
 */

const solucation = (s) => {
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    let arr = [s[0]]
    for(let i = 1; i < s.length; i ++){
        if(arr.length > 0 && map[arr[arr.length - 1]] === s[i]){
            arr.pop()
        } else{
            arr.push(s[i])
        }
    }
    return arr.length === 0
}


console.log(solucation("(([]){})"))