function solution(nodeinfo) {
    // 데이터 정리
    // y 내림차순, x 오름차순 정리
    const binaryTree = nodeinfo.map((node, index) => {
        return [ index + 1, node[0], node[1] ];
    }).sort((a, b) => {
        if (b[2] - a[2] === 0) return a[1] - b[1];
        return b[2] - a[2];
    });
    
    // 트리 생성
    const root = new TreeNode(binaryTree[0][0], binaryTree[0][1], binaryTree[0][2]);
    for (let i = 1; i < binaryTree.length; i++) {
        const [idx, x, y] = binaryTree[i];
        const newNode = new TreeNode(idx, x, y);
        root.insert(newNode);
    }
    
    let pre = [];
    let post = [];
    
    const pretraversal = (node) => {
        if (!node) return;
        pre.push(node.index);
        pretraversal(node.left);
        pretraversal(node.right);
    }
    
    const posttraversal = (node) => {
        if (!node) return;
        posttraversal(node.left);
        posttraversal(node.right);
        post.push(node.index)
    }
    
    pretraversal(root);
    posttraversal(root);
    
    return [pre, post];
}

class TreeNode {
    constructor(index, x, y) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
    
    insert(child) {
        if (child.x < this.x) {
            if (this.left === null) this.left = child;
            else this.left.insert(child);
        } else {
            if (this.right === null) this.right = child;
            else this.right.insert(child);
        }
    }
}

