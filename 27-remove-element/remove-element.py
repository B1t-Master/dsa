class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        # pointer=0
        # for i,num in enumerate(nums):
        #     # print(i)

        #     if num==val:
        #         nums[i]= None
        #         pointer=+pointer+1
        #     print(nums)

        # return len(nums)-pointer

        left = 0
        right = len(nums)-1
        while (left<=right):
            print (nums)
            if(nums[left]==val):
                nums[left],nums[right]=nums[right],nums[left]
                right-=1
                continue

            left+=1
        return left
            
        