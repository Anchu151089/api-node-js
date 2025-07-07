//1️⃣Create an array with three integers.
const IntegerArrayThree : number[] =[1,2,4]
console.log(IntegerArrayThree);
console.log('Length of array is '+IntegerArrayThree.length);

//2️⃣Create an array with two strings.
const StringArrayTwo : string[] = ["ann", "mary"]
StringArrayTwo.push("tommy")
console.log(StringArrayTwo);
console.log('StringArrayTwo.length is '+StringArrayTwo.length);

//3️⃣Create an array with three strings.
const StringArrayThree : string[] = ["ann", "mary" , "john"];
StringArrayThree.pop()
console.log(StringArrayThree);
console.log('StringArrayThree.length is '+StringArrayThree.length);

//4️⃣Create an empty array of numbers.
const emptyArray : number[] =[ ]
emptyArray.push(10);
console.log("After adding 10, length of array:", emptyArray.length);
emptyArray.push(20);
console.log("After adding 20, length of array:", emptyArray.length);
console.log(emptyArray);

//1️⃣Create an array of five numbers and print each element
const fiveNumberArray : number[] = [1,2,3,4,5]
console.log(fiveNumberArray);
for(let i = 0; i < fiveNumberArray.length; i++)
{
    console.log(fiveNumberArray[i]);
}

//2️⃣Create and print the sum of all elements
let sum =0
for(let i = 0; i < fiveNumberArray.length; i++)
{
     sum = sum + fiveNumberArray[i];
}
console.log("sum of all elements in an array is "+sum);

// 3️⃣Create new array equal to original element multiplied by 2
const originalArray : number[] = [1,2,3]
const newArray :number[] = []
for(let i = 0; i < originalArray.length; i++)
{
    newArray.push(originalArray[i]*2);
}
    console.log("new array is ");
console.log(newArray);

//4️⃣Create and print the array in reverse order
const originalArrayNum: number[] = [7, 14, 21];
for (let i = originalArrayNum.length - 1; i >= 0; i--)
{
    console.log(originalArrayNum[i]);
}


//1️⃣Find the maximum number in an array
const arrayNumbers : number[] = [1,2,3]
let firstElement = arrayNumbers[0];
for (let i=0; i<arrayNumbers.length; i++)
{
    if(firstElement<arrayNumbers[i])
    {
        firstElement = arrayNumbers[i];
    }
}
console.log("greatest number in the raw is "+firstElement);

//2️⃣Find the minimum number in an array
const numberOfArrays: number[] = [1,2,3]
let minElement = numberOfArrays[0];
for (let i=0; i<numberOfArrays.length; i++)
{
    if(minElement>numberOfArrays[i])
    {
        minElement = numberOfArrays[i];
    }
}
console.log("smallest number in the raw is "+minElement);

//3️⃣Count the number of even numbers in an array
const arrayOne : number[] = [1,2,3,4,5,6,7]
let count : number = 0;
for (let i=0; i<arrayOne.length; i++)
{
    if(arrayOne[i] % 2  == 0)
    {
        count++;
    }
}
console.log("number of even numbers in the array is "+count);

//4️⃣Create a new array from positive numbers
const arrayTwo: number[] = [1,2,-3,-4,3,6]
const emptyArrayTwo: number[] = []
for (let i=0; i<arrayTwo.length; i++)
{
    if(arrayTwo[i]>0)
    {
        emptyArrayTwo.push(arrayTwo[i]);
    }
}
console.log("positive numbers from the array are ", emptyArrayTwo);


















































