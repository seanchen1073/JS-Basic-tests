// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
// [15, 28, 4, 2, 43] 印出 6
// [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
    arr.sort(function (a, b) { // 先用 sort 將陣列做排序
        return a - b; // 排序方式是從左到右；由小到大
    });
    return arr[0] + arr[1]; // 回傳陣列中索引值前兩個值，也就是最小兩個值加總的結果
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19
