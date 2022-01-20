/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    let maxCandies = 0;
    
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > maxCandies) maxCandies = candies[i]
    }
    
    for (let j = 0; j < candies.length; j++) {
        if (candies[j] + extraCandies >= maxCandies) {
            res.push(true)
        } else {
            res.push(false)
        }
    }
    
    return res;
};

