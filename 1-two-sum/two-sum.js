/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
var res=[];
  for(i=0;i<=nums.length;i++){
    for(j=i+1;j<=nums.length;j++){
        sum = nums[i]+nums[j];
        if(sum===target){
            res.push(i,j);
             break;
        }  
    }
    
  } 
   console.log(res)
  return res; 
    
};