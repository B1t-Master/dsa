class Solution:

    # def search(left,right,nums,res):
    #     while (left<=right):
    #         mid = mid= left + (right+left) // 2
    #         res = res if res < nums[mid] else nums[mid] 

    #         if (nums[left]<nums[mid]):
    #             right = left -1


    def findMin(self, nums: list[int]) -> int:
        left= 0 
        right= len(nums)-1
        # res = nums[mid] 
        # if (len(nums)==1):
        #     return nums[0]
        while (left<=right):
            mid= left + (right-left) // 2
            if (nums[mid]>=nums[right]):
                left=mid+1
            else:
                right=mid
        
        return nums[mid]




        