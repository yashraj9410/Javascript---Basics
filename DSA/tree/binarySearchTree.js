// implementation for binary search tree 
// we need to have a node class to create a node in the tree 
// the node class will be used by the tree class to perform operations on the tree 
// insert , search 
class Node {
    constructor(value){
        this.value = value 
        this.left = null
        this.right  = null
    }
}

class BinarySearchTree {
    // this is the initialisation for the root node 
    constructor(){
        this.root = null;
    }

    // check if tree is empty 
    // returns true when tree has no nodes else it returns false 
    isEmpty(){
        return this.root === null;
    }

    // inserting a new node in the tree 
    insert(value) {
        const newNode = new Node(value);  // step 1
        // if the tree is empty 
        if(this.isEmpty()){
            this.root = newNode
        }
        // left child should be smaller 
        // right child should be greater
        // there should be atmost two childs for a given node 
        else {
            this.insertNode(this.root,newNode);
        }
    }

    // insert node function that will recursively check for the correct position for the new node .
    insertNode(root,newNode){
        // if the new node value is less than root node value 
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            } else {
                this.insertNode(root.left , newNode);  // recursively traversing left subtree
            }
        } else {                       // if my root value is greater than new node value 
            if(root.right === null){
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // search method to verify if a node is present in the tree 
    search(root,value){
        // there can be two cases : 1 Tree is empty , 2 : tree is not empty 
        if(!root){
            return false;
        } else {
            if(root.value === value) {
                return true
            } else if(value < root.value){
                return this.search(root.left,value);
            } else {
                return this.search(root.right, value)
            }
        }
    }

    // level order also known as BFS -> Breadth First Search 
    levelOrder(){
        const queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    // min node function 
    min(root){
        // if root.left is not there then root is the min node 
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    // max node value in the true
    max(root) {
        // if root does not have any right child then root is max node 
        if(!root.right){
            return root.value;
        } else {
            return this.max(root.right)
        }
    }

    // delete node function
    delete(value){
        this.root = this.deleteNode(this.root,value);
    }

    // delete node function to recursively delete a node 
    deleteNode(root,value){
        // if tree is empty
        if(root === null){
            return root;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value);
        } else if(value > root.value) {
            root.right = this.deleteNode(root.right,value);
        } else {
            // here we need to take care of the three sceneraio
            // 1. no child 
            if(!root.left && !root.right){
                return null;
            }
            // One child scenario
            if(!root.left){
                return root.right;
            } else if(!root.right){
                return root.left;
            }
            // now the node has two child node 
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,root.value);
        }
        // return root so that it makes sure that changes are made 
        return root;
    }
}

// create a instance for binary search tree 
const bst  = new BinarySearchTree();
console.log("tree is empty :" , bst.isEmpty());
bst.insert(10);
bst.insert(5)
bst.insert(15)
bst.insert(3)


console.log(bst.search(bst.root , 10));
console.log(bst.search(bst.root , 20));

bst.levelOrder(bst.root);

console.log("min :", bst.min(bst.root))
console.log("max :", bst.max(bst.root))

// two appraoch / algorithms used in tree traversal , searchinig 
// 1 DFS --> Depth First Search 
// 2 BFS --> Breadth First Search

// 1 -> DFs 

bst.delete(10);
bst.levelOrder();