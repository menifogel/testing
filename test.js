"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonachi = exports.fetchUserData = exports.sumArray = exports.sqrt = exports.sortNumbers = exports.isPolindrom = exports.lengthStr = void 0;
function lengthStr(str) {
    return str.length;
}
exports.lengthStr = lengthStr;
function isPolindrom(str) {
    return str === str.split('').reverse().join('');
}
exports.isPolindrom = isPolindrom;
function sortNumbers(arrNum) {
    return arrNum.sort(function (a, b) {
        return a - b;
    });
}
exports.sortNumbers = sortNumbers;
function sqrt(num) {
    if (num < 0) {
        throw new Error('Negative number');
    }
    return Math.sqrt(num);
}
exports.sqrt = sqrt;
function sumArray(arrayNum) {
    let sum = 0;
    for (let i = 0; i < arrayNum.length; i++) {
        sum += arrayNum[i];
    }
    return sum;
}
exports.sumArray = sumArray;
function fetchUserData(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = yield response.json();
        if (!response.ok) {
            throw new Error(`User ${userId} not found`);
        }
        return data;
    });
}
exports.fetchUserData = fetchUserData;
// fetchUserData(1)
//     .then(user => {
//         console.log('the data is', user);
//     })
//     .catch(err => {
//     });
function fibonachi(arrFibo) {
    let next = arrFibo[arrFibo.length - 1] + arrFibo[arrFibo.length - 2];
    arrFibo.push(next);
    return arrFibo;
}
exports.fibonachi = fibonachi;
let aarr = [0, 1, 1, 2, 3, 5];
let aa = fibonachi(aarr);
console.log(`the new fibonachi arr ${aa}`);
