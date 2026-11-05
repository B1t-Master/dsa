# Definition for a binary tree node.

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def sortedArrayToBST(self, nums: list[int]) -> TreeNode | None:

        def drawTree(nums,start,end):
            if (start>end):
                return 

            mid=(start+end)//2

            node=TreeNode(nums[mid])

            node.left=drawTree(nums,start,mid-1)
            node.right=drawTree(nums,mid+1,end)
    
            return node

        return drawTree(nums,0,len(nums)-1)