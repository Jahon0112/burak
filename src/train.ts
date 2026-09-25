// N-TASK
// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
//  orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
//   MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false
function palindromCheck(word: string): boolean {
  return word === word.split("").reverse().join("");
}
console.log(palindromCheck("dad"));
console.log(palindromCheck("son"));
console.log(palindromCheck("mom"));
// //@MITASK**/
// //1-way
// function consgetSquareNumbers(
//   arr: number[],
// ): { number: number; square: number }[] {
//   const newArr: { number: number; square: number }[] = [];

//   for (const elem of arr) {
//     const newObj: { number: number; square: number } = {
//       number: elem,
//       square: elem * elem,
//     };

//     newArr.push(newObj);
//   }
//   return newArr;
// }
// console.log(consgetSquareNumbers([1, 2, 3, 4, 5, 7]));
//2-way
// function consgetSquareNumbers(arr) {
//   const count = 0;
//   const counts = arr.reduce((acc, num) => {
//     acc[num] = num ** 2;
//     return acc;
//   }, {});
//   return Object.entries(counts);
//   console.log(counts);
// }

// console.log(consgetSquareNumbers([1, 2, 3, 4, 5]));
