//Singleton= agar objects constructor se banega toh woh singleton kehlayega .
// Object.create//this is how Singleton is created .
//Agar Literals ke form se banega to to singleton nahi hoga .

//OBHECT LITERALS
// 
//lets say if interviwer ask to put the symbol in object and the access it.then 
const mySym = Symbol("Key1")//This is how we declared the symbol.

const Jsuser = {
    name : "Ayush",
    age :19,
    location:"Thane",
    [mySym] : "myKey1",//these is better we to save in this way,. to access the value of this key as a symbol only.
    email:"redekarayush07@gmail.com",
    isLogged : false ,
    "Mobile": 7506766446,
    "Sir name":"redekar"
    

}
//TWO Ways odf accesing the key & there Values .
console.log(Jsuser.email)//most  in use coz but however there are some keys of objects are not accesible like these .for e.g look down
console.log(Jsuser.Mobile)//this is accesible via these method
console.log(Jsuser["Sir name"])//but this here is not accesible with the . method.
console.log(Jsuser["email"])
//here in the [] we have to put the key in ""/coz in backend even if we never put the key in " " while forming the Object it'all already understandable that the keys are also taken as strings in the objects .

console.log(Jsuser.mySym)//yeah it's accesing the value assign to the key mySym in object byt the Datatype of it is not Symbol actually its string .So it's Not the right Method - to acces this.

console.log(Jsuser[mySym])//The [] while putting the key in the object and the []  while accesing the symbol is must .
// console.log(Jsuser)//Abh yaha jab dekhoge toh mySym is Symbol dikhayega.

//If we wanted to ovverwrite the key value from the object then :
Jsuser.email = "Ayush@chatgpt.com"//like these we can overwrite the keyvalues.
// Object.freeze(Jsuser)//Via Doing this the Object above is freezed means no ovwewriting is possible after these .//mtlb hi niche jo over writing hu hai woh actually mai lagu nahin hui.
Jsuser.email = "Ayush@microsoft.com"
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
console.log(Jsuser.greeting());//This is how we add the Greeting using the function okay!

//Lets See how we give referral to Other jeyvalue of the object using the fuction.
Jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(Jsuser.greeting2())//here now we can see that we literally referred the the keyvalue of object using the fuction.