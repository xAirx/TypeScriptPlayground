function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !=='number || typeof n2 !== 'number) {
  // throw new error('Incorrect ibnput!');
  // }

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }

  return result;
}

const number1 = 5; // 5.0 is the same
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

/* This example will fail because all value assignments are checked, not just the first one.
 */
/* let userName: string;
  userName = 'Maximilian';
  userName = false;
   */

add(number1, number2, printResult, resultPhrase);
