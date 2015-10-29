describe("Node", function() {
    Node = true;
    this.name = name;

  it("test function setLeft and setRight", function() {
      Node = true;
      this.name = name;


    expect(this.name).toEqual(name);
  });
});

describe("setLeft & setRight", function(left, right) {
        Node = true;
        this.right = right;
        this.left = left;


    it("test function setLeft and setRight", function() {
        this.left = left;
        this.right = right;

        expect(this.left).toEqual(left);
        expect(this.right).toEqual(right);
    });
});

/*function Node(name, value) {
    this.name = name;
    this.value = value;
}

Node.prototype.setLeft = function(left) {
    this.left = left;
};

Node.prototype.setRight = function(right) {
    this.right = right;
};
*/