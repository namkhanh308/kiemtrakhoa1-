// function findOppositeNumber(n, inputNumber) {
//   if (inputNumber < n) {
//     for (let i = 0; i < n; i++) {
//       if (i - (inputNumber + parseInt(n / 2)) == 0) {
//         return inputNumber + parseInt(n / 2);
//       }
//     }
//   }
//   if (inputNumber + parseInt(n / 2) > n) {
//     let d = inputNumber + parseInt(n / 2) - n;
//     return d;
//   }
// }
// let c = findOppositeNumber(10, 6);
// console.log(c);

//bai2
// let String1 = prompt("nhap vao chuoi ki tu 1");
// let String2 = prompt("nhap vao chuoi ki tu 2");
// let a = [...String1];
// let b = [...String2];
// console.log(a);
// console.log(b);
// let mergeString = "";

// function merge2String() {
//   for (let i = 0; i < a.length && i < b.length; i++) {
//     mergeString = mergeString + a[i] + b[i];
//   }
//   if (a.length > b.length) {
//     mergeString = mergeString + a[a.length - 1];
//   }
//   if (a.length < b.length) {
//     mergeString = mergeString + b[b.length - 1];
//   }

//   return mergeString;
// }
// console.log(merge2String());

// merge2String();
//bai3
// let d = parseInt(Math.random() * 10);
// console.log(d);
// let dem = 1;
// let input = document.getElementById("input");
// let bt = document.getElementById("button");
// bt.addEventListener("click", function () {
//   dem++;
//   if (dem <= 4) {
//     if (input.value == d) {
//       alert("ban tra loi dung");
//     } else {
//       alert("ban doan sai");
//     }
//   } else {
//     alert("het luot");
//   }
// });
