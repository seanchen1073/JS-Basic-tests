// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
    return numbers.find((item) => numbers.indexOf(item) === numbers.lastIndexOf(item));
    // 使用 find 來找出陣列中第一個符合條件的元素，條件是找出索引值中某個元素第一次出現跟最後一次出現的位置是否相同，若相同代表該數字是唯一值
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8
