// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
    for (let i = 0; i < chars.length; i++) { // 使用迴圈逐一檢查陣列中的字母
        if (chars[i].charCodeAt() + 1 !== chars[i + 1].charCodeAt()) {
            // 用 charCodeAt 將字母轉換為 Unicode 編碼，用來比較當前字母與下一個字母的 Unicode 編碼，因為題目是 a ~ g，所以編碼必然是連號，如果 chars 陣列中目前的字母編碼 +1 不等於下一個連續的編碼，代表少了一個字母
            return String.fromCharCode(chars[i].charCodeAt() + 1)
            // 用 +1 找出目前字母與下個字母間的差異，若有差異便找到缺失的字母，最後返回缺失字母的 Unicode 編碼所對應的字母
        };
    }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...
