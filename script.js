//* Arrayda tekrarlanan elementleri ayri array-e cixarmaq

// let arr = [1,2,3,4,2,5,1];
// let new_arr=[];
// arr.forEach((el,index) =>{
//     if(!new_arr.includes(el) && arr.indexOf(el) !== index){
//         new_arr.push(el);
//     }
// });
// console.log(new_arr);

//* Sozlerin palindrom oldugunu yoxlama funksiyasi

// let word = 'nezrin';
// let reversed = word.split('').reverse().join('');
// console.log(reversed);

// function isPalindrome(word){
//     return word === word.split('').reverse().join('');
// }
// console.log(isPalindrome('nezrin'));
// console.log(isPalindrome('ana'));

//** 2 arrayda ortaq elementleri array kimi output-a cixarmaq

// function commonElements(arr1,arr2){
//    return arr1.filter(num => arr2.includes(num));
// }
// console.log(commonElements([1,2,3,4],[3,4,5,6]));

//** 2 arrayi birlesdirib sonra elementlerini toplamaq

// function sum(arr1,arr2){
//     let combined = [...arr1,...arr2];
//     let summed = combined.reduce((a, b) => a + b);
//     return summed;
// }
// console.log(sum([1,2,3,4],[3,4,5,6]));

//** Faktorial tapmaq

// function findFactorial(n){
//   let result = 1;
//   for(let i = 1; i<=n; i++){
//     result *= i;
//   }
//   return result;
// }
// console.log(findFactorial(5));

//* funksiya str parametri olaraq cumle qebul edir ve biz o cumlede length deyeri en uzun olan sozu 
//* ve onun length deyerini return etmeliyik.

// function findLongestWordLength(str) {
//     let word = str.split(' ');
//     let longWordLength = 0;
//     let longWord = '';
//     word.forEach(item => {
//         if(item.length > longWordLength){
//             longWordLength = item.length;
//             longWord = item;
//         }
//     })
//     return longWordLength + ', ' + longWord;
// }
// console.log(findLongestWordLength("menim adim nezrindir"));

//* kontrol etmeliyik ki eger soz samit ile baslayirsa ve ya samit ile davam edirse o samitleri 
//* kesib hemin sozun sonuna birlesdiririk ve "ay" sozunu elave edirik eger sait ile baslayirsa 
//* sadece sozun sonuna "way" artirir return edirik

// function convertWordBasedOnVowel(str){
//     let arr = str.toLowerCase().split('');
//     if(["a","e","i","o","u"].includes(arr[0])){
//         return str.toLowerCase() + "way";
//     }else{
//         let firstVowelIndex = arr.findIndex(item => ["a","e","i","o","u"].includes(item));
//         let prefix = str.toLowerCase().slice(0,firstVowelIndex);
//         let suffix = str.toLowerCase().slice(firstVowelIndex);
//         return suffix + prefix + "ay";
//     }
// }

// console.log(convertWordBasedOnVowel("california"));

//* 2ci parametrde verilen sozu cumle icerisinde tapib 3cu parametrde verilen soz ile evez etmeli

// function myReplace(str, before, after){
//     if(before.charAt(0) === before.charAt(0).toUpperCase()){
//     let ifUpper = after.charAt(0).toUpperCase() + after.slice(1).toLowerCase();
//         return str.replace(before, ifUpper);
//     }else{
//         return str.replace(before, after)
//     }
// }

// console.log(myReplace("Let us go to the store", "store", "mall"));
// console.log(myReplace("His name is Tom", "Tom", "john"));

//* G herfidise yanina C gelecek, C herfidide yanina G gelecek , A herfidise yanina T , T herfidise yanina A gelecek.

// function pairElement(str){
//     let after = str.split("");
//     let mapped = after.map(el => [el] );
//     for(let i = 0; i < mapped.length; i++){
//         if(mapped[i][0] === 'G'){
//             mapped[i].push('C');
//         }else if(mapped[i][0] === 'C'){
//             mapped[i].push('G');
//         }else if(mapped[i][0] === 'A'){
//             mapped[i].push('T');
//         }else{
//             mapped[i].push('A');
//         }
//     }
//     return mapped;
// }

// console.log(pairElement("GCG"));
// console.log(pairElement("ATCGA"));
// console.log(pairElement("CTCTA"));