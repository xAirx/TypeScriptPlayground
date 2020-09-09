
// Type Alias example

type CombineAble = number | string;
type ConversionDesc = 'as-number' | 'as-text';

function combine2(
	/* input1: number | string,
	input2: number | string, */
	input1: Combineable,
	input2: Combineable,
/* 	resultConversion: 'as-number' | 'as-text';
 */	resultConversion: ConversionDesc
) {
	let result;
	if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;


	// if (resultConversion === 'as-number') {
	//   return +result;
	// } else {
	//   return result.toString();
	// }
}

const combinedAges2 = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames2 = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
