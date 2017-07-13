class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const node = new Tree(value);
    this.children.push(node);
  }
  contains(value) {
    if (this.value === value) return true;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children.length === 0) return false;
      // return this.children[i].contains(value);
      if (this.children[i].value === value) return true;
      return false;
    }
  }
}
module.exports = Tree;

