// let js = "amazing";
// console.log("Jonas");
// console.log(23);
// let firstName = "Natilda"
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javasriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

//
/*string and template literals
const firstName = 'Jonas';
const job = 'teacher';
const year = 2037;
const birthYear = 1997;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('Just a regular string...');
console.log('String with \n\
multiple \n\
lines');
console.log('Sttring multiple lines');*/
/*gia su viet mot chuong trinh kiem tra xem nguoi co duoc phep thi lay bang lai xe khong
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license ');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.89;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIJohn = massJohn / heightJohn ** 2;
const BMIMark = massMark / heightMark ** 2;

const markHigherBMI = BMIJohn > BMIMark;
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}*/
/*type conversion hoan vi*/
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23)/*mau trang va trong ngoac le bieu hien kieu chuoi*//*, 23); //gia tri mau tim la gia tri thuc su co kieu chuoi
// type coercion
console.log('I am ' + 23 + ' years old')
console.log('I am ' + '23' + ' years old')
let n = '1' + 1;// kieu ep buoc
n = n - 1;
console.log(n);*/
// 5 falsy values: 0, ' ', underfined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas)'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log('You shold get a job');
};

let height = 1;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDERFINED')
}*/

/*const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');

if (age === 18) console.log('You just became an adult :D (loose)');
const favourite = Number(prompt("What's your farvourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');*/
/*const hasDriversLicense = true;//A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shoulDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false;//C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}*/
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas)
//   console.log('Both win the trophy!');
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas)
//   console.log('Both win the trophy!');
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas'
console.log(`I'm ${2037 - 1991} years old ${me}`)
