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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let counter = 0;
    let midCount;
    let ans = head;
    
    //check how long the linked list is
    while (head) {
        head = head.next
        counter += 1
    }
    
    //find the middle node 
    if (counter % 2 === 0) {
        midCount = counter / 2
    } else {
        midCount = Math.floor(counter/2) 
    }
    
    for (let i = 0; i < midCount; i++) {
        ans = ans.next;
    }
    
    return ans;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    
    const dfs = (root) => {
        //recursive case 
        if (root === null) return;
        
        //check the left case:
        if (root.left) {
            dfs(root.left)
        } 
        
        //check the curr node 
        if (root.val >= low && root.val <= high) {
            sum += root.val
        }
        
        //check the right node 
        if (root.right) {
            dfs(root.right)
        }
    }
    
    //return sum 
    dfs(root) 
    return sum;
    
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    const lonelyNodes = [];
    
    //traverse using depth first search 
    const dfs = (root) => {
        //recursive base case 
        if (root === null) return;
        
        //application to the left side 
        if (root.left) dfs(root.left)
        
        //application to the actual node 
        if (root.left && !root.right) {
            //left node is an only child 
            lonelyNodes.push(root.left.val)
        } else if (root.right && !root.left) {
            lonelyNodes.push(root.right.val)
        }
        
        //apply to the right node 
        if (root.right) dfs(root.right)
    }
    
    dfs(root)
    return lonelyNodes;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let arr = [];
    const getTree = (root) => {
        if (!root) return;
        
        if (root.left) getTree(root.left)
        
        arr.push(root.val)
        
        if (root.right) getTree(root.right)
    }
    
    getTree(root)
    
    const buildTree = arr => {
        if (arr.length === 0) return null;
        let tree = new TreeNode()
        tree.val = arr.shift()
        tree.right = buildTree(arr)
        return tree;
    }
    
    return buildTree(arr);
};  


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const j = jewels.split("")
    const s = stones.split("")

    let ans = 0;

    s.forEach(stone => {
        if (j.includes(stone)) ans += 1
    })

    return ans;
};

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let currIdx = 0 
    let index, 
        ans = '';
    
    //while the current index is less than the length of 
    while (currIdx < indices.length) {
        //iterate through indicies arr and find the curridx
        for (let i = 0; i < indices.length; i++) {
            if (indices[i] === currIdx) ans += s[i] //push on the associated str to ans 
            
        }
        
        currIdx += 1 //move on to the next index;
    }
    
    return ans;
};

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let ans = 0
    let currIndex = 0
    let time = 0
    
    //iterate through every letter of word 
    for (let i = 0; i < word.length; i++) {
        //find this letter within the alphabet - keyboard 
        for (let j = 0; j < keyboard.length; j++) {
            //if the char matches the letter then compute time etc
            if (word[i] === keyboard[j]) {
                ans += ((currIndex - j) ** 2) ** .5
                currIndex = j
            } //needs to be positive
            
        }
    }
    
    return ans 
};

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    
    return command.split('()').join('o').split('(al)').join('al')
    
};

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let ans = 0,
        count = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            count += 1
        } else {
            count -= 1
        }
        
        if (count === 0) ans ++
    }
    
    return ans
};

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {

    let ans = 0

    for (let i = 0; i < items.length; i++) {
        if (ruleKey === 'color') {
            if (items[i][1] === ruleValue) ans++

        } else if (ruleKey === 'type') {
            if (items[i][0] === ruleValue) ans++

        } else {
            if (items[i][2] === ruleValue) ans++

        }
    }

    return ans

};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;
    
    //iterate through linked list A
    while (pointerA) {
        while(pointerB) {
            if (pointerB === pointerA) {
                return pointerB
            } else {
                pointerB = pointerB.next;
            }
        }
        
        //has gone through all of the nodes once 
        //reset pointer b 
        pointerB = headB;
        //move to the next node for A
        pointerA = pointerA.next
    }
    
    //the while loop has exited so no intersecting nodes 
    return null
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointerToA = headA,
        pointerToB = headB
    
    while (pointerToA !== pointerToB) {
        pointerToA = pointerToA === null ? headB : pointerToA.next
        pointerToB = pointerToB === null ? headA : pointerToB.next
    }
    
    return pointerToA 
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head
    
    let prev = head,
        curr = head.next
    
    while (curr) {
        if (prev.val === curr.val) {
            //do i need temp?
            // let temp = curr;
            prev.next = curr.next
            curr = curr.next
            // temp = null
        } else {
            prev = prev.next
            curr = curr.next
        }
    }
    
    return head
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const values = []
    let first, second;
    
    while (head) {
        values.push(head.val)
        head = head.next;
    }

    
    if (values.length % 2 === 0) {
        let midIdx = values.length / 2
        first = values.slice(0, midIdx)
        second = values.slice(midIdx, values.length)
    } else {
        let midIdx = Math.floor(values.length / 2)
        first = values.slice(0, midIdx)
        second = values.slice(midIdx + 1, values.length)
    }
    
    for (let i = 0; i < first.length; i++) {
        let j = first.length-1 - i
        if (first[i] !== second[j]) return false 
    }
    
    return true 
    
};

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const map = {}
    
    edges.forEach(edge => {
        let [e1, e2] = edge
        
        if (map[e1]) return e1
        if (map[e2]) return e2
        
        map[e1] = true
        map[e2] = true
    })
    
    console.log(map)
};

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    //lets try the easy version first and then move on to stacks
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                prices[i] = prices[i] - prices[j];
                break;
            }
        }
    }
    
    return prices;
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const output = []; 
    
    if (!root) return output;
    
    const helper = (node) => {
        //need to visit the node's children 
        let children = node.children;
        
        
        //this part is the defining char of bfs
        for (let i = 0; i < children.length; i++) {
            //recursive call to the children -- this will hit the depth because it will keep calling this helper on its children 
            helper(children[i]);
        }
        
        output.push(node.val);
    }
    
    helper(root);
    
    return output;
    
};