// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);
// [a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70];
// console.log(rest);
// let colors = ["orange", "mango", "pineApple"];
// console.log(colors.length);
// colors.push("apple");
// console.log(colors);
// colors.reverse();
// console.log(colors);

// let food = ["rice", "beans", "yam", "garri"];
// food[4] = "soup";
// console.log(food[4]);
// food.forEach((item, index) => {
//   console.log(`${index} : ${item}`);
// });
// // FILTER
// const words = ["tutorial", "solution", "congratulation", "men", "rent"];
// const result = words.filter((word) => word.length > 4);
// console.log(result);
// // CONCAT
// let juniorClasses = ["jss1", "jss2", "jss3"];
// let senoirClasses = ["ss1", "ss2", "ss3"];

// let school = juniorClasses.concat(senoirClasses);
// console.log(school);
// //copywithin(target, start)
// // copywithin(target, start, end)
// const materials = ["nails", "hammer", "plank", "tape", "cement"];
// console.log(materials.copyWithin(0, 4));
// console.log(materials.copyWithin(0, 3, 5));
// // map()
// let numbers = [2, 2, 3, 4, 5, 8];
// let map1 = numbers.map((num) => num * 2);
// let map2 = numbers.map((num) => num * 3);
// let map3 = numbers.map((num) => num * 6);
// console.log(map1);
// console.log(map2);
// console.log(map3);
// // fill()
// let figures = [2, 3, 4, 5, 6, 7, 8];
// console.log(figures.fill(0, 0, 6));
// console.log(figures.fill(0, 3, 5));
// console.log(figures.fill(3, 2, 7));

// function appendToDisplay(value) {
//   document.getElementById("display").value += value;
// }
// function clearDisplay() {
//   document.getElementById("display").value = "";
// }
// function calculateResult() {
//   try {
//     document.getElementById("display").value = eval(
//       document.getElementById("display").value
//     );
//   } catch (error) {
//     document.getElementById("display").value = "Error";
//   }
// }
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculateResult() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "error";
  }
}
