// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  let numSquare = num.toString().split(""); // 先宣告一個變數，將數字轉換為字串並分割成字元陣列，然後儲存在此變數中
  return numSquare.map((num) => num * num).join(""); // 用 map 將每個數字平方，最後再用 join 返回字串格式
}


console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449
