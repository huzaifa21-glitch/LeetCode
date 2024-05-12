class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        num_array = [int(digit) for digit in str(abs(x))]  
        stack = []
        if x >= 0:  
            for i in reversed(num_array):
                stack.append(i)
            reversed_num = int(''.join(map(str, stack)))
        else:  
            for i in reversed(num_array):
                stack.append(i)
            reversed_num = -int(''.join(map(str, stack))) 
        if reversed_num < -2**31 or reversed_num > 2**31 - 1:
            return 0
            
        return reversed_num



        