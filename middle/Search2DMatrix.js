/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
 * Output: true
 */

const solucation = (matrix,target)=>{
    const m = matrix.length, n = matrix[0].length;
    for(let i=m-1,j=0;i>=0&&j<n;){
        if(matrix[i][j] === target)
            return true;
        else if(matrix[i][j] < target)
            j += 1;
        else
            i -= 1;
    }
    return false;
}