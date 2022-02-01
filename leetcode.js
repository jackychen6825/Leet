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

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const output = []
    
    //tree must be empty 
    if (!root) return output;
    
    const helper = root => {
        output.push(root.val); //add the root node's val first 
        
        let children = root.children;
        //iterate through its children? 
        for (let i = 0; i < children.length; i++) {
            //need to call help on this bitch/
            helper(children[i])
        }
        
        //once it has done it for its children do it for thecurr node 
        
    }
    
    helper(root);
    return output;
};

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    //if s is just one char or no chars, return it;
    if (s.length <= 1) return s;
    
    let stack = [s[0]] //initialize a stack with the first letter of s 
    
    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length-1] === s[i]) {
            //if the last element in the stack is equal to the first element of the string, pop it off the stack;
            
            stack.pop();
        } else {
            //otherwise not adjacent pairs, so just add on 
            stack.push(s[i])
        }
    }
    
    return stack.join('');
    
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    //initialize the queue with an item in it 
    const queue = [root]
    
    //initialize while loop that runs while the queue is not empty 
    while (queue.length) {
        const curr = queue.shift() //take the first element from the queue
        if (curr.val === val) return curr;
        //if you're here, then the curr node is not the right node so add its children 
        //in this case children = right or left 
        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right)
    }
    
    //if nothing can be found simply return null
    return null;
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    //recursive base case - what if both preorder and inorder are empty?
    if (preorder.length === 0 && inorder.length === 0) return null;

    //in the preorder the root node is at index 0
    let rootVal = preorder[0];
    //initialize a tree node with the rootVal;
    let root = new TreeNode(rootVal);
    //find the index of the rootval in the inorder arr
    let rootIdx = inorder.indexOf(rootVal);
    //everything left in the inorder arr must be in the left subtree and vice versa
    let leftTreeInorder = inorder.slice(0, rootIdx);
    let rightTreeInorder = inorder.slice(rootIdx + 1);

    //now we need to extract from the preorder arr for both left and right subtrees 
    let leftTreePreOrder = preorder.filter(val => leftTreeInorder.includes(val))
    let rightTreePreOrder = preorder.filter(val => rightTreeInorder.includes(val))

    //finally we can make the recursive call?
    let leftSubTree = buildTree(leftTreePreOrder, leftTreeInorder);
    let rightSubTree = buildTree(rightTreePreOrder, rightTreeInorder);

    //connect the trees 
    root.left = leftSubTree;
    root.right = rightSubTree;

    return root;

};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            let second = nums[j];
            let absolute;
            if (first - second < 0) {
                absolute = (first - second) * -1;
            } else {
                absolute = first - second 
            }
            
            if (absolute === k) count++
        };
    };
    
    return count;
};

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const output = [first];
    
    for (let i = 0; i < encoded.length; i++) {
        output[i+1] = output[i] ^ encoded[i];
    }
    
    return output;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
     const output = [];
    
    //would like to increment i by 2 
    for (let i = 0; i < nums.length; i += 2) {
        //grab the freq and val to be pushed 
        const freq = nums[i];
        const val = nums[i+1];
        //push the val the appropriate number of times
        for (let times = 0; times < freq; times++) {
            output.push(val);
        };
    };
    
    return output;
};

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    
   for (let i = 0; i < nums.length; i++) {
       const idx = index[i];
       const num = nums[i];
       
       if (target[idx] === null) {
           //since there is no val in the target arr at that index insert 
           target[idx] = num;
       } else {
           //there is a val there 
           const firstHalf = target.slice(0, idx); //grab everything except for the index
           firstHalf.push(num); //add in nums 
           const secondHalf = target.slice(idx); //grab everything from the second half 
           //bring everything together 
           target = [...firstHalf, ...secondHalf];
       };
   };
    
    return target;
};

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(" ");
    const hash = {}, ans = [];
    
    for (let i = 0; i < words.length; i++) {
        const pos = words[i].slice(-1);
        hash[pos] = words[i].slice(0, words[i].length-1);
    }
    
    Object.keys(hash).sort((a,b) => a-b).forEach(pos => {
        ans.push(hash[pos]);
    });
    
    return ans.join(' ');
};

var arrayStringsAreEqual = function(word1, word2) {
    let str1 = "", 
        str2 = "";
    
    let maxLength = Math.max(word1.length, word2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (word1[i]) str1 += word1[i];
        if (word2[i]) str2 += word2[i];
    };
    
    return str1 === str2;
};

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedArr = allowed.split("");
    let count = 0; 
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        count++;
        
        for (let j = 0; j < word.length; j++) {
            const char = word.charAt(j); 
            if (!allowedArr.includes(char)) { 
                count--; 
                break; 
            };
        };
    };
    
    return count;
};

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const rods = []; //initalize the rods arr;
    let count = 0; //this is going to be the answer;
    
    for (let i = 0; i < rings.length; i += 2) { //iterate through rings
        const color = rings.charAt(i); //char at this idx 
        const pos = rings.charAt(i+1);
        
        if (!rods[pos]) { //if there is nothing there 
            rods[pos] = [color]; //if there is nothing there init an arr with the color 
        } else {
            //there already is something there;
            rods[pos].push(color); 
        };
    };
    
    //hence rods is now an arr of arrs;
    for (let i = 0; i < rods.length; i++) {
        const rod = rods[i];
        if (rod) {
            if (rod.includes('R') && rod.includes('G') && rod.includes('B')) count++
        };  
    };
        
    
    return count;
};

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
    //using a new set data structure an obj with only keys 
    let set = new Set();
    
    for (let i = 0; i < sentence.length; i++) {
        set.add(sentence[i]); //it seems like a set cannot have repeat vals 
    };
    
    if (set.size === 26) return true; 
    return false;
    
};

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        if (isPalindrome(word)) return word;
    };
    
    return "";
};

var isPalindrome = function(word) {
    //check the if the reverse word is just like the word;
    let reverse = word.split('').reverse().join('');
    return word === reverse; //will return a boolean    
};

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase(); //lmaoo what the fuckkk 
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false; //given an empty list 
    
    let hashMap = new Map();
    while(head) {
        if (hashMap.has(head)) { //if it has the node?
            return true;
        } else {
            hashMap.set(head, true) //node becomes the key and the val is true 
            head = head.next;
        };
    };
    
    return false;
};