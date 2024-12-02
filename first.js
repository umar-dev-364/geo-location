function fizzBuzz () {
    for(let num = 1; num <= 50; num++){
        if(num % 3 === 0 && num % 5 === 0) {
            console.log(`${num} FizzBuzz`);
        } else if( num % 3 === 0) {
            console.log(`${num} Fizz`);
        }else if(num % 5 === 0) {
            console.log(`${num} Buzz`);
        }else {
            console.log(num);          
        }    
    }
}
// fizzBuzz();

function sum(arr){
    
    let total =  arr.reduce((acc, num) => acc + num , 0);
    return total;
}

// console.log(sum([1,2,3,4]));


// Reverse a String

// function reverseString(str){
//     let splittedString = str.split('')
//     let reversing = splittedString.reverse();
//     let reversedString = reversing.join('');
//     // console.log(reversedString);
    
//     return reversedString;
// }

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }


function reverseString(str) {
    if(/\s/.test(str)){
        let reverse = str.split(' ').join(' ');
        return reverse.split('').reverse().join('');
    }else {
        return str.split('').reverse().join('');
    }
}

// console.log(reverseString("Hello World"));

function largestNumber(arr){
    let largest = Math.max(...arr)
    return largest;
}
// console.log(largestNumber([1,2,3,4,5]));


function findVowel(str){
    let vowels = ['a','e','i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str.charAt(i))) count++;
    }
    return count;
}

// console.log(findVowel("codieshub"));



// Second Largest Number 

function secondLargest(arr){

    if(arr.length < 2){
        console.log("Give more then 2 arguments");
    }

    let uniqueArr = [...new Set(arr)];
     console.log(uniqueArr);
     
    uniqueArr.sort((a,b) => b - a);

    return uniqueArr[1]
}

// console.log(secondLargest([1,2,3,2,3,4,5]));


function tempConverter (num, temp){
    if(temp === 'C'){
        return ((num * (9 / 5) + 32))
    }else if(temp === 'F') {
        return ((num - 32) * 5 / 9)
    }else {
      return  "Enter Valid Unit"
        
    }
}

// console.log(tempConverter(64, 'C'));



// Check for Palindrome
function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    if(str === reversed){
        return true;
    }else{
        return false;
    }
}

//  console.log(isPalindrome("level"));


//  Check for Prime Number

function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

// console.log(isPrime(7));



// Replace Spaces with Hyphens
function replaceHyphens(str){
    let newStr = str.replace(' ', '-');
    return newStr;
}

// console.log(replaceHyphens("hello world"));



// Sort an Array without using .sort() function


function checkAnagram(str1, str2){
    let splittedStr1 = str1.split('').sort().join('');
    let splittedStr2 = str2.split('').sort().join('');
    console.log(splittedStr1, splittedStr2);
    
    return splittedStr1 === splittedStr2 ? true : false;
}
// console.log(splittedStr1);

// console.log(checkAnagram('hello', 'world'));
// console.log(checkAnagram('listen', 'silent'));

// let str = "Codieshub";
// console.log(str.slice(0,3));
// console.log(str);


let str = "Hello world";
// console.log(str.endsWith("world"));


console.log(typeof undefined);

