/**
 * Created by jyotikabanerjee on 10/08/14.
 */

function Node(data, left, right){
    this.data = data;
    if(left >=data || right <data){
        console.log("Invalid node values. Such a tree cannot be constructed...");
        return;
    }
    this.left = left ? new Node(left):null;
    this.right =right ? new Node(right):null;
}

function BST(){
    this.root = null;

    /** Function to insert a node in the tree / generate a tree*/
    this.insert = function(item){
        var curr = this.root;
        var parent;
        var n = new Node(item);
        if(this.root === null){
            this.root = n;
        }
        else{
            while(1){
                if(curr.data > item){
                    parent = curr;
                    curr = curr.left;
                    if(curr === null){
                        parent.left = n;
                        break;
                    }
                }
                else{
                    parent = curr;
                    curr = curr.right;
                    if(curr === null){
                        parent.right = n;
                        break;
                    }

                }
            }
        }


    };
}

/** Functions with parameter 'treenode' have to be invoked with the root of the tree as parameter*/

inOrderDisplay = function(treenode){
    var node = treenode;
    if(node !== null){
        inOrderDisplay(node.left);
        console.log(node.data);
        inOrderDisplay(node.right);
    }
};

preOrderDisplay = function(treenode){
  if(treenode !== null){
      console.log(treenode.data);
      preOrderDisplay(treenode.left);
      preOrderDisplay(treenode.right);
  }
};

postOrderDisplay = function(treenode){
    if(treenode !== null){
        postOrderDisplay(treenode.left);
        postOrderDisplay(treenode.right);
        console.log(treenode.data);
    }
};

/** Functions with parameter 'tree' have to be invoked with the BST (tree) as parameter*/

getMin = function(tree){
    var curr = tree.root;
    while(curr.left !== null){
        curr = curr.left;
    }
    return curr.data;
};

getMax = function(tree){
  var curr = tree.root;
  while(curr.right !== null){
      curr = curr.right;
  }
  return curr.data;
};

findValue = function(tree,value){
    var curr = tree.root;

    if(curr.data === value){
        return true;
    }
    else{
        while(curr.data !==  value){
            if(curr.data > value){
                curr = curr.left;
            }
            else{
                curr = curr.right;
            }
            if(curr === null){
                return false;
            }
        }
        return true;
    }
};