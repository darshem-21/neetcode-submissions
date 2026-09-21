class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let h1 = s.split("").sort()
        let h2 = t.split("").sort()
        if(h1.length !== h2.length){
            return false
        }

        for(let i=0; i<h1.length;i++){
            if(h1[i] !== h2[i]){
                return false
            }
        }
        

        return true
    
    }
}
