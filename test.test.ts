import { describe, expect, test } from 'vitest'
import { lengthStr, sortNumbers ,isPolindrom, sqrt, sumArray, fetchUserData, fibonachi} from './test'
describe ("calculater",()=>{
    
    test('the length of str', () => {
        const str = 'meni';
        const result = lengthStr(str)
        expect(result).toBe(4)
    })

    test('this str is polindrom : ', () => {
        const str = 'aba';
        const result = isPolindrom(str);
        expect(result).toBe(true)
    })

    test('arrey of numbers arr sorted :', () => {
        const arrNum = [3,7,1,9,6,8]
        const result = sortNumbers(arrNum)
        const resultArr = [1,3,6,7,8,9]
        expect(result).toEqual(resultArr)
    })
    
    test('sqrt returns root', () => {
        expect(sqrt(4)).toBe(2);
      });
      
    test('sqrt throws on negative', () => {
        expect(() => sqrt(-1)).toThrowError(); 
      });
    
    test('the sum of all the number',() => {
        const arrayNum = [1,5,3,6]
        const result = sumArray(arrayNum)
        const expected = 15
        expect(result).toBe(expected)
    })

    test('the sum is bigger then',() => {
        const arrayNum = [1,5,3,6]
        const result = sumArray(arrayNum)
        expect(result).toBeGreaterThan(14)
    })
    
    test('fetches valid user', async () => {
        const user = await fetchUserData(1);
        expect(user.id).toBe(1);
      });
    test('invalid user id', async() => {
        await expect(fetchUserData(1000)).rejects.toThrowError();
      });

    test('the new fibonachi arrey works', () => {
        const arrFib = [0,1,1,2,3,5]
        const result = fibonachi(arrFib)
        const expected = [0,1,1,2,3,5,8]
        expect(result).toEqual(expected)
    })


})
