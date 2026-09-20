class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        left = 0
        # right = 0
        hash_map=set()
        max=0

        for i in range(len(s)):
            
            if len(s)==1:
                max=1
                break 

            while s[i] in hash_map: 
                hash_map.remove(s[left])
                left+=1 
                
            hash_map.add(s[i])
            # right+=1
            
            if max<len(hash_map):
                max=len(hash_map)


        return max
