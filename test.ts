export function lengthStr(str: string): number {
    return str.length;
  }
  
  export function isPolindrom(str: string): boolean {
    return str === str.split('').reverse().join(''); 
  }
  
  export function sortNumbers(arrNum: number[]): number[] {
    return arrNum.sort(function(a: number, b: number){
      return a - b;
    });
  }

  export function sqrt(num: number): number {
    if (num < 0) {
      throw new Error('Negative number');
    }
    return Math.sqrt(num);
  }

  export function sumArray(arrayNum: number[]): number {
      let sum = 0;
      for(let i = 0; i < arrayNum.length; i++){
        sum += arrayNum[i];
      }
      return sum;
  }


   export async function fetchUserData(userId:number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`User ${userId} not found`); 
    } 
    return data;  
  }
  
fetchUserData(1)
    .then(user => {
        console.log('the data is', user);
        
    })
    .catch(err => {
    });
   
    export function fibonachi (arrFibo: number[]): number[] {
        let next = arrFibo[arrFibo.length -1] + arrFibo[arrFibo.length -2]
        arrFibo.push(next)
        return arrFibo
    }
    let aarr = [0,1,1,2,3,5]
    let aa = fibonachi(aarr)  
    console.log(`the new fibonachi arr ${aa}`);
    