const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

// const numResults: number[] = [];
// const textResults: string[] = [];
const numResults: Array<number> = [];
const textResults: Array<string> = [];

type NumOrString = number | string;
type Result = { val: number; timeStamp: Date; };

interface ResultObj {
	val: number;
	timeStamp: Date;
};

function add(num1: NumOrString, num2: NumOrString) {
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	} else if (typeof num1 === 'string' && typeof num2 === 'string') {
		return `${num1} ${num2}`;
	}

	return +num1 + +num2;
}

// function printResult(resultObj: Result) {
function printResult(resultObj: ResultObj) {
	console.log(resultObj.val);
}

buttonElement.addEventListener('click', () => {
	const num1 = num1Element.value;
	const num2 = num2Element.value;

	const result = add(+num1, +num2);
	const stringResult = add(num1, num2);

	numResults.push(result as number);
	textResults.push(stringResult as string);

	console.log(numResults, textResults);

	printResult({ val: result as number, timeStamp: new Date() });
});

const myPromise = new Promise<string>((resolve, reject) => {
	setTimeout(() => {
		resolve('It worked!');
	}, 1000);
});

myPromise.then(result => {
	console.log(result.split(' '));
})
