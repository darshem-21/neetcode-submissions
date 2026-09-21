class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let h1 = new Map()
        let h2 = new Map()

        for(let i of s){
            if(h1.has(i)){
                h1.set(i, h1.get(i) + 1)
            }
            else{
                h1.set(i,1)
            }
        }

        for(let i of t){
            if(h2.has(i)){
                h2.set(i, h2.get(i) + 1)
            }
            else{
                h2.set(i,1)
            }
        }

        if(h1.size !== h2.size){
            return false
        }

        for(let key of h1.keys()){
            if(!h2.has(key)){
                return false
            }
            else if(h1.get(key) !== h2.get(key)){
                return false
            }
        }


        return true
    
    }
}
