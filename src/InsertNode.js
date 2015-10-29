function insertNode(tree, node) {
    if (tree) {
        if (tree.value < node.value) {
            if (tree.right) {
                insertNode(tree.right, node);
            } else {
                tree.setRight(node);
            }
        } else {
            if (tree.left) {
                insertNode(tree.left, node);
            } else {
                tree.setLeft(node);
            }
        }
    } else {
        tree = node;
    }
    return tree;
}
