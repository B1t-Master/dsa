/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let current = head 
    let prev=null
    let index=1
    while (index<left){
        prev=current 
        current=current.next
        index++
    }
    let leftPtr = current
    let next; 
    let temp=prev
    // temp.next=null

    while (index <= right){

        if (left===right){
            return head
        }
        if ( index === left ){
            index++
            prev=current 
            current = current.next
            continue
        }

        next = current.next 

        current.next = prev 

        prev = current
        current=next
        index++
    }

    leftPtr.next=current
    if (temp){
    temp.next=prev
    }
    return left ==1 ? prev : head
    
};