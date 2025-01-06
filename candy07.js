// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
    const odd = numbers.filter((item) => item % 2 !== 0); // 宣告 odd 陣列並找出陣列中的基數存到 odd 中
    const even = numbers.filter((item) => item % 2 === 0); // 宣告 even 陣列並找出陣列中的偶數存到 even 中
    if (odd.length === 1) { // 設定 odd 陣列的長度為 1 ，也就是只會返回一個值
        return odd[0]; // 若 odd 中只包含一個基數，則返回該基數
    } else {
        return even[0]; // 若 odd 中不只一個基數，則返回 even 中唯一的偶數
    }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160
