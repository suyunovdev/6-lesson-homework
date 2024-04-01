// 1. Quyidagi ifodalarning javoblarini keltiring.
//   "" + 1 + 0 >>10
//   "" - 1 + 0 >> -1
//   true + false >>1
//   6 / "3" >>0.46
//   "2" * "3" >>6
//   4 + 5 + "px" >> '9px'
//   "$" + 4 + 5 >> '$45'
//   "4" - 2 >> 2
//   "4px" - 2 >> NaN
//   "  -9  " + 5 >> ' -9 5'
//   "  -9  " - 5 >> -14
//   null + 1 >> 1
//   undefined + 1 >>NaN
//   " \t \n" - 2 >> -2






// 2. Quyidagi ifodalarning javoblarini keltiring.
//   5 > 4  >>true
//   "apple" > "pineapple" >> false
//   "2" > "12" >> true
//   undefined == null  >>true
//   undefined === null  >> false
//   null == "\n0\n" >> false
//   null === +"\n0\n"  >> false







// 3. Quyidagi code'da alert() ishlaydimi?
//   if ("0") {
//     alert( 'Hello' );   >> ha ishlaydi " Hello chiqadi "
//   }  




      

// 4. if..else dan foydalangan xolda, prompt'dan qiymat oladigan va quyidagi javoblarni chiqaradigan code yozing:
//   1, agar kiritilgan qiymat 0 dan katta bolsa,
//   -1,agar 0 dan kichik bolsa,
//   0, agar 0 bolsa.


// let qiymat = +prompt("Qiymat kiriting: ");

// if (qiymat > 0) {
//     console.log(1);
// } else if (qiymat < 0) {
//     console.log(-1);
// } else {
//     console.log(0);
// }






// 5. Quyidagi code'ni ? (ternary operator)'da yozib chiqing:

//   let result;

//   if (a + b < 4) {
//     result = 'Below';
//   } else {
//     result = 'Over';
//   }

// let a = +prompt('a sonni kiriting')
//  let b = +prompt('b sonni kiriting')
// let result = (a+b<4) ? 'Below':'over'
// console.log(result);







// 6. 5. Quyidagi code'ni ? (ternary operator)'da yozib chiqing:

//   let message;

//   if (login == 'Employee') {
//     message = 'Hello';
//   } else if (login == 'Director') {
//     message = 'Greetings';
//   } else if (login == '') {
//     message = 'No login';
//   } else {
//     message = '';
//   }




// let message = (login == 'Employee') ? 'Hello' :
//               (login == 'Director') ? 'Greetings' :
//               (login == '') ? 'No login' :
//               '';




