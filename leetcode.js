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


var MyHashSet = function() {
    this.set = new Array(1000); //make a new arr of size 1000;
    this.set.fill(false); //fill the arr with false values 
    this.hash = (input) => {
        return input % 769 //mod by a prime number to reduce collisions 
    };
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    //this.hash(key) - given a input return the hashed output
    //key into that index of the arr 
    if (this.set[this.hash(key)]) {
        let node = this.set[this.hash(key)]; //linked list at the arr so grab the head
        while(node.next) { //while there is a node.next keep traversing
            if (node.val === key) return; //if there is already something within the hash set with that val just do nothing since a set cannot contain dups
            node = node.next; //else there isnt so go on to the next until you hit null
        };
        
        //we are at the final node 
        if (node.val === key) return;
        
        //set the next node 
        node.next = {
            val: key, 
            next: null
        };
        
    } else {
        //there is nothing at that index so just set it
        this.set[this.hash(key)] = {
            val: key, 
            next: null
        };
    };
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    //want to remove a value from a hash set?
    let node = this.set[this.hash(key)];
    let prev = undefined;
    
    while (node) {
        if (node.val === key) {
            if (prev) {
                prev.next = node.next; //remove the node from the linked list 
            } else {
                this.set[this.hash(key)] = node.next; //remove node from the begin.
            }
        }
        
        prev = node;
        node = node.next;
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let node = this.set[this.hash(key)]; //get the root node
    while(node) {
        if (node.val === key) return true;
        node = node.next;
    };
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


var MyHashMap = function() {
    this.maxSize = 10000;
    this.buckets = [];
    for (let i = 0; i < this.maxSize; i++) {
        this.buckets.push(new BasicHashMap());
    }
};

MyHashMap.prototype.getHashVal = function(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i) * i;
    };
    
    return hash;
};

MyHashMap.prototype.getBucketIndex = function(key) {
    return this.getHashVal(key) % this.maxSize;
}

MyHashMap.prototype.getBucket = function(key) {
    return this.buckets[this.getBucketIndex(key)];
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const basicBucket = this.getBucket(key);
    basicBucket.set(key, value);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const basicBucket = this.getBucket(key);
    return basicBucket.get(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const basicBucket = this.getBucket(key);
    basicBucket.delete(key);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var BasicHashMap = function() {
    this.keys = [];
    this.values = [];
};

BasicHashMap.prototype.set = function(key, value) {
   
    let isPresent = false;
    for (let i = 0; i < this.keys.length; i++) {
        if (this.keys[i] === key) {
            //if already there switch with the new value 
            this.values[i] = value;
            isPresent = true;
        };
    }; 
    
    if (!isPresent) {
        this.keys.push(key);
        this.values.push(value);
    };  
};

BasicHashMap.prototype.get = function(key) {
    for (let i = 0; i < this.keys.length; i++) {
        if (this.keys[i] === key) return this.values[i];
    };
    
    return -1;
};

BasicHashMap.prototype.delete = function(key) {
    let index = this.keys.indexOf(key);
    if (index > -1) {
        this.keys.splice(index, 1);
        this.values.splice(index, 1);
    };
};

/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    }; 
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function(head) {
    //recursive solution 
    traverseNode(head);
};

var traverseNode = function(node) {
    if (!node) return; //base case - what is the simplest?
    const next = node.getNext();  //get the next node 
    traverseNode(next);
    node.printValue();
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
 * @return {number}
 */
var pairSum = function(head) {
    const nodes = [];
    const reversed = [];
    
    //get the val of each node 
    while (head) {
        nodes.push(head.val);
        head = head.next;
    };
    
    //get the nodes in reverse order;
    for (let i = nodes.length-1; i >= 0; i--) {
        const node = nodes[i];
        reversed.push(node);
    };
    
    let midIdx = nodes.length;
    let maxSum = -Infinity;
    
    for (let i = 0; i < midIdx; i++) {
        const twin1 = nodes[i];
        const twin2 = reversed[i];
        const sum = twin1 + twin2;
        if (maxSum < sum) maxSum = sum;
    };
    
    return maxSum;
    
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
 * @return {number}
 */
var pairSum = function(head) {
    //find the mid point 
    let slow = head, fast = head;
    
    while (fast) {
        slow = slow.next; //move this one progression
        fast = fast.next;
        if (fast) fast = fast.next;  
    };
    
    let prev = null,
        curr = slow; //the slow pointer is currently at mid
    while (curr) {
        const nextNode = curr.next;
        curr.next = prev; //begins with nothing
        prev = curr //change prev
        curr = nextNode; //had this stored;
    };
    
    let max = -Infinity;
    while (head && prev) {
        max = Math.max(max, head.val + prev.val);
        head = head.next;
        prev = prev.next;
    }
    
    return max;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let currIdx = 0, 
        prev = undefined,
        curr = list1,
        connectorNode;
    
    while (curr) {
        if (currIdx === a) {
            prev.next = list2;
        };
        
        if (currIdx === b) {
            connectorNode = curr.next;
            break;
        };
        
        currIdx++;
        prev = curr;
        curr = curr.next;
    };
    
    //we need to connect list 2 with list 1 at the connector node 
    while (list2) {
        if (!list2.next) {
            list2.next = connectorNode;
            break;
        };
        
        list2 = list2.next;
    };
    
    return list1;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    
    //make adjacency matrix 
    edges.forEach(([a,b]) => {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push(b);
        graph.get(b).push(a);
    });
    
    //since bi-directional, we need to prevent revisiting nodes
    let visited = [];
    let queue = [source];
    while (queue.length > 0) {
        let curr = queue.shift();
        if (curr === destination) return true;
        visited[curr] = true;
        
        graph.get(curr).forEach((neighbor) => {
            if (!visited[neighbor]) queue.push(neighbor)
        })
    }
    
    return false;
};

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (!trust.length && n === 1) return 1
    
    const trustMap = {};
    trust.forEach(([a, b]) => {
        if (!trustMap[a]) {
            trustMap[a] = [b];
        } else {
            trustMap[a].push(b);
        };
    });
    
    const trustCount = {};
    trust.forEach(([a, b]) => {
        if (!trustCount[b]) {
            trustCount[b] = 1;
        } else {
            trustCount[b]++
        };
    });
    
    for (const ind in trustCount) {
        if (trustCount[ind] === n-1 && !trustMap[ind]) return ind;
    };
    
    return -1;
};

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length < n-1) return -1; //need at least n-1 trusts to have a town judge 
    
    const indegrees = new Array(n+1);
    indegrees.fill(0);
    const outdegrees = new Array(n+1); 
    outdegrees.fill(0);
    
    trust.forEach(([a, b]) => {
        indegrees[b]++
        outdegrees[a]++
    });
    
    for (let i = 1; i <= n; i++) {
        if (indegrees[i] === n-1 && outdegrees[i] === 0) return i;
    };
    
    return -1
};

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const result = [];
    dfsHelper(0, [], graph, result);
    return result;
    
};

var dfsHelper = function(currNodeIdx, currPath, graph, result) {
    const target = graph.length-1;
    if (currNodeIdx === target) {
        result.push(currPath.concat(currNodeIdx));
        return
    };
    
    //iterate through the neighbors 
    for (let i = 0; i < graph[currNodeIdx].length; i++) {
        dfsHelper(
            graph[currNodeIdx][i],
            currPath.concat(currNodeIdx),
            graph, 
            result
        );
    };
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const graph = new Array(n);
    graph.fill(0);
    
    for (let [from, to] of edges) {
        graph[to]++ 
    };
    
    const results = [];
    for (let i = 0; i < graph.length; i++) {
        if (graph[i] === 0) results.push(i)
    };
    
    return results;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let sum = nums[0];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        if (sum > max) max = sum;
    };
    
    return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxLength = 0,
        stack = []; //here we are implementing a stack w arr
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") stack.push('(');
        if (s[i] === ")") stack.pop();
        
        if (stack.length > maxLength) maxLength = stack.length;
    };
    
    return maxLength;
};

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
//     Input: target = [1,3], n = 3
    // Output: ["Push","Push","Pop","Push"]
    // Explanation: 
    // Read number 1 and automatically push in the array -> [1]
    // Read number 2 and automatically push in the array then Pop it -> [1]
    // Read number 3 and automatically push in the array -> [1,3]
    
    //instantiate a arr called clone and try to match it with target 
    
    //iterate in a for loop from 1 to n inclusive and if the value ie i exist within the arr simply push otherwise push and pop if its not in the target arr at every iteration check clone with target and return operations arr if clone == target 
    
    let clone = [],
        operations = [];
    
    //init for loop 
    for (let i = 1; i <= n; i++) {
        if (target.includes(i)) {
            clone.push(i);
            operations.push('Push')
        } else {
            //target does not include i therefore 
            operations.push('Push', 'Pop')
        };
        
       if ( isArrEqual(clone, target)) break;
        
    }
    
    return operations;

};

var isArrEqual = (arr1, arr2) => {
    if (arr1 === arr2) return true;
    if (!arr1 || !arr2) return false;
    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    };
    
    return true;
}

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    // Input: ops = ["5","2","C","D","+"]
    // Output: 30
    // Explanation:
    // "5" - Add 5 to the record, record is now [5].
    // "2" - Add 2 to the record, record is now [5, 2].
    // "C" - Invalidate and remove the previous score, record is now [5].
    // "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
    // "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
    // The total sum is 5 + 10 + 15 = 30.
    
    //create a record arr that holds all the scores across rounds 
    let record = [];
    //iterate through the ops check each operation and perform oper on the record arr 
    ops.forEach(op => {
        if (op === '+') {
            record.push(record[record.length-1] + record[record.length-2])
        } else if (op === 'D') {
            record.push(record[record.length-1] * 2)
        } else if (op === 'C') {
            record.pop()
        } else {
            record.push(parseInt(op))
        }
    })
    //return sum of record arr 
    const reducer = (val1, val2) => val1 + val2;
    console.log(record)
    return record.reduce(reducer)
    
};

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    
    
    //we will need a while loop for this, continue looping until either students or sandwiches are empty or when all the students have the same preference and there are no more sandwiches of this preference left 
    let completed = false;
    
    console.log(isArrConsistent(students))
    
    while (!completed) {
        if (students.length === 0 || sandwiches.length === 0 || (isArrConsistent(students) && students[0] !== sandwiches[0])) completed = true;
        
        let pref = students[0]
        let topSandwich = sandwiches[0]
        
        if (pref === topSandwich) {
            students.shift();
            sandwiches.shift();
        } else {
            let firstStudent = students.shift()
            students.push(firstStudent)
        }
    }
    
    return students.length
    
};

//do all the students have the same prefernce?
var isArrConsistent = (arr) => {
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) return false
    }
    
    return true;
}

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    //create a stack variable implmented by an arr 
    let stack = ['main']; //O(1)
    //iterate through the logs arr 
    logs.forEach(op => { //O(N) where n is the length of the log 
        if (op === '../') {
            if (stack[stack.length-1] !== 'main') stack.pop()
        } else if (op === './') {
            //do nothing 
        } else {
            stack.push('random folder')
        };
    })
    //for each action within the logs arr perform it using conditionals
    
    //return the length of the stack-1 that is how many steps you need to return back to the main folder 
   return stack.length-1 //O(s) where s is the length of the stack 
};

//o (n+s)
//no one gives a fuck abt space complexity

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
var postorderTraversal = function(root) {
    //post order traversal is when we hit left, right and then middle 
    
    //make recursive base case - the simplest thing ie no root 
    
    //call function on the left side 
    //call function on the right side 
    //call function on the root node 
    
    //need to init arr and push values into it as we traverse 
    
    var postOrderVal = [];
    
    //helper function 
    var postOrder = root => {
        if (!root) return; 
        
        if (root.left) postOrder(root.left)
        if (root.right) postOrder(root.right)
        postOrderVal.push(root.val);
    }
    
    postOrder(root)
    
    return postOrderVal;
    
};

//time complexity - we need to iterate through every node so o(n) where n = num nodes 

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
var preorderTraversal = function(root) {
    
    var preOrderVal = [];
    
    const helper = root => {
        if (!root) return; 
        
        preOrderVal.push(root.val)
        helper(root.left)
        helper(root.right)
    }
    
    helper(root);
    return preOrderVal;
};

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    
    //create a while loop and loop over the function and continue to do so until a condition is met ie there are no more adjacent char with one be upper and the other being lower case 
    
    let isCompleted = false;
    
    while (!isCompleted) {
        isCompleted = true;
        
        for (let i = 1; i <= s.length-1; i++) {
            let prev = s[i-1],
                curr = s[i],
                next = s[i+1];
            if (prev && curr) {
                if (prev.toLowerCase() === curr.toLowerCase() && areOpposite(prev, curr)) {
                    const first = s.split('').slice(0, i-1).join('');
                    const second = s.split('').slice(i+1).join('');
                    s = first + second;
                    isCompleted = false; 
                    break;
                } 
            }
                
            if (next && curr) {
                if (next.toLowerCase() === curr.toLowerCase() && areOpposite(next, curr)) {
                    const first = s.split('').slice(0, i).join('');
                    const second = s.split('').slice(i+2).join('');
                    s = first + second;
                    isCompleted = false;
                    break;
                };
            }
            
        };
    };
    
    return s;
    
    //keep track of the curr char the next char and the prev char and compare them seperately 
    
    //if they match the conditions then ... how do we write this condition though? -> helper function 
    
    //break apart the input and bring it back together without the bad characters 
    
    //return the string s as a good string 
    
};

var areOpposite = (c1, c2) => {
    let upper1, upper2;
    
    if (c1.toUpperCase() === c1) upper1 = true;
    if (c2.toUpperCase() === c2) upper2 = true;
    
    return upper1 !== upper2; 
}

//time complexity = o ( b * s) where b is the num of bad substrings and s is the length of the str although s will decrease with time 

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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    
    //need a helper function 
    var helper = (root, currPath) => {
        //base case 
        if (!root) {
            return;
        };
        
         let newPath = currPath + root.val;
        
        if (!root.left && !root.right) {
            sum += parseInt(newPath, 2);
            return;
        };
        
       
        
        let left = root.left 
        helper(left, newPath);
        
        let right = root.right 
        helper(right, newPath);
    }
    
    
    var sum = 0;

    helper(root, '')
    
    return sum;
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
 * @return {number}
 */
var maxDepth = function(root) {
    const helper = (root, path) => {
        if (!root) return;
        
        let newPath = path.concat(root.val);
        
        if (root.children.length === 0) {
            if (maxLength < newPath.length) {
                maxLength = newPath.length;
                return;
            };
        };
        
        root.children.forEach(child => {
            helper(child, newPath);
        });
        
    }
    
    var maxLength = 0;
    helper(root, []);
    return maxLength;
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    var uniValue = root.val;
    
    const queue = [root];
    
    while (queue.length) {
        let curr = queue.shift();
        
        if (curr.val !== uniValue) return false;
        
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }

    return true;    
    
    //time complexity o(n) where n is the num of nodes in this tree 
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
var averageOfLevels = function(root) {
    
    //using bfs we set a queue and push in values 
    
    //for each row we also initialize a next arr that holds the children of the. curr rows nodes 
    
    //when we finish iterating through the curr row we set the queue to the next arr which represents the net row
    
    let answer = [],
        queue = [root];
    
    while (queue.length) {
        let next = [], sum = 0;
        //iterate through the curr queue;
        for (let node of queue) {
            sum += node.val;
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        };
        //when the loop is completed this level is done
        answer.push(sum / queue.length);
        queue = next;
    };
    
    return answer;
    
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    
    //we have pointers for left and right that denote a subarr within nums that has been split by the median 
    
    //the left pointer doesnt move for the left subtree but the right pointer is always getting smaller, so left is always 0 however, the right pointer can be -1 if the mid index is 0 meaning that the arr is empty that is the base case 
    
    //otherwise we make a new node with the middle index and set the left and right subtrees and then return that node 
    
    //however to set the left and right subtrees we need to make a recursive call therefore, we can build the tree. with the bottom most nodes first and movigin up 
    
    var helper = (left, right) => {
        if (left > right) return null; //arr is empty
        
        //find the median given this left and right sub arr 
        const medianIdx = Math.floor((left + right) / 2);
        let node = new TreeNode(nums[medianIdx]);
        //set the left and right subtrees 
        node.left = helper(left, medianIdx-1);
        node.right = helper(medianIdx+1, right);
        return node;
    }
    
    return helper(0, nums.length-1);
    
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    //init arrays to hold the leaf value sequence of both trees
    var leaf1 = [], leaf2 = [];
    
    //we can use dfs to traverse both trees and add the val of the leaf nodes
    
    const helper1 = root => {
        if (!root) return;
        
        if (!root.right && !root.left) {
            //root node must be a tree node 
            leaf1.push(root.val)
        };
        
        helper1(root.left);
        helper1(root.right);
    };
    
    
    const helper2 = root => {
        if (!root) return;
        
        if (!root.right && !root.left) {
            //root node must be a tree node 
            leaf2.push(root.val)
        };
        
        helper2(root.left);
        helper2(root.right);
    };
    
    helper1(root1);
    helper2(root2)
    
    
    //we can define a leaf node as a node with no children so left and right are null
    //when we have both arrays we just iterate through one arr and ensure that the other arr has matching values if at any point they do not match, we return false 
    //find the longer 
    
    let maxLength = Math.max(leaf1.length, leaf2.length)
    
    for (let i = 0; i < maxLength; i++) {
        if (leaf1[i] !== leaf2[i]) return false;
    };
    
    return true;
    
    //upon completion we return true because. every node matched 
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    
    
    //traverse through the entirety of the binary search tree 
    
    //how do we wish to traverse this tree? - imma go with bfs 
    const queue = [root];
    var values = [];    
    
    while (queue.length) {
        const curr = queue.shift();
        values.push(curr.val);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    };
    
    //hold all of the values within an arr 
    
    //iterate through the arr and see if any two numbers add up to the value 
    
    //how exactly do we iterate through this arr? begin with the first ele and check it as a pair with every other ele if last ele simply stop 
    
    for (let i = 0; i < values.length; i++) {
        for (let j = i+1; j < values.length; j++) {
            if (values[i] + values[j] === k) return true;
        };
    };
    
    return false;
    
    //nested for loop tho so it wil lbe kinda slow 
    
    
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
 * @return {number}
 */
var findTilt = function(root) {
    if (!root) return 0;
    //init a variable sum that keeps track of the sum 
    let tilt = 0;
    //find the sum of the left and right subtrees 
    
    //need a helper function to help traverse the tree using dfs and then apply tree sum to the tree's children and then make changes to tilt 
    
    let queue = [root];
    
    while (queue.length) {
        let curr = queue.shift();
        
        let left = curr.left;
        let right = curr.right;
        
        //find the sub tree sum 
        
        let leftSum = treeSum(left);
        let rightSum = treeSum(right);
        
        let absolute = Math.pow(Math.pow((leftSum - rightSum), 2), .5);
        tilt += absolute;
        
        if (left) queue.push(left);
        if (right) queue.push(right);
    };
    
    //make a helper function to find the sum of any subtree 
    
    //traverse the tree with dfs and apply this helper to every subtree of the nodes we traverse
    
    
    return tilt;
};

//time complexity - we need to traverse through every node and for each node we even need to traverse through every subtree of the tree 

//say the length of the tree is t then we progressively traverse thru less and less nodes 

//its more than t but not quite t^2 as that would mean that for every node we would traverse through the entire t so between t and t^2 maybe tlogt?




var treeSum = root => {
    if (!root) return 0;
    //to find the sum of the values of a binary tree 
    
    let queue = [root],
        sum = 0;
    
    //use a queue and init a sum variable 
    while (queue.length) {
        const curr = queue.shift();
        sum += curr.val;
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
    //traverse bfs style and increase sum for each node and then return sum 
    return sum; 
}

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var paths = [];
    
    const helper = (root, path) => {
        if (!root) return 
        
        const newPath = path.concat(root.val);
        
        if (!root.left && !root.right) paths.push(newPath);
        
        helper(root.left, newPath);
        helper(root.right, newPath);
    }
    
    helper(root, []);

    return paths.map(path => path.join('->'));
    
    //since we are just traversing the entirety of the tree, o n where n is the num of nodes of the tree 
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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    
    let queue = [root],
        deepestSum;
    
    while (queue.length) {
        let next = [];
        let lvlSum = 0;
        
        for (const node of queue) {
            lvlSum += node.val
            
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        };
        
        deepestSum = lvlSum;
        queue = next;
    }
    
   return deepestSum;
};

//time complexity is o(n) we must traverse through every node and through each lvl

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.values = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    var sum = 0;
    
    for (let i = 0; i < vec.values.length; i++) {
        
        let val1 = this.values[i];
        let val2 = vec.values[i];
        sum += (val1 * val2);
    };
    
    return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);


/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
   this.default = [homepage]
    this.idx = 0 
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    if (this.idx !== this.default.length-1) {
        this.default = this.default.slice(0, this.idx+1);
    }
    
    this.default.push(url);
    this.idx++ //increment the index 
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    //num of steps one can move back = this.idx;
    if (this.idx < steps) {
        this.idx = 0 
    } else {
        this.idx = this.idx - steps;
    }
    
    return this.default[this.idx];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if (this.default.length-1 - this.idx < steps) {
        this.idx = this.default.length-1
    } else {
        this.idx = this.idx + steps;
    }
    
    return this.default[this.idx];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    //iterate through the two lists while either one has more nodes left 
    
    //need to use a carry and remember that we only keep he one's place for each list node 
    
    //initialize a place holder node 
    
    let linkedList = new ListNode(0),
        carry = 0;
    
    let result = linkedList;
    
    while (l1 || l2) {
        let sum;
        
        if (l1 && l2) {
            let val1 = l1.val, 
                val2 = l2.val;
            sum = val1 + val2 + carry;
        } else {
            if (l1) {
            //in the case that only l1 exists then 
            sum = l1.val + carry;
            } else {
                //in the case that only l2 exist then 
                sum = l2.val + carry;
            };
        }
        
        
        
        //need to account for carry here
        carry = Math.floor(sum / 10); 
        
        //create new list node, add to list and move to the end of the list 
        let newNode = new ListNode(sum % 10);
        linkedList.next = newNode;
        linkedList = linkedList.next; 
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    };
    
    if (carry) {
        let newNode = new ListNode(carry);
        linkedList.next = newNode;
    };
    
    return result.next;
    
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    //find all substrings and compare length if no repeats 
    
    let longestSubstring = "";
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j <= s.length; j++) {
            const substring = s.slice(i, j);
            const isValid = repeats(substring);
            
            if (isValid && substring.length > longestSubstring.length) longestSubstring = substring;
        }
    }
    
    
    return longestSubstring.length;
};

//helper function to determine if a string has characters that repeat

var repeats = function(string) {
    //iterate through the string and keep track of the values within a map 
    
    //if the value exist already return false 
    
    let map = new Map();
    
    for (let i = 0; i < string.length; i++) {
        if (map.has(string[i])) {
            return false;
        } else {
            map.set(string[i], true)
        };
    };
    
    return true;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    
    //sliding window begins at 0 for left and right 
    let left = 0, 
        right = 0;
    
    let longestLen = 0;
    
    while (right < s.length) {
        if (!map.has(s[right])) {
            map.set(s[right], true);
            let len = map.size
            if (len > longestLen) longestLen = len;
            right++
        } else {
            //the map includes the character so move the left side over one until it no longer contains the repeated char 
            map.delete(s[left++])
        };
    };
    
    return longestLen;
};

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    var lastIndexes = {};
    
    for (let i = s.length-1; i >= 0; i--) {
        const char = s[i];
        if (!lastIndexes[char]) {
            lastIndexes[char] = i;
        };
    };
    
    let partitions = [],
        end = 0,
        start = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (lastIndexes[char] > end) end = lastIndexes[char];
        
        if (end === i) {
            //make partition 
            partitions.push(end - start + 1);
            start = i+1;
            //end does not need to change here 
        };
    };
    
    return partitions;
    
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = [];
    
    var permutations = (perm = [], remaining = nums) => {
        if (remaining.length === 0) {
            res.push(perm);
            return; //when there is nothing remaining just push in the curr. permutation
        };

        for (const num of remaining) {
            permutations([...perm, num], remaining.filter(val => val !== num))
        };
    }

    permutations();
    return res;
};

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    
    patterns.forEach(str => {
        if (word.includes(str)) count++
    })
    
    return count;
};


var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
    this.front = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.stack1.length === 0) this.front = x;
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    //remove the first element from the front of the queue 
    
    if (this.stack2.length === 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        };
    };
    
    return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack2.length === 0 ? this.front : this.stack2[this.stack2.length-1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 * 
 * 
var MyStack = function() {
    this.queue = [];
    this.temp = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue.length > 1) {
        const val = this.queue.shift();
        this.temp.push(val);
    };
    
    //queue only has one val left 
    let ele = this.queue.shift();
    this.queue = this.temp;
    this.temp = []
    return ele;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var last = function(arr) {
    return arr[arr.length-1]; //just return the last element of this arr 
};

//we need to pair the curr min to the right of the curr val 
var MinStack = function() {
    this._stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    //when the stack is empty 
    if (this._stack.length === 0) {
        this._stack.push([val, val]);
        return; //return to end the process right here 
    }; //since there are no other elements, the val must be the minimum value no? 
    
    //otherwise we need to find the curr min 
    const currMin = last(this._stack)[1]; //return sthe curr min value
    if (val < currMin) {
        this._stack.push([val, val])
    } else {
        //here it must be that val > curr min so maintain the curr min 
        this._stack.push([val, currMin])
    };
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return last(this._stack)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return last(this._stack)[1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    //iterate through the str and place the values on a stack if the curr char is a # pop off from the stack otherwise push to the stack finally when iterations are complete ie traversed the entire strings return the values and compare 
    
    const sStack = [],
          tStack = [];
    
    s.split('').forEach(val => {
        if (val === '#') {
            sStack.pop();
        } else {
            sStack.push(val);
        };
    });
    
    t.split('').forEach(val => {
        if (val === '#') {
            tStack.pop();
        } else {
            tStack.push(val);
        };
    });
    
    return sStack.join("") === tStack.join("")
};

var last = arr => arr[arr.length-1]


var MaxStack = function() {
    this._stack = []
    this._max = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this._stack.push(x)
    
    if (this._max.length === 0) {
        this._max.push(x)
        return;
    }
    
    if (x >= last(this._max)) {
        this._max.push(x);
    };
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    const currMax = last(this._max)
    const popped = this._stack.pop()
    if (popped === currMax) {
        this._max.pop()
    }
    return popped
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return last(this._stack)
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return last(this._max)
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    const max = this._max.pop();
    const temp = []
    
    for (let i = this._stack.length-1; i >= 0; i--) {
        if (this._stack[i] === max) {
            this._stack.splice(i, 1)
            break;
        } else {
            temp.push(this._stack.pop())
        }
    }
    
    while(temp.length) {
        this.push(temp.pop())
    }
    
    return max;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    
    //derive the maximum value and its index 
    
    //find the left and right sub arrays 
    
    //instantiate a new tree node with the max val 
    
    //do recursive call on the left and right sides (subarrays)
    
    //must return tree node but base case would be if arr is empty which case return null 
    
    if (!nums.length) return null; 
    
    let max = -Infinity, 
        idx;
    nums.forEach((num, i) => {
        if (num > max) {
            max = num;
            idx = i;
        };
    });
    
    const left = nums.slice(0, idx);
    const right = nums.slice(idx+1);
    
    const newNode = new TreeNode(max);
    newNode.left = constructMaximumBinaryTree(left)
    newNode.right = constructMaximumBinaryTree(right)    
    return newNode;
    
};

/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.values = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    //push the values into the values arr 
    this.values.push(val);
    //determine the len of value arr
    const len = this.values.length;
    //determine the divisor based on the length 
    let divisor = Math.min(len, this.size)
    
    let sum = 0,
        count = 0
    
    //grab the last three values of the arr 
    for (let i = this.values.length-1; i >= 0; i--) {
        if (count === divisor) break;
        const val = this.values[i];
        count++ 
        sum += val
    }
    
    return sum / divisor;
    
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    //when the length of the queue is equal to the length of the sliding window remove the first elemtn from the queue and subtract from the sum then. simply return the sum of the queue divided by the length of the queue 
    
    this.queue.push(val); //push element to the back of the queue
    this.sum += val;
    if (this.queue.length > this.size) {
        this.sum -= this.queue.shift()
    };
    
    return this.sum / this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

//begin the class with an arr 
//arr with begin with time (t) = 0
//simply store t within an arr and then iterate through arr for. each ping request and return the values inclusive with a counter 


var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    
    //create the range here 
    const lowerBound = t-3000;
    // const upperBound = t
    
    let count = 0;
    this.requests.forEach(ping => {
        if (ping >= lowerBound && ping <= t) count++;
    });
    
    return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    // //if a value within the arr becomes zero remove that value from the arr 
    // we can iterate through the arr and decrement each element by 1 while increasing the count for each time we decrement, then when any value is 0 we simply keep the value to perserve the index however if we iterate over a zero we will just ignore it, we keep doing this until the value at the kth index is zero this will be o n when we remove everything so not bad 
    
    var time = 0;
    while (tickets[k] !== 0) {
        for (let i = 0; i < tickets.length; i++) {
            const val = tickets[i];
            
            //the issue is even tho this individual has completed, the for loop continues 
            
            //so for every iteration we need to check if the specified person has purchased allof his tickets already 
            if (tickets[k] === 0) break; //this really aint that fast lmao
            
            if (val !== 0) {
                //decrement val and increment counter 
                tickets[i] = val-1;
                time++;
            } 
        };
    };
    
    return time;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //how would we do this with a queue? 
    
    //for each char we push it to the back and if we find another char of the same value, we just remove it? in the end we jsut return the element at the beginning of the queue and only need to iterate through the str once? goddam sheesh this is fun lol
    
    const queue = [],
          removed = [];
    
    const original = s.split('') //turning into an arr for iterating fam 
    
    original.forEach(char => {
        //if both the queue and removed char arr doesn have this bitch then add it 
        if (!queue.includes(char) && !removed.includes(char)) {
            queue.push(char);
        } else {
            const idx = queue.indexOf(char);
            if (idx > -1) {
                queue.splice(idx, 1);    
            };
            removed.push(char);
        };
    });
    
    return queue.length ? original.indexOf(queue[0]): -1
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    //we are given a target node from the original tree 
    
    //then we are given the cloned tree and need to get the reference to the same node in the cloned tree 
    
    //first we need to determine where in the original tree the target node is located 
    
    //how do we determine that? 
    
    //iterate through the tree in breadth first search fashion 
    
    //each time you shift out a tree node  from the queue, increment a counter variable 
    
    //when you find the target node within the original tree return the counter variable 
    
    //do the same approach for the cloned tree except each time we shift out a tree we decrement the counter variable when the counter hits 0 that node is the reference to the same node in the cloned tree 
    
    const originalQueue = [original];
    var originalCounter = 0;
    
    while (originalQueue.length) {
        let currNode = originalQueue.shift();
        originalCounter++;
        
        if (currNode === target) break;
        
        if (currNode.left) originalQueue.push(currNode.left);
        if (currNode.right) originalQueue.push(currNode.right);
    };
    
    const clonedQueue = [cloned];
    var clonedCounter = originalCounter;
    
    while (clonedQueue.length) {
        let currNode = clonedQueue.shift();
        clonedCounter--;
        
        if (clonedCounter === 0) return currNode;
        if (currNode.left) clonedQueue.push(currNode.left)
        if (currNode.right) clonedQueue.push(currNode.right)
    };
    
    
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
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    //return the sum of the values of all node with even-valued grandparents 
    
    //so for each node we traverse through we simultaneously need to know its grandparent eh
    
    //how do we do this?
    
    //using a breadth first traversal we can get each level and level.i must be the grand parent of left i + 2 but we cant really tell who is the grand parent and which are the grand children so that wouldnt work 
    
    //since this is a binary tree, a node can have at most two children and four grand children 
    
    //we can iterate through each node using dfs and check its value, if it's even, then we find its grandchildren and add their values to the sum otherwise we keep traversing ok
    
    //lets make a helper function to find its grand chlildren and then just apply this helper function conditionally. to each node dfs style 
    
    const queue = [root];
    var sum = 0;
    
    var helper = (node) => {
        if (node.val % 2 !== 0) return; 

        const children = [];
        if (node.left) children.push(node.left);
        if (node.right) children.push(node.right);

        children.forEach(child => {
            if (child.left) sum += child.left.val;
            if (child.right) sum += child.right.val;
        });
    };
    
    while (queue.length) {
        const curr = queue.shift();
        helper(curr);
        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right)
    }
    
    return sum;
};

//create helper function here 

//given a node, find its grandchilden and add value to the sum if even otherwise ignore 

    
//dfs traversal

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
var bstToGst = function(root) {
    //given a binary search tree 
    
    //1.left subtree only has vals that are smaller than the curr node 
    
    //2. right subtree only has vals that are greater than the curr node 
    
    //3. both left and right subtrees are also bst
    
    //iterate through the tree in inorder fasion so go through the left subtree and then the curr node and then the right subtree 
    
    //each time simply just add the node to an arr 
    
    //thus the nodes will be arranged from smallest to largest 
    
    //example [smallest ... largest]
    
    //then we initialize a variable say currSum = 0 
    
    //iterate from the back of the subtree and we say 
    
    //hold the node val 
    
    //node.val += currSum 
    
    //increase curr sum 
    
    //then for node 7, currsum is 8 we change the value from 7 -> 15 because node.val + currsum = 15 and we keep doing this until the array has been iterate through in reverse order
    
    //return the root;
    
    var inOrderArr = [];
    
    var helper = node => {
        //we want to traverse the tree in inorder fashion 
        
        if (!node) return;
        
        helper(node.left);
        inOrderArr.push(node);
        helper(node.right);
    };
    
    helper(root);
    
    let currSum = 0;
    
    for (let i = inOrderArr.length-1; i >= 0; i--) {
        const curr = inOrderArr[i];
        const store = curr.val;
        curr.val += currSum;
        currSum += store;
    };
    
    return root;
    
};

/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = new Array(n);
    this.pos = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    //replace the array val at idKey with value 
    this.stream[idKey-1] = value;
    
    //need to return the longest possible arr 
    let response = [];
    while(this.pos < this.stream.length && this.stream[this.pos]) {
        response.push(this.stream[this.pos]);
        this.pos++;
    };
    
    return response;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    
    //use a pointer method 
    
    //[1 4 2 5 3]
    
    //start = 0 
    
    //end = 0
    
    //width = 1
    
    //while loop that loops until the width is greater than the len of the arr 
    
    //if end is greater than the len of the arr then we reset the start and end pointers with a new width ie width += 2
    
    let end = 0, 
        width = 0;
    
    let oddSubArrs = []; //will be an array of arrays 
    
    while (width <= arr.length) {
        for (let i = 0; i < arr.length; i++) {
            //setting the end of the sub arr 
            end = i + width + 1;
            if (end > arr.length) break; 
            //since the sub arr is valid simply push into the container of arrays and end 
            const subArr = arr.slice(i, end);
            oddSubArrs.push(subArr);
        };
        
        //reset variables 
        width += 2;
        end = 0; 
    }; 
    
    //above loop should execute until width exceeds the length of the entire arr 
    
    //oddSubArrs will now contain all possible sub arrays
    let sum = 0;
    oddSubArrs.forEach(sub => {
        sub.forEach(val => sum += val);
    });
    
    return sum;
    
};

//we need to keep iteration over the arr so that would be o(n) becaus we remove the coefficients 

//we  then iterate over all subarrays 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    
    //an anagram is when the other arr is comprised of the same values but in a randomized manner 
    
    //return a mappings (arr) where mappings[i] is the jth position of the ith value of num1 
    
    ///iterate through nums 2 and create a hash map each key will be the value and each value will be thejth index at which the values appears 
    
    //iterate through nums1 and the value at the ith index will be mapped to the hash map ie key and then reutrn the value within the mappings arr 
    
    const mappings = [];
    const map = new Map();
    
    nums2.forEach((num, idx) => {
        if (map.has(num)) {
            //do nothing since there already is an idex there 
        } else {
            //create the new key value pair with the value and idx 
            map.set(num, idx);
        };
    });
    
    //iterate through nums1 find the mapping and return mappins arr 
    nums1.forEach(num => {
        const index = map.get(num);
        mappings.push(index);
    });
    
    
    return mappings;
};

//iterating through nums2 once to create the map so thats o(n) where n is the lenof nums 2
//iterating through nums1 to get theindex and push in mappings o(m) where m is the len of nums 1
//totoal time complexity = o(m + n);

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    //return the maximum product difference between two pairs of numbers 
    
    //maximized the product on one side - iterate through the arry and find the two largest values 
    
    //minmize the product on the other end - iteratethrough the arr and find the two smallest values 
    
    //cant we just sort nums 
    
    let sorted = nums.sort((a, b) => a-b); 
    let min1, min2, max1, max2;
    
    min1 = sorted[0]
    min2 = sorted[1]
    
    max1 = sorted[sorted.length-1]
    max2 = sorted[sorted.length-2]
    
    // console.log(sorted)
    
    return (max1 * max2) - (min1 * min2)
    
    
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    
    //sort nums 
    
    //iterate through nums using for loop if val @ that point = target push to answer arr
    const answer = [];
    const sorted = nums.sort((a,b) => a-b);
    for (let i = 0; i < sorted.length; i++) {
        const value = sorted[i];
        if (value === target) answer.push(i);
    };
    
    return answer;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    //we receive a sentence with s numberof words 
    
    //return the sentence with only k number of words 
    
    //turn sentence into an arr 
    
    //slice array 
    
    //return joined array 
    
    const sentenceArr = s.split(" ");
    let truncatedSentence = sentenceArr.slice(0, k);
    return truncatedSentence.join(" ");
};

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    var map = new Map(); 
    
    var getTwoSumFromNum = num => {
        for (let i = 1; i < num; i++) {
            const first = i;
            const last = num-i; 
            if (!map.has(first) && !map.has(last)) return [first * -1, last * -1]; 
        };
    };
    
    //essentially generate n numbers that sum up to zero 
    
    //math.random function returns a value betwen (0, 1) 
    
    //if we want it to generate a larger range we can just multiple the res by n where n is the maximum 
    
    //ie 0.45 * 10 = 4.5 etc..
    
    //this is precisely what we need to do here 
    
    //along with the constraint that the summust be zero 
    
    //to acheive a sum of zero every two numbers we can just add the positive and negative vals of that num ie magnitude 
    
    //thats when n is even what about when n is odd? 
    
    //create a helper function that finds two values that sum up to the given input? 
    
    //how do we know that the two values we return are not repeated within the arr ?
    
    //given an input and the arr 
    
    //each time to add a value to the arr we also need to add it to a hash map for constant lookup time innit 
    if (n === 1) return [0];
    
    if (n % 2 === 0) {
        const response = [];
        while (response.length !== n) {
            const pos = Math.floor(Math.random() * n); 
            const neg = pos * -1;
            if (!map.has(pos)) {
                map.set(pos, true);
                response.push(pos, neg);
            };
        };
        
        return response;
        
    } else {
        const response = [];
        while (response.length !== n-3) {
            const pos = Math.floor(Math.random() * n); 
            const neg = pos * -1;
            if (!map.has(pos)) {
                map.set(pos, true);
                response.push(pos, neg);
            };
        };
        
        let generateVal = true 
        
        while (generateVal) {
            generateVal = false;
            const pos = Math.floor(Math.random() * n); 
            if (!map.has(pos)) {
                map.set(pos, true);
                response.push(pos);
            } else {
                generateVal = true;
            };
        };
        
        const [neg1, neg2] = getTwoSumFromNum(response[response.length-1]);
        response.push(neg1, neg2)
        
        return response;
    }
    
    
    //given a map and a num return values where the sum of the values = num 
   
};

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {

    let curr = 1,
        prev = 0,
        ans = 0;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            curr++;
        } else {
            ans += Math.min(curr, prev)
            prev = curr;
            curr = 1; 
        };
    };
    
    return ans += Math.min(curr, prev)
    
    
};

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    
    //there can be cases where there are repeated words so we must find the all the indices of word1 and word2
    
    //afterwards we are left with two arrays that contain all the indices at which. word1 and word2 appears 
    
    //we need to find the smallest diff between the two arrays 
    
    let map = {}
    for (let i = 0; i < wordsDict.length; i++) {
        if (!map[wordsDict[i]]) {
            map[wordsDict[i]] = [i];
        } else {
            map[wordsDict[i]].push(i);
        };
    };
    
    let indices1 = map[word1];
    let indices2 = map[word2];
    
    // console.log(indices1, indices2)
    
    const smallestDelta = findSmallestDiff(indices1, indices2);
    return smallestDelta
};

//example [1 2 14] [4 12 18]

var findSmallestDiff = (arr1, arr2) => {
    
    let smallestDiff = Infinity;
    
    for (let i = 0; i < arr1.length; i++) {
        const idx1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const idx2 = arr2[j];
            let diff = idx1 - idx2;
            let absoluteDiff = Math.pow(Math.pow(diff, 2), 0.5)
            // console.log(absoluteDiff)
            if (absoluteDiff < smallestDiff) smallestDiff = absoluteDiff;
        };
    };
    
    return smallestDiff;
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    
    //we need to find the words within the words arr that are substrings of other words 
    
    //words[i] is a substring of words[j] 
    
    //lets sort the array in ascening length order 
    
    //a word can only be a substring of another substring if the next word is longer than it 
    
    //hence ['1', '12', '123']means that words[i] can only be a substring of words[i+x] if words[i+x] is longer 
    
    //after sorting, we iterate through each word and for each word iterate through subsequent words 
    
    const sorted = words.sort((a, b) => a.length - b.length);
    // console.log(sorted)
    
    const answer = [];
    
    for (let i = 0; i < sorted.length; i++) {
        const word = sorted[i];
        for (let j = i+1; j < sorted.length; j++) {
            if (sorted[j].includes(word)) {
                answer.push(word);
                //only need to push word once even though one particular word could be a substring to mut=ltiple other words hence
                break;
            }
        };
    };
    
    return answer;
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    if (!head) return null;
    
    let prev = head,
        curr = head.next;
    
    while (curr) {
        if (curr.val === val) {
            const next = curr.next?.val;
            if (next !== val) {
                prev.next = curr.next;
                prev = curr.next;
                curr = curr.next?.next;
            }  else {
                curr = curr.next;
            };
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    };
    
    if (head.val === val) return head.next
    return head;
    
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
var sortLinkedList = function(head) {
    
    //can i not just iterate through the linked list grab each node put it in an arry sort the arr based on node val connect the nodes and return? 
    
    let linkedList = [],
        prev = null, 
        curr = head;
    
    while (curr) {
        prev = curr 
        curr = curr.next;
        prev.next = null;
        linkedList.push(prev);
    };
    
    
    linkedList.sort((a, b) => a.val - b.val);
    
    for (let i = 0; i < linkedList.length-1; i++) {
        linkedList[i].next = linkedList[i+1];
    };
    
    return linkedList[0]
};

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    
//     we clearly do not want to check the other sub arrs for each building as that would be almost o(n^2) 
    
//     a building with an ocean view must be a building thats taller than all that comes before it 
    
//     hence we just need to determine at every step of the process if that building beginning from the back of the heights arr is a building with an. ocean view 
    
//     if it is a building with an ocean view, we pop it off the stack and compare to the next building, if the next building is taller, then it too must be a building with an ocean view otherwise it cannot be a building with an ocean view in which case we move on to the next part, we however dont really need to pop it off the stack simply note its index if the building is a building with. an. ocean view and return the indicies of the buildings with ocean. views
    
    let len = heights.length-1;
    let tallest;
    let answer =[];
        
    for (let i = len; i >= 0; i--) {
        const currBuilding = heights[i]; //grab the height of each building for each iteration
        
        if (i === len) { //if its the last building, it must be the first iteration it must be the tallest and have ocean view 
            tallest = currBuilding;
            answer.push(len);
        }
        
        //for other iterations, if the curr building ie curr iteration is taller than all that came before it it has an ocean view 
        
        if (currBuilding > tallest) {
            answer.push(i);
            tallest = currBuilding;
        }
    }
    
    answer.sort((a, b) => a-b);
    return answer;
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
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    
    
//     begin with the root node 8
    
//     move to the next item in preorder 5
    
//     since 5 < 8 check 8.left since null 8.left = 5 
    
//     tree 5 <- 8 
    
//     move to the next item 1 and reference tree since 1 < 8 check left 5 since 1 < 5 check left null since null set 1 to 5.left 
    
//     tree 1 <-- 5 <-- 8 
    
//     move to the next item 7 reference tree since 7 < 8 check left 5
    
//     since 7 greater than 5 check right null 
    
//     since null set 5.right to 7 
    
    
    const headVal = preorder[0];
    const root = new TreeNode(headVal); 
    
    const construct = (root, val) => {
        if (!root) return null; 
        
        
        if (val < root.val) {
            if (root.left) {
                construct(root.left, val)
            } else {
                const newNode = new TreeNode(val)
                root.left = newNode;
                return; 
            };
        } else {
            if (root.right) {
                construct(root.right, val)
            } else {
                const newNode = new TreeNode(val)
                root.right = newNode;
                return; 
            }
        }
    }
    
    for (let i = 1; i < preorder.length; i++) {
        const val = preorder[i];
        construct(root, val);
    };
    
    return root;
};

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {

    // equal number of open and close parentheses? 
        
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        
        let len = stack.length-1;
        let curr = s[i];
        let prev = stack[len];
        
        if (len < 0) {
            stack.push(curr);
            continue;
        }
        
        if (curr === ')' && prev === '(') {
            stack.pop()
        } else {
            stack.push(curr)
        }
    }
    
    
    return stack.length;
};

//time complexity o (n) we just need to iterate through the len of th string once 
//space complexity o(n) we miht need to hold the entire str on the stack

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
var cloneTree = function(root) {
    
    //iterate through the binary tree 
    
    //recursive call making a new tree node at every step if there is a value there
    
    //return the newly made nodes 
    
    //done :3
    
    var helper = (root) => {
        if (!root) return;
        
        //here there is a value so make a new tree node 
        let dupVal = root.val;
        let newNode = new Node(dupVal); 
        
        // console.log(newNode.children)
        
        //here we should make the recursive call? 
        for (let child of root.children) {
            newNode.children.push(helper(child));
        }
        
        
        //in the end we need to return the root node so 
        return newNode;
    };
    
    return helper(root)
    
    
    
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
var balanceBST = function(root) {
    
    //a balanced bst means that the values are arranged in such a fashion 
    
    //given a node n the left values are smaller than n the right values are greater than n 
    
    //if we traverse through this bst in inorder fashion, we get a set of values in non-decreasing order ie 1 2 3 4 ... 
    
    //we can take this arr and construct a balanced bst 
    
    //question is how do we do so?
    
    //begin with the median? by defiinition, half the values of a set of numbers are greater than and half the values of a set of numbers are less than the median and such 
    
    //given the example [1 2 3 4]
    
    //we can derive the median say 3 in this case 
    
    //then we split the arr into two parts, the left part has values less than the median a lot like how the left subtree of a bst has values less than the curr node and vice - versa for the right side 
    
    //so now we have the values 
    
    //median = 3 
    //smaller = [1 2]
    //greater = [4]
    
    //we can just continually find the median of the left and right arrays and create nodes with that and then say that the currnode.left = function deriveMedianFromArr(left) and same thing for the right side 
    
    //lets create this function whose purpose is to derive the median from a set of numbesr that are sorted 
    
    var deriveMedianIdxFromArr = (arr) => {
        //since the arr is sorted, we need to first find the length
        let len = arr.length;
        //given an odd arr length say 5 - 5 / 2 math.floor func = 2 which would be the right index 
        
        //given an even function say 4 4 / 2 = 2 which also is the right value say [1 2 3 4] in this case 3 
        
        //however were the length of the array to be 1 then 1 / 2 = 0 so that also works 
        
        //were the length 2 it would also be. okay 
        
        let medianIdx = Math.floor(len /  2);
        return medianIdx;
    }
    
    //we now have to do an in order traversal so 
    var inOrderTreeValues = [];
    var inOrder = (root) => {
        if (!root) return;
        
        inOrder(root.left); //go all the way down to the bottom and traverse the entirety of the left side before moving on to the curr and right 
        inOrderTreeValues.push(root.val);
        inOrder(root.right)
    };
    
    
    inOrder(root);
    // console.log(inOrderTreeValues)
    
    //inOrderTreeValues = [1 2 3 4];
    
    //make a function that given the in order traversal of a tree return a balanced binary search tree 
    
    var constructBST = (arr) => {
        if (!arr.length) return null;
        
        let medianIdx = deriveMedianIdxFromArr(arr);
        let median = arr[medianIdx];
        let smaller = arr.slice(0, medianIdx);
        let larger = arr.slice(medianIdx+1);
        
        // console.log(medianIdx, median, smaller, larger)
        
        let node = new TreeNode(median);
        
        //recursively find the left and right values of this new node 
        node.left = constructBST(smaller);
        node.right = constructBST(larger);
        
        return node;
    };
    
    let head = constructBST(inOrderTreeValues)
    
    return head;
    
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
 * @param {number} n
 * @return {TreeNode[]}
 */

var solve = function(n,dp) { //dp is an array
    
    if(n % 2 === 0) return dp[n] = [] 
    
    if(dp[n] !== -1) return dp[n] 
    
    if(n === 1) return dp[n] = [new TreeNode(0)]
    
    let ans = []
    
    n = n - 1
    
    for(let ctr = 1 ; ctr < n ; ctr ++) {
        
        let left = solve(ctr,dp)
        let right= solve(n-ctr,dp)
        
        for(let row = 0 ; row < left.length ; row ++)
            for(let col = 0 ; col < right.length ; col ++) {
                
                const node = new TreeNode(0)
                
                node.left = left[row]
                node.right= right[col]
                
                ans.push(node)
                
            }
    }
    
    return dp[n] = ans
    
}

var allPossibleFBT = function(n) {
    let dp = new Array(n+1).fill(-1) //this is saying what we create a new arr with length n+1 
    //we then fill the array with the values -1 why -1?
    return solve(n,dp);
};


function longestPalindrome(string) {
  // Write your code here.
	let curLongest=[0,1]; //we'll exclude the rightmost index 
	
    for (let i =1;i<string.length;i++){ //iterate from the 1st letter of the string to the last lettr 
		let odd = checkPalindrom(string,i-1,i+1); 
		let even=checkPalindrom(string,i-1,i);
		let longest = odd[1]-odd[0] > even[1]-even[0] ?odd:even
		curLongest = curLongest[1]-curLongest[0] >longest[1]-longest[0] ? curLongest:longest
	}

	return string.slice(curLongest[0],curLongest[1])
}


//helper function to check if the string is a palindrome 
const checkPalindrom = (string, leftIdx, rightIdx) => {
    //we are given the string and the left and right indices 
	while(leftIdx >=0 && rightIdx < string.length){ //condition keeps going whilst left idx is greater than 0 and right index is less than the length of the string so within the bounds of the string
		if (string[leftIdx]!==string[rightIdx]){
			break; //if the value on the left side does not equal the value on the right side break as its not a palindrome 
		} else{
			leftIdx--;
			rightIdx++;
		}
	}
	return [leftIdx+1,rightIdx] //returning the largest possible substring thats palindrome idxs for left and right 
}

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    
    //given input boxes = "110"
    
    //output [1, 1, 3] 
    
    //in this case since box 3 is empty 
    
    //given 110 box 1 has 1 box 2 has 1 box 3 is empty 
    
    //10101010 either 1 or 0 
    
    //given an index 1 
    
    //nested for loop indexed at position 0 
    
    //for loop
    
    //if (value === 1) 
    
    //position = index = 0 
    
    //position - nestLoopIndex = someValue (negative value) 
    
    //someValue ^ 2 ^ 0.5 --> positive value 
    
    //counter variable increments based on the absolute value os someValue 
    
    //end answer[i] = someValue 
    
    const answer = [];
    
    //for loop 
    for (let i = 0; i < boxes.length; i++) {
        
        let counter = 0;
        
        //make the nested for loop 
        for (let j = 0; j < boxes.length; j++) {
            let boxValue = boxes[j]
            
            //conditional 
            if (boxValue === "1") {
                let boxDistance = i - j 
                let absolute = Math.pow(Math.pow(boxDistance, 2), 0.5)
                counter += absolute;
            }
        }
        
        //here we have completed counter - num of operations it takes to move all balls from all boxes into the current box positioned at index i 
        
        answer[i] = counter;
    }
    
    return answer;
    
};

//time complexity - each item box within the boxes string, you must iterate through the box once so say n is the length of the string boxes, then this would be o(n^2)


function minOperations(boxes) {
  const result = Array(boxes.length).fill(0);

  //given 110 
  //[0 0 0]
  
  // First we make one pass through the array (left to right).
  // For each index, we calculate the moves needed to get every
  // non-empty box on the left of the current index to the current index.
  
  // At each i in boxes:
  //   - add the running sum to result[i]
  //   - increment the notEmpty box count if the current box is '1'
  //   - add the previously seen notEmpty boxes (including current index) to the runningSum
  
  let notEmpty = 0;
  let runningSum = 0;
  
  for (let i = 0; i < boxes.length; ++i) { //iterating over the boxes string
    result[i] += runningSum; 
    if (boxes[i] === '1') ++notEmpty;
    runningSum += notEmpty;
  }
  
  // Make one more pass through the array (right to left).
  // The operations are identical to the first loop, except that
  // this pass calculates the moves needed to get every non-empty box
  // on the right of each index to the current index.
  
  notEmpty = 0;
  runningSum = 0;
  
  for (let i = boxes.length - 1; i >= 0; --i) {
    result[i] += runningSum;
    if (boxes[i] === '1') ++notEmpty;
    runningSum += notEmpty;
  }
  
  return result;
}

var subsets = function(nums) {
    let tempDataStruct = []
    let result = []
    let index = 0
    
    function backtracking(stack, index) {
        result.push([...stack]) //so i imagine that stack is an array and its just going to 
        
        for(let i = index; i < nums.length; i++) {
            stack.push(nums[i])
            backtracking(stack, i + 1)
            stack.pop();
        }
    }
    backtracking(tempDataStruct, index)
    return result;
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let stack = [],
        len = temperatures.length,
        answer = new Array(len).fill(0);
    
    for (let i = len-1; i >= 0; i--) {
        const temp = temperatures[i]
        let stackLen = stack.length
        
        for (j = stackLen-1; j >= 0; j--) {
            const nearestHigh = stack[j]
            if (nearestHigh.temp > temp) {
                let difference = nearestHigh.idx - i;
                answer[i] = difference
                break;
            } else {
                stack.pop()
            }
        }
        
        stack.push({
            idx: i,
            temp 
        })
    }
    
    // console.log()
    
    return answer;
    
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let result = [];
    
    const backTrack = (arr, index) => {
        result.push(arr);
        if(index >= nums.length) return;
        for(let i = index; i < nums.length; i++) {
            backTrack([...arr, nums[i]], i + 1);
        }
    }
    
    backTrack([], 0);
    
    return result;
    
};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

var hashMap = new Map(),
    counter = 0;

//when encoding we are turning something long into something short
var encode = function(longUrl) {
    counter++; //increment the counter to make it unique for each url 
    const encodedURL = `http://tinyurl.com/${counter}`//counter will be unique for each iteration so encoded as such. 

    //enter this value into the hash map 
    hashMap.set(encodedURL, longUrl) //the encoded url is going to point to the long url for decoding purposes 

    return encodedURL;
}

var decode = function(shortUrl) {
    //here we already have the hash map with keys - encoded and values decoded so 
    return hashMap.get(shortUrl);

}

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    
    //make a hash map of s { char: count }
    
    //iterate through t and for each char see if that char exists within the hash map if it does exists and the value is greater than 0, decrement value in the end, return the sum of the values of the hash map 
    
    const mapS = {};
    
    s.split("").forEach(character => {
        if (!mapS[character]) mapS[character] = 0;
        mapS[character]++;
    })
    
    t.split("").forEach(character => {
        if (mapS[character] && mapS[character] > 0) {
            mapS[character]--;
        }
    })
    
    const counts = Object.keys(mapS)
    
    let steps = 0;
    
    counts.forEach(key => {
        const value = mapS[key];
        steps += value;
    })
    
    // console.log(counts, mapS)
    
    return steps;
    
};


/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  
    //need to make a hash map where each key is a subdomain example { "com":  1 } this is the count of the amount of time this subdomain has been visited so we just do. this for each value within the cpdomains array 
    
    //we need to iterate through the cpdomains and get the string example "900 google.mail.com" we need to seperate the value 900 from google.mail.com which they're seperated by a space so splitting them on the space makes it [900, "google.mail.com"]
    
    //now we have the count and the cpdomain so if we split the second element on "." we  have ["google", "mail", "com"]
    
    
    //then we check out map for  each of those subdomains and increment the count for each subdomain as well sooo
    
    const counts = {};
    
    cpdomains.forEach(item => {
        //"900 google.mail.com"
        
        const itemArray = item.split(" ");
        //itemArray = ["900", "google.mail.com"]
        const visits = parseInt(itemArray[0]);
        const domain = itemArray[1]; //google.mail.com
        const subDomains = domain.split("."); //["google", "mail", "com"]
        
        let accumulatorString = "";
        for (let i = subDomains.length-1; i >= 0; i--) {
            //subDomains = ["google",  "mail", "com"]  com --> mail --> google
            if (i === subDomains.length-1) {
                accumulatorString = subDomains[i];
            } else {
                accumulatorString = subDomains[i] + "." + accumulatorString;
            }
            
            if (!counts[accumulatorString]) {
                counts[accumulatorString] = visits;
            } else if (counts[accumulatorString]) {
                counts[accumulatorString] += visits;
            }
            
        }
    })
    
    const response = [];
    Object.keys(counts).forEach(key => {
        const numVisits = counts[key]
        const responseString = `${numVisits} ${key}`;
        response.push(responseString)
    })
    
    return response;
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
var mergeNodes = function(head) {
    
    //we are given a linked list where the head and the tail are nodes of value 0
    
    //merge the nodes between zeros and return in between a node that has a value equal to the sum of all the merged nodes 
    
    //iterate through the entire linked list when we see a zero increment the count of zeros to 1 from 0
    //when the value of the node isnt 0, add the values to an array 
    
    //when our zero count is 1 and we see another 0, find the sum of the arr and make a new node with the sum 
    
    //do the same until you reach the end and return the new linked list 
    
    //how do we iterate through a linked list?
    let curr = head;

    let nodeValues = [];
    const reducer = (a, b) => a + b;
    
    let modifiedList = new ListNode();
    let modifiedPointer = modifiedList;
    
    while (curr) {
        if (curr.val === 0) {
            if (nodeValues.length) {
                const sum = nodeValues.reduce(reducer);
                const newNode = new ListNode(sum)
                modifiedList.next = newNode;
                modifiedList = newNode;   
                nodeValues = [];
                
            }
        } else {
            nodeValues.push(curr.val)
        }
        
        curr = curr.next;
    }
    
    return modifiedPointer.next;
    
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    
    let listArray = [],
        curr = head;
    
    while (curr) {
        listArray.push(curr.val);
        curr = curr.next;
    }
    
    //[1 2 3 4 5]
    
    let index1 = k-1,
        index2 = listArray.length - k,
        counter = 0;
 
    [listArray[index1], listArray[index2]] = [listArray[index2], listArray[index1]]
    
    
    let newHead = new ListNode();
    let response = newHead;
    
    listArray.forEach(val => {
        const next = new ListNode(val)
        newHead.next = next;
        newHead = newHead.next;
    })
    
    return response.next;
};

/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    
    if (!root) return;
    
    //define a helper function that uses dfs to traverse the tree 
    
    //we need two variables head and tail at the end we connect the two variables nodes to make a circular linked list 
    var head, 
        tail;
    
    //define the helper function 
    var dfs = node => {
        //recurive base case is usually when theres no value for node 
        if (!node) return;
        
        dfs(node.left)
        
        //some logic here on the self node 
        //here we are sitting at the lower right most node 
        if (tail) {
            
            //otherwise we have the tail reference basically the prev node 
            tail.right = node;
            node.left = tail;
            
        } else {
            //here there is no value for tail and no values for head so set head
            head = node;   
        }
        //in the first run both head and tails will be set to node 
        //we must move tail to the current node 
        tail = node;
        
        dfs(node.right)
    }
    
    dfs(root)
    
    
    //connect the head and tail to make a circular linked list
    head.left = tail;
    tail.right = head;
    
    return head;
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
var plusOne = function(head) {
    
    let placeholders = [];
    
    while (head) {
        const value = head.val;
        placeholders.push(value)
        head = head.next;
    }
    
    let length = placeholders.length-1,
        carry = 0;
    
    for (let i = length; i >= 0; i--) {
        const num = placeholders[i]; 
        
        if (i === length && num < 9) {
            placeholders[i] = num + 1;
            break;
        } 
        
        if (num === 9 && i === length) {
            placeholders[i] = 0;
            carry = 1;
        }
        
        if (num === 9 && carry === 1) {
            placeholders[i] = 0;
            carry = 1;
        } else if (num !== 9 && carry === 1) {
            placeholders[i]  = num + 1
            carry = 0;
        }
        
        if (i === 0 && carry === 1) {
            placeholders[i] = 0;
            placeholders.unshift(1)
        } 
    }
    
    
    let initialNode = new ListNode(),
        response = initialNode;
    
    placeholders.forEach(digit => {
        const curr = new ListNode(digit);
        initialNode.next = curr;
        initialNode = initialNode.next;
    })
    
    
    return response.next;
};

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
//     given an array rooms [[1] [2] [3] []] - return true 
    
//     convert rooms array to a matrix 
    
//     {
//         0: [1],
//         1: [2],
//         ...
//     }
        
//     we have a visited array that visits each of the rooms using dfs and does not revisit the room if already included within our visited array 
    
//     each time we add something to visited, check the length of visited and if equal to rooms.length return true and end 
    
    const adjacencyMatrix = {};
    
    rooms.forEach((room, idx) => {
        adjacencyMatrix[idx] = room;
    })
    
    const visited = [];
    
    //traverse the adjacency matrix 
    
    const traversal = node => {
        visited.push(node)

        
        const keys = adjacencyMatrix[node]; 
        
        for (let key of keys) {
            if (!visited.includes(key)) {
                traversal(key)
            }
        }
        
    }
    
    traversal(0)
    
    // console.log(visited)
    
    
    return visited.length === rooms.length
    
};

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    let matrix = {}; 
    
    for (let row = 0; row < isConnected.length; row++) {
        for (let col = 0; col < isConnected.length; col++) {
            let connection = isConnected[row][col];
            
            let city = row + 1
            if (!matrix[city]) matrix[city] = [];
            
            if (connection) matrix[city].push(col+1)
        }
    }
    
    let provinces = 0; 
    let visited = [];
    
    let dfs = city => {
        visited.push(city);
        
        let neighbors = matrix[city]; 
        
        for (let neighbor of neighbors) {
            if (!visited.includes(neighbor)) {
                dfs(neighbor)
            }
        }
    }
    
    Object.keys(matrix).forEach(city => {
        if (!visited.includes(parseInt(city))) {
            provinces++;
            dfs(city)
        } 
    })
    
    return provinces;
};

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    
    let length = deck.length;
    
    let array = new Array(length)
    
    array.fill(null)
    
    deck.sort((a, b) => a - b); //sorts in ascending order 
    
    var idx = 0;
    
    var findNextEmpty = (array, index) => {
        while (index < array.length) {
            if (!array[index]) return index;
            index++
        }
        
        index = 0;
        while (index < array.length) {
            if (!array[index]) return index;
            index++
        }
    }
    
    
    while (deck.length) {
        let card = deck.shift()
        
        array[idx] = card;
        
        let emptyOne = findNextEmpty(array, idx + 1)
        let emptyTwo = findNextEmpty(array, emptyOne + 1)
        idx = emptyTwo
    }
    
    
    return array;
    
};

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

        let [left, right] = [1, n];

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            let isBad = isBadVersion(mid);
            if (isBad) {
                //if the middle element is bad, all subsequent version are also bad 
                //to find the first bad version, move the right pointer to the mid position because this may be the first bad version 
                right = mid;
            } else {
                //otherwise, this version is good, so we move the left pointer one space right of the mid element as we know the middle element is a good version hence it and all before it are good version 
                left = mid + 1;
            }
        }

        return left; //this will be the first bad version and the response ultimately 
    };
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let left = 0, 
        right = nums.length-1,
        output = [];
    
    while (left <= right) {
        let leftVal = nums[left],
            rightVal = nums[right],
            leftSquared = Math.pow(leftVal, 2),
            rightSquared = Math.pow(rightVal, 2);
        
        if (leftSquared > rightSquared) {
            output.unshift(leftSquared)
            left++
        } else {
            output.unshift(rightSquared)
            right--
        }
    }
        
    return output;
    
};

//since we traverse the nums array only once, this would be o(n)
