"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const test_1 = require("./test");
(0, vitest_1.describe)("calculater", () => {
    (0, vitest_1.test)('the length of str', () => {
        const str = 'meni';
        const result = (0, test_1.lengthStr)(str);
        (0, vitest_1.expect)(result).toBe(4);
    });
    (0, vitest_1.test)('this str is polindrom : ', () => {
        const str = 'aba';
        const result = (0, test_1.isPolindrom)(str);
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.test)('arrey of numbers arr sorted :', () => {
        const arrNum = [3, 7, 1, 9, 6, 8];
        const result = (0, test_1.sortNumbers)(arrNum);
        const resultArr = [1, 3, 6, 7, 8, 9];
        (0, vitest_1.expect)(result).toEqual(resultArr);
    });
    (0, vitest_1.test)('sqrt returns root', () => {
        (0, vitest_1.expect)((0, test_1.sqrt)(4)).toBe(2);
    });
    (0, vitest_1.test)('sqrt throws on negative', () => {
        (0, vitest_1.expect)(() => (0, test_1.sqrt)(-1)).toThrowError();
    });
    (0, vitest_1.test)('the sum of all the number', () => {
        const arrayNum = [1, 5, 3, 6];
        const result = (0, test_1.sumArray)(arrayNum);
        const expected = 15;
        (0, vitest_1.expect)(result).toBe(expected);
    });
    (0, vitest_1.test)('the sum is bigger then', () => {
        const arrayNum = [1, 5, 3, 6];
        const result = (0, test_1.sumArray)(arrayNum);
        (0, vitest_1.expect)(result).toBeGreaterThan(14);
    });
    // test('fetches valid user', async () => {
    //     const user = await fetchUserData(1);
    //     expect(user.id).toBe(1);
    //   });
    // test('invalid user id', async() => {
    //     await expect(fetchUserData(1000)).rejects.toThrowError();
    //   });
});
