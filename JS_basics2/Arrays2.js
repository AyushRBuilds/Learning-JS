const marvelH = ["Thor", "IronMan" ,"Loki"]
const dcH = ["SuperMan", "BatMan","Flash"]

// marvelH.push(dcH)//these push the one array into the other array at the end index which sort of looks like the array inside the array[  [subarray]]
// console.log(marvelH);
//And By These we come to learn that Array takes any typeofdata(Numbers ,boolean,strings,Array) as its elements even the another array itself.
// console.log(marvelH.length);
//don't asume that the length of the both of the arrays get combine separatly ;No the subarray will be counted as one only ,since its just the one element for original array.
// console.log(marvelH[3][1]);
//Here as we said that the subarray as count as one ; But the elements of the subarray can be get accessed via this console.log(arrayname[IndexofSubarray][index of element(acc to the parent array not grand parent) to which we're accessing ])

//UNLIKE PUSH METHOD
let heroes_list= marvelH.concat(dcH);//these is one more way same as .push().but here instead of forming the subarray it just staple the copies(becoz, the two arrays which are getting conCat originally remains undisturbed ) of both array leading to form new array ,
console.log(heroes_list)
console.log(marvelH)
console.log(heroes_list.length)//abh toh length bhi bhe bhadegi kyuki abhkibaar  dusri array nahi balki uske elements aake judgaye hai.


//SIMILAR TO conCat there is Spread operator which is being used in the industry alot .
const all_Heroes = [...marvelH,...dcH]//yaha Spread operator ko aise likha jata ki square brackets mein three dots followed by arrayname and multiple arrays separated by comma: yeh basically something like aarray as Glass Bottle so when u spread(drop the bottle) it all the elements inside it get spread leading to form new array.
console.log(all_Heroes);


//now lets say u have a condition in which u have multiple arrays under arrays like the grandpa/pa/son/grandson wala case.
const real_array =[ 1,2,3, [4,5,6],7,[8,9,[10, 11,12]]]//Something like this
//Now to resolve this case 
let new_real_array = real_array.flat(1)//this .flat(mention here the depth upto which u want to resolve the case ) then this will do the work of resolve for you creating the new array.Undisturbed the Original.

//above here depth mean the pa as depth 1/son as depth 2;like these.
console.log(new_real_array);



//Some Methods used alot on Datascraping and conversion of others in array/object.


console.log(Array.isArray("Ayush"))//basically it tell you whthere the value inside the parenthesis is array or not.Returns the Boolean Value.

//now If you want the array conversion of that "Ayush"
console.log(Array.from("Ayush"))//this coverts the value in parenthesis into the Array.

//Kuch syntaxes mein upar wala method ek empty array deta hai for e.g look below
console.log(Array.from({Name:"Ayush"}))// Interesting case for Interviews.toh agge jaake dekhnege ki isse kaise resolve karte hai kiase hum batate hai ki keys se array /values se array /banaye.


//Abh lets Say u have different variables usko agar as array store karna hai /basically conversion toh:

let Score1=100;
let Score2=200;
let Score3=300;
console.log(Array.of(Score1, Score2, Score3))//Yaha Instead of .from hum
// .of() karke parenthesis ke Under voh vatiables ke nam dalenge jinko array mai dalna hai .

