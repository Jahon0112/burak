// S-TASK
// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va
//  osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.
//  MASALAN: missingNumber([3, 0, 1]) return 2.

function missingNumber(nums: number[]): number {
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== i) {
      return i;
    }
  }

  return sorted.length;
}

console.log(missingNumber([3, 0, 1]));

// R-TASK
// // Shunday function yozing, u string parametrga ega bolsin.
// //  String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// //   MASALAN: calculate("1+3") return 4.

// function calculate(str: string): number {
//   const [num1, num2] = str.split("+").map(Number);
//   return num1 + num2;
// }

// console.log(calculate("1+3"));

// Q-TASK
// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string.
// Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true;
//  hasProperty({name: "BMW", model: "M3"}, "year") return false.
// function hasProperty(Object: any, String: any) {
//   if (Object[String] !== undefined) {
//     return true;
//   }
//   return false;
//   //   return String in Object;
// }
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));

// P-TASK:
// Shunday function yozingki, u object qabul qilsin, va uning elementlarini ham,
//  o'zini ham arrayga o'zgartirib qaytarsin.
//  MASALAN: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]].

// function objectToArray(obj: Record<string, unknown>) {
//   let newArr = [];
//   for (let [key, value] of Object.entries(obj)) {
//     newArr.push([key, value]);
//   }
//   return newArr;
// }

// const obj = { a: 10, b: 20 };

// console.log(objectToArray({ a: 10, b: 20 }));

// O-TASK
// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar
//  yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45.

// function calculateSumOfNumbers(aralsh_array: unknown[]): number {
//   return aralsh_array.reduce<number>((sum, value) => {
//     if (typeof value === "number" && Number.isFinite(value)) {
//       return sum + value;
//     }
//     return sum;
//   }, 0);
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 45]));

// // N-TASK
// // Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
// //  orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// //   MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false

// function palindromCheck(word: string): boolean {
//   return word === word.split("").reverse().join("");
// }
// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));
// console.log(palindromCheck("mom"));
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

/*Project Standarts:
Project Standards:
-Logging standards:
-Naming standards:
functions, method, variables => CAMEL
classes => PASCAL
folder, file => KEBAB
css => SNAKE
-Error handling
 */

/*Request:
Traditinal Api
Rest Api
GraphQL Api
*/

/*Frontend development:
Tradtional Frontend Development(FD) => BSSR(Adminka) =>EJS
Modern Frontend Development => SPA(Users' applications) => React
*/
/*Cookies:
request join
self destroy
*/

/*Validation:
 Frontend Validation
 Backend Validation
 Database Validation
 */
