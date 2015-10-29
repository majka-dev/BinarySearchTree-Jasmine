function printTreeAsc(root) {
    var currNode = root;
    if(currNode.left) {
        printTreeAsc(currNode.left);
    }

    console.log(currNode.value);

    if(currNode.right) {
        printTreeAsc(currNode.right);
    }
}
