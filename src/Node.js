function Node(name, value) {
    this.name = name;
    this.value = value;
}

Node.prototype.setLeft = function(left) {
    this.left = left;
};

Node.prototype.setRight = function(right) {
    this.right = right;
};

