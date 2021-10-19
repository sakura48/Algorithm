/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 */

const solucation = (strs) => {
    if(strs.length > 1){
        let isOver = false
        let str = ''
        let num = 0
        do{
            for(let i = 1; i < strs.length; i++){
                if(!strs[i][num] || (strs[i][num] !== strs[i - 1][num])){
                    isOver = true
                    break
                }
            }
            if(!isOver){
                str += strs[0][num]
                num ++
            }
        }while(!isOver)
        return str
    }
    return strs[0]
}

console.log(solucation(["flower","flow","flight"]))

