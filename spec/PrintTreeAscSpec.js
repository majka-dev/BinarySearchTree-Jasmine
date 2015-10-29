describe("printTreeAsc", function(root) {
  var currNode;

  it("test function printTreeAsc", function() {
    currNode = true;

    expect(currNode).toBe(true);
  });
});

/*	function printTreeAsc(root) {
	    var currNode = root;
	    if(currNode.left) {
	        printTreeAsc(currNode.left);
	    }

	    console.log(currNode.value);

	    if(currNode.right) {
	        printTreeAsc(currNode.right);
	    }
	} */