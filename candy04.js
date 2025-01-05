// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
    let secs = seconds; // 宣告新的變數 secs 來儲存參數 seconds
    let hrs = Math.floor(secs / 3600); // 宣告小時 hrs 並計算總秒數中包含多少小時，3600 秒等於 1 小時
    let mins = Math.floor((secs % 3600) / 60); // 宣告分鐘 mins 並計算剩餘秒數中包含多少分鐘，先將秒數除以 3600 算出小時數，並將取餘數再除以 60 以顯示剩餘的分鐘數
    let secs_num = Math.floor(secs % 60); // 對總秒數取餘數以顯示剩餘的秒數，並確保秒整除後，也就是等於 60 的時候會歸零
    return `${String(hrs).padStart(2, "0")} : ${String(mins).padStart(2, "0")} : ${String(secs_num).padStart(2, "0")}`;
    // 用模板字串方式並使用 `padStart` 確保時、分、秒都以二位數格式顯示，並組合成 HH:MM:SS 格式的字串
}


console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59
