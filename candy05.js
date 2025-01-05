// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
    let numSquare = num.toString().split("");  // 將數字轉成字串並分割成陣列
    return numSquare.map(num => num * num).join("");  // 用 map 處理每個數字的平方，並合併為字串返回
}


console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449
