/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const map=new Map()
        let current = head 
        while(current){
            if(map.has(current)){
                return true
            }
            map.set(current,current)
            current=current.next
        }
    return false

    // let current =head
    // while (current.pos<=getSize(head)-1){
    //     if ( current.next===null ){
    //         return false
    //     }
    //     current=current.next
    // }
    // return false
};