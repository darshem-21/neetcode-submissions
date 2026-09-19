class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let h= new Map()

        for(let i of nums){
            if(h.has(i)){
                return true
            }
            else{
                h.set(i,1)
            }
        }
        return false
    }
}
