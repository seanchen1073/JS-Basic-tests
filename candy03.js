// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  let arrWithZeros = arr.filter((e) => e === 0); //用filter篩選出在陣列中等於0的元素並放到新的陣列中
  let arrWithoutZeros = arr.filter((e) => e !== 0); //用filter篩選出在陣列中不等於0的元素並放到新的陣列中
  return (list = arrWithoutZeros.concat(arrWithZeros)); //將兩個陣列合在一起，並將沒有0的陣列放在前面
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
