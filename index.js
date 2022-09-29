// Спец. символы используемые в реуглярных выражениях: $ ^ . * + ? \ / {} [] () | 

// let str = 'a1a a2a a3a a4a a5a aba aca';
// let res = str.replace(/a\da/g, '!');
// console.log(res);

// let str1 = 'a1a a22a a333a a4444a a55555a aba aca';
// let res1 = str1.replace(/a\d+?a/g, '!');
// console.log(res1)

// let str2 = 'aa a1a a22a a333a a4444a a55555a aba aca';
// let res2 = str2.replace(/a\d*?a/g, '!');
// console.log(res2)

// let str3 = 'avb a1b a2b a3b a4b a5b abb acb';
// let res3 = str3.replace(/a\Db/g, '!');
// console.log(res3);

// let str4 = 'ave a#b a2b a$b a4b a5b a-b acb';
// let res4 = str4.replace(/a\Wb/g, '!');
// console.log(res4)

// let str5 = 'ave a#a a2a a$a a4a a5a a-a aca';
// let res5 = str5.replace(/\s/g, '!');
// console.log(res5);


// let str6 = 'aba aea aca aza axa';
// let res6 = str6.replace(/a[bex]a/g, '!');
// console.log(res6)

// let str7 = 'a1a a3a a7a a9a aba';
// let res7 = str7.replace(/a[3-6]a/g, '!');
// console.log(res7);

// let str8 = 'aba aea afa aha aga';
// let res8 = str8.replace(/a[a-g]a/g, '!');
// console.log(res8)

// let str9 = 'aba aea afa aha aga';
// let res9 = str9.replace(/a[a-fj-z]a/g, '!');
// console.log(res9);

// let str10 = 'aAa aea aEa aJa a3a';
// let res10 = str10.replace(/a[a-fA-D]a/g, '!');
// console.log(res10)

// let str11 = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res11 = str11.replace(/a[a-z]+?a/g,'!')
// console.log(res11)

// let str12 = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res12 = str12.replace(/a[a-zA-Z]+?a/g,'!')
// console.log(res12)

// let str13 = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res13 = str13.replace(/a[a-z0-9]+?a/g, '!');
// console.log(res13);




// let str = 'aeeea aeea aea axa axxa axxxa';
// console.log(str.replace(/a(e+?|x+?)a/g, '!'));

// let str2 = 'aeeea aeea aea axa axxa axxxa'; 
// console.log(str2.replace(/a(e{2}|x+?)a/g, '!'));

// let str3 = 'site.ru sss site.com zzz site.net';
// console.log(str3.match(/\w+?[.]\w+/g));

// let str4 = 'a1b c34d x567z';
// let res4 = (str4.match(/\d/g));
// console.log(res4);
// let sum4 = res4.reduce((num1, num2)=> {
//     return Number(num1)+Number(num2);
// })
// console.log(sum4);

let str = '123 456 789';

let reverse = Array.prototype.map.call(str, (x)=> x).reverse().join('');
console.log(reverse.split(' ', 3).reverse());

// console.log(str.split(' ', 3).reverse());
// let result = str.match(/\d/g,).reverse()
// console.log(result);
// console.log(result.join('').slice('',3))

let str2 = '31.12.2025 30.11.2024 29.10.2023';
console.log(str2.replace(/\d+.\d+.\d+/g, function(match) {
    return match.split('.').reverse().join('-')
}))

let str3 = '31.12.2025 30.11.2024 29.10.2023';
console.log(str3.replace(/(\d+).(\d+).(\d+)/g, '$3-$2-$1'));

// HOMEWORK

// ПЕРВЫЙ ПРИМЕР
// let userYear = prompt('Угадай год');
let userYear = '2024';
console.log(userYear);
console.log(/(19|20|21)\d\d/.test(userYear));
// ВТОРОЙ ПРИМЕР
let time = '10:30';
console.log(/^([01]\d|2[0-3]):[0-5]\d/.test(time));
// ТРЕТИЙ ПРИМЕР
let stroke = 'aaa bb aaa cc bb ww rr aaa';
console.log(stroke.replace(/(\b\S+\b)(?=.*\1)/g, "!"));