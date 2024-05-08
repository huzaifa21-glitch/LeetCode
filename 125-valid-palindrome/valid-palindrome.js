/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var str = s.replace(/[^a-zA-Z0-9]/g, "");
    str = str.toLowerCase();
    const len = str.length;
    var res = true
    console.log(str,len)
    if (len == 0) {
        res = true
    }
    else {
        str2 = str.split('').reverse();
        str = str.split('');

        for (let i = 0; i < str.length; i++) {
            if (str2[i] != str[i]) {
                res = false;
                break;
            }
        }
    }
    return res;
};