// const tinderUser = new Object()//this is the Object declaration method.
// const TinderUser = {}//This is Anotherway of declaring the Object.
// console.log(typeof tinderUser)
// console.log(typeof TinderUser)
// //The only difference in both the Declaration methos is that the one one line is 1 is singleton object.while the one declared on the second line is non-singleton object.


const TinderUser = {}
TinderUser.id ="123abc"
TinderUser.name = "Avi"
TinderUser.age = 19
TinderUser.Married = false

console.log(TinderUser)
//Now Lets see the  Object under Object .
const regularUser = {
    email:"avi@gmail.com",
    fullname :{
        userfullname:{
            firstname:"hitesh",
            lastname : "redekar"
        }
    }
}
//Now to Acces the key values in these we used dot annotations.to open  more nesting ; we keep using the dot annotations. 
console.log(regularUser.fullname.userfullname)


// MeRging the Objects?combining the Objects .
// If you want to declare an object with numeric keys in JavaScript:
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1 ,obj2}//this syntax won't give u the merged object ; it will give u the object formed inside the object.

// const obj4 = Object.assign({} , obj1 ,obj2)//Well this is the way to combine or merge the objects .//woh curly braces denote the one more parameter which won't affect the output but it"s effective to write that(sign of the good dev.)
// console.log(obj4);

// //Basically the Demo of the Object.assign is :

// const target ={a:1 ,b:2};//Target is where we want to merge the other source obj.
// const source ={b:4 ,c:5};//Source is waht we want to merge to target obj.
//  const returnedTarget = object.assign(target , source)
 
//  console.log(target);
//  //Expected output : Object {a:1 , b:4 ,c:5}

//  console.log(returnedTarget === target);
//  //Expected output : true

//BUT THE THING IS THIS ABIOVE METHOD OF MERGING IS NOT MUCH IN USED ; WHAT WE USED IN INDUSTRY IS THE SREAD OPERATOR(GLASS CHODNA) WALA METHOS LIKE ARRAYS.

const obj3 = {...obj1,...obj2}//This is what we use 99% of time .
console.log(obj3)


//NOW LEARN HOW TO STORE THE OBJECTS IN THE ARRAYS AND THEN HOW TO ACCES THE KEYS OF THE OBJECTS FROM THE ARRAY.

const user=[
    {
        name:"Ayush",
        email:"avi@gmail.com"
    },
    {
        name:"hitesh",
        email:"avi@google.com"
    },
    {
        name:"shreyas",
        email:"avi@outlook.com"
    }
]

console.log(user[0].email)//This is how we stored objects in arrays  and then acces the keyvalues from it.

// NOW LET'S JUST SEE HOW CAN ACCESS JUST THE KEYS OF ONE OBJECT DEFINED ABOVE AS TinderUser IN ONELINE :

console.log(Object.keys(TinderUser));//object.keys(yaha object ka namm likhna hai ,jiske keys access krne hai uske)

//Aur ek baat dhyaan se notice karna ki abhikar jo result aya hai woh array ke form hai aayi hai.iska usage database mai jyadatar hoga .

console.log(Object.values(TinderUser))//& Similar to the keys we can acces the key values like these ; this is also results in form of the array only .
console.log(Object.entries(TinderUser))//yaha apko array ke undar [ [key:keyvalues],[key:keyvalues],......] aise kuch prapt hoga.//isse hum bohot kam use karte hai 

//Agar manlo kabhi apko check karna hai kisi object kisi key ki majudki hai ya nahi .then;

console.log(TinderUser.hasOwnProperty('age'));//always returns the value in boolean .