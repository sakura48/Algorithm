/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

const solucation1 = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    return false
}

const solucation2 = (nums, target) => {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]),i]
        }
        map.set(nums[i],i)
    }
    return false
}

const solucation3 = (nums, target) => {
    let leftIndex = 0
    let rightIndex = nums.length - 1
    while(leftIndex < rightIndex){
        if(nums[leftIndex] + nums[rightIndex] <= target){

            leftIndex++
        } else{
            rightIndex--
        }
    }

    return false
}

console.log(solucation1([2,7,11,15],9))
console.log(solucation2([2,7,11,15],9))