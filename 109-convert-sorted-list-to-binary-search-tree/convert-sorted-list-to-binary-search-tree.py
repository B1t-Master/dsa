# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedListToBST(self, head: ListNode | None) -> TreeNode | None:

        current = head
        arr=[]
        while(current):
            arr.append(current.val)
            current=current.next



        def drawTree(arr,start,end):
            if (start>end):
                return 

            mid=(start+end)//2

            node=TreeNode(arr[mid])

            node.left=drawTree(arr,start,mid-1)
            node.right=drawTree(arr,mid+1,end)
    
            return node

        return drawTree(arr,0,len(arr)-1)
        