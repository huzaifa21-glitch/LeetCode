class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n<=2:
            return n
        j = [0]*(n+1)
        j[1]=1
        j[2]=2
        for i in range(3,n+1):
            j[i]=j[i-1]+j[i-2]
        return j[n]