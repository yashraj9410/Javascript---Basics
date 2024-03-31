// Define the Node class for binary tree nodes
class TreeNode {
    constructor(data) {
      this.data = data; // Data contained within the node
      this.left = null; // Left child node
      this.right = null; // Right child node
    }
  }
  
  // Define the BinaryTree class
  class BinaryTree {
    constructor() {
      this.root = null; // Root node of the binary tree
    }
  
    // Method to insert a new node into the binary tree
    insert(data) {
      const newNode = new TreeNode(data);
      if (this.root === null) {
        this.root = newNode; // If the tree is empty, set the new node as the root
      } else {
        this.insertNode(this.root, newNode); // Otherwise, insert the new node recursively
      }
    }
  
    // Helper method to recursively insert a new node into the binary tree
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode; // If the left child is empty, insert the new node here
        } else {
          this.insertNode(node.left, newNode); // Otherwise, recursively insert into the left subtree
        }
      } else {
        if (node.right === null) {
          node.right = newNode; // If the right child is empty, insert the new node here
        } else {
          this.insertNode(node.right, newNode); // Otherwise, recursively insert into the right subtree
        }
      }
    }
  
    // Method to perform preorder traversal of the binary tree
    preorderTraversal(node = this.root) {
      const result = [];
      if (node !== null) {
        result.push(node.data); // Visit the current node
        result.push(...this.preorderTraversal(node.left)); // Traverse the left subtree
        result.push(...this.preorderTraversal(node.right)); // Traverse the right subtree
      }
      return result;
    }
  
    // Method to perform inorder traversal of the binary tree
    inorderTraversal(node = this.root) {
      const result = [];
      if (node !== null) {
        result.push(...this.inorderTraversal(node.left)); // Traverse the left subtree
        result.push(node.data); // Visit the current node
        result.push(...this.inorderTraversal(node.right)); // Traverse the right subtree
      }
      return result;
    }
  
    // Method to perform postorder traversal of the binary tree
    postorderTraversal(node = this.root) {
      const result = [];
      if (node !== null) {
        result.push(...this.postorderTraversal(node.left)); // Traverse the left subtree
        result.push(...this.postorderTraversal(node.right)); // Traverse the right subtree
        result.push(node.data); // Visit the current node
      }
      return result;
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(17);
  
  // Perform preorder traversal and log the data of each node
  console.log('Preorder Traversal:');
  console.log(tree.preorderTraversal());
  
  // Perform inorder traversal and log the data of each node
  console.log('\nInorder Traversal:');
  console.log(tree.inorderTraversal());
  
  // Perform postorder traversal and log the data of each node
  console.log('\nPostorder Traversal:');
  console.log(tree.postorderTraversal());
  