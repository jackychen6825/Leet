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

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) goodPairs += 1
        }
    }
    
    return goodPairs;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let counts = {}, ans = [];
    
    for (let i = 0; i < nums.length; i++) {``
        if (counts[nums[i]]) {
            counts[nums[i]] += 1
        } else {
            counts[nums[i]] = 1
        }
    }
    
    for (let j = 0; j < nums.length; j++) {
        let lessThanCount = 0;
        Object.keys(counts).forEach(key => {
            if (key < nums[j]) lessThanCount += counts[key]
        })
        ans.push(lessThanCount)
    }
    
    return ans;
};

