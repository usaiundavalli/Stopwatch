// let key = prompt("Enter key you want to set");
// let value = prompt("Enter value you want to set");

// localStorage.setItem(key, value);

// console.log(`The vaule at ${key} is${localStorage.getItem(key)}`);

// if (key == "red" || key == "blue") {
//   localStorage.removeItem(key);
// }

// if (key == 0) {
//   localStorage.clear()
// }

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve = "success";
//   } else {
//     resolve = "failed";
//   }
// })
// p.then((message) => {
//   console.log("This is a then" + message);
// }).catch((message) => {
//   console.log("This is a then catch" + message);
//})

//comparing Dates
var d1=new Date('20/01/2022');
var d2=new Date('21/01/2022');
if(d1>d2){
  console.log("True Frist date is greather than the second date.");

}
else if(d1<d2){
  console.log("Flase second date is a greather than the Frist date..");
}
else{
  console.log("Both are correct");
}
