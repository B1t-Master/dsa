/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null
    let rightPtr = head 
    let length=1 
    while ( rightPtr.next ){
        length++
        rightPtr=rightPtr.next
    }

    const rotations=k%length
    // console.log(rotations)
    // console.log(length)

    if(rotations%length===0) return head
    let leftPtr=head

    for (let i=0; i<length-rotations-1;i++){
        leftPtr=leftPtr.next
    }

    rightPtr.next=head
    head=leftPtr.next
    leftPtr.next=null
    return head

};