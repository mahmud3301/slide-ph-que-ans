// 1. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড়

const num = parseInt();

if (num % 2 === 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is odd");
}


// 2. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো

var numbers = [1,7,9,6,8,2,4,3,5,11,10,13,14,17,16,19,20,12,15,18];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 3. এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?

let year = parseInt();

if (isNaN(year)) {
  console.log("");
}
else {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
  }
  else {
    console.log(year + " is not a leap year.");
  }
}

// 4. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " ");
  }
}

var friends = ["Rahim", "Karim", "Abdul", "Sadad", "HeroAlom"];

// 5. .উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 

var longestName = "";

for (var i = 0; i < friends.length; i++) {
    if (friends[i].length > longestName.length) {
        longestName = friends[i];
    }
}

console.log("The friend with the longest name is: " + longestName);

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// 6. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে

let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (!uniqueNumbers.includes(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }
}

console.log("Unique numbers: " + uniqueNumbers);

// 7. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো 

var maxNumber = Math.max(...numbers);
console.log(maxNumber);