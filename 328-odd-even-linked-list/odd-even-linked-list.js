/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if( head === null) return head

    let oddPtr=head
    let evenPtr=head.next 
    let evenHead=evenPtr

    while(evenPtr!==null && evenPtr.next!==null){
        oddPtr.next=oddPtr.next.next
        evenPtr.next=evenPtr.next.next
        // console.log(evenPtr)

        evenPtr=evenPtr.next
        oddPtr=oddPtr.next

    }

    oddPtr.next=evenHead
    return head
};