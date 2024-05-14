/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // let result =false;
    let arr =[];
    for(let a of s){
        if(a=='('||a=='['||a=='{'){
            arr.push(a);
        }else{
            if(!arr.length|| (a === ')' && arr[arr.length - 1] !== '(') || 
                (a === '}' && arr[arr.length - 1] !== '{') ||
                (a === ']' && arr[arr.length - 1] !== '[')){
                    return false;
                }
                arr.pop();
        }

}
    
     
    return !arr.length;
};