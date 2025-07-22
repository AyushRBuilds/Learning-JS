// Arrays
// - Arrays can grow or shrink, so they need flexible space that the stack can't provide.
// - The reference (myArr) sits in the stack, but the actual array data lives in the heap.

const myArr=[0,1,2,3,4,]
console.log(myArr[3]);//returns the value at that parrticular Index.
console.log(myArr.length);//returns the Length of the following Array.

//Methods of Arrays.

myArr.push(7)
console.log(myArr)
//push the value present in parenthesis() to the array always at the end.

myArr.pop()
console.log(myArr)
//pull out end value from the array.

myArr.unshift(9)
console.log(myArr)
//the VAlue present in the parenthesis() get inserted at 0th index in array.thus Index odf every value in array get changed(shift).

myArr.shift()
console.log(myArr)
//the value at the 0th index in the array get removed directly using shift().i.e very value gets shifted to there original indexes.


//there are some methods in JS Arrays which are the questionaire .

console.log(myArr.indexOf(2))
//this method returns the Value/element present at the index present in ().
console.log(myArr.indexOf(9))
//if the given value in parenthesis doesn't exist in the array then it returns -1 as result.

console.log(myArr.includes(9))
//returns the boolean type ans ,basically it just ensure us that the value given in (),do exist in array or not[true/false] .

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
//using the .join method the elements/values of the arrays get return as a string and get bind separating using comma,i.e Basically the Datatype of the array get change.see below.
console.log(typeof myArr)//here the Datatype is Object.
console.log(typeof newArr)//Here the Datatype is String.


//slice() or splice().


//1st Slice.
console.log('A',myArr);
const myn1 = myArr.slice(1,3)//the value at the Index 3 never get insludes ;kinda  one closed interval of jee 
//Here the Original array remains intact .
console.log(myn1);
console.log('B',myArr);

//2nd Splice.
console.log('Z',myArr);
const myn2 = myArr.splice(1,3)//the value at the Index 3  get includes ;kinda  Both closed interval of jee 
//Here the Original array gets Disturbed.i.e Original Array get manipulate using splice method.

console.log(myn2);
console.log('Y',myArr);

