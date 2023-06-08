class BinaryTreeNode {
  constructor(value, parent) {
    this.left = null;
    this.right = null;
    this.parent = parent;
    this.value = value;
  }

  findNode(value) {
    let node = this;

    while (node) {
      if (value == node.value) return node;
      if (value > node.value) node = node.right;
      if (value < node.value) node = node.left;
    }
    return null;
  }

  insertNode(value) {
    return this.#insert(value, this);
  }

  #insert(value, parentNode) {
    if (value < parentNode.value) {
      if (parentNode.left == null) {
        parentNode.left = new BinaryTreeNode(value, parentNode);
      } else {
        this.#insert(value, parentNode.left);
      }
    }

    if (value > parentNode.value) {
      if (parentNode.right == null) {
        parentNode.right = new BinaryTreeNode(value, parentNode);
      } else {
        this.#insert(value, parentNode.right);
      }
    }
  }

  removeNode(value) {
    return this.#removeNode(value, this);
  }

  #removeNode(value, node) {
    if (node == null) return null;

    if (value < node.value) {
      node.left = this.#removeNode(value, node.left);
    } else if (value > node.value) {
      node.right = this.#removeNode(value, node.right);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
    }

    const original = node;
    node = node.right;
    while (node.left) {
      node = node.left;
    }

    node.right = this.#removeNode(original.right);
    node.left = original.left;
  }

  traverseStack() {
    const stack = [this];

    while (stack.length) {
      const currentNode = stack.pop();
      console.log(currentNode.value);

      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
    }
  }

  traverseQueue() {
    const queue = [this];

    while (queue.length) {
      const currentNode = queue.shift();

      console.log(currentNode.value);

      if (currentNode.right) queue.push(currentNode.right);
      if (currentNode.left) queue.push(currentNode.left);
    }
  }

  traverseRecursive(node) {
    if (node) {
      console.log(node.value);
      this.traverseRecursive(node.left);
      this.traverseRecursive(node.right);
    }
  }
}
