import React from "react";
import { Link } from "react-router-dom";

interface TreeNode {
  label: string;
  left?: TreeNode;
  right?: TreeNode;
}

function createTreeNode(
  label: string,
  left?: TreeNode,
  right?: TreeNode
): TreeNode {
  return {
    label,
    left,
    right,
  };
}

function TreeNodeComponent({ node }: { node: TreeNode }) {
  const { label, left, right } = node;

  return (
    <div>
      <div>{label}</div>
      {left && <TreeNodeComponent node={left} />}
      {right && <TreeNodeComponent node={right} />}
    </div>
  );
}

const BinaryTree = () => {
  const treeData: TreeNode = createTreeNode(
    "A",
    createTreeNode("B", createTreeNode("D"), createTreeNode("E")),
    createTreeNode("C", createTreeNode("F"), createTreeNode("G"))
  );

  return (
    <div>
      <h1>Binary Tree</h1>
      <TreeNodeComponent node={treeData} />
    </div>
  );
};

export default BinaryTree;
