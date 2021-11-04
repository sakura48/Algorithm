/**
 * Input:  candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 */

const solucation = (candidates,target) => {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }

    dfs(target, [], 0);
    return ans;
}

const solucation2 = (candidates,target) => {
    const ans = [];
    const dfs = (target, combine) => {
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 选择当前数
        for(let i = 0; i < candidates.length; i++ ){
            if (target - candidates[i] >= 0) {
                dfs(target - candidates[i], [...combine, candidates[i]]);
            }
        }
    }

    dfs(target, [], 0);
    return ans;
}

const solucation3 = (candidates,target) => {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }
    dfs(target, [], 0);
    return ans;
}

console.log(solucation2([2,3,5],8))