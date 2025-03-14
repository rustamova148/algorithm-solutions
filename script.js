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
// function topla(arr1,arr2){
//     let combined = [...arr1,...arr2];
//     let summed = combined.reduce((a, b) => a + b);
//     return summed;
// }
// console.log(topla([1,2,3,4],[3,4,5,6]));
//** Faktorial tapmaq
// function factorialTap(n){
//   let sonuc = 1;
//   for(let i = 1; i<=n; i++){
//     sonuc *= i;
//   }
//   return sonuc;
// }
// console.log(factorialTap(5));

