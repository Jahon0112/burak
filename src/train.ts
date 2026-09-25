//@MITASK**/
//1-way
function consgetSquareNumbers(
  arr: number[],
): { number: number; square: number }[] {
  const newArr: { number: number; square: number }[] = [];

  for (const elem of arr) {
    const newObj: { number: number; square: number } = {
      number: elem,
      square: elem * elem,
    };

    newArr.push(newObj);
  }
  return newArr;
}
console.log(consgetSquareNumbers([1, 2, 3, 4, 5, 7]));
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
