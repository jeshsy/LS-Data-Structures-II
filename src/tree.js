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
    let x = 0;
    if (this.value === value) x += 1;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children !== null) {
        x += this.children[i].contains(value);
      }
      // if (this.children[i].value === value) return true;
    }
    return (x > 0);
  }
}
module.exports = Tree;

