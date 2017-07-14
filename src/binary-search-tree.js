// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    const node = new BinarySearchTree(value);
    if (value < this.value && this.left === null) this.left = node;
    if (value < this.value) this.left.insert(value);
    if (value > this.value && this.right === null) this.right = node;
    if (value > this.value) this.right.insert(value);
  }
  contains(value) {
    let x = 0;
    if (this.value === value) x += 1;
    if (this.left !== null) x += this.left.contains(value);
    if (this.right !== null) x += this.right.contains(value);
    return x > 0;
  }
  depthFirstForEach(cb) {
    const arr = [];
    arr.push(cb(this.value));
    if (this.left !== null) arr.push(this.left.depthFirstForEach(cb));
    if (this.right !== null) arr.push(this.right.depthFirstForEach(cb));
  }
}

module.exports = BinarySearchTree;
