// *************Lecture-8: Strings In Js **************

// string is denoted by " " , ' '

// string concate
// let x="Tejas"
// let y ="Bisen"
// console.log(x+y);

// const college="HVPM COET"
// const Fees =85000
// console.log("My COllege Name is :" + college + " Along with fees is :" + Fees);

// Backtics  / String Interpolation
// BEST PRACTISE TO WRITE THE ELEMENT DYNAMIC NO NEED TO SPECIFY THE CONCATANATION REPATADALY
// console.log(`My College Name Is: ${college} and along with Fees is : ${Fees}`);

// Another way Of Declaring String

// const newString= new String("ANother_Way Of Declaration")
// console.log(newString);

// STRING FUNCTION IMP USED IN MOST //

// const hero = "Superman I Liked The Most Among all";

// access the element in the string
// console.log(hero[5]);
// console.log(hero.length);  // LENGTH
// console.log(hero.toUpperCase()); // UPPERCASE SIMILAR LOWAERCASE
// console.log(hero.charAt(2)); // Find The  character using index value
// console.log(hero.indexOf('n')); // Find the Index Value where the alphabet is located using  specifying the character charater
// console.log(hero.substring(0,4));  // return the string which specify in between arhument
// console.log(hero.slice(0,-3));   // cut out the string and return remainning string and it takes also neg value

// trim method  -> Remove the  Beginneing and ending spaces

// const sen = "  india is my country          ";

// console.log(sen.trim());
// Replace mathod -> do replace the character by passing as argument in the replace method
//  .replace( Replace What ? , Replace To ?) 
//Example
// const url ="https://bisentejas.me/%20portfolio"
// const updatedUrl= url.replace('%20'," ")
// console.log(updatedUrl);

// includes Method -> used to check whether 
// string/alphabet present or not and return value in boolean format i.e true or false

// console.log(hero.includes("Liked"));

// IMP SPLIT METHOD  -> seperate the given valur by specific things like space and 
// converted into  the array  like this:
// OG String const hero = "Superman I Liked The Most Among all"; 
//  [ 'Superman', 'I', 'Liked', 'The', 'Most', 'Among', 'all' ]
// console.log(hero.split(" "));




// Remmber The String Method 
// USE THE BACKTICS/STRING INTERPOLATION/TEMPLATE LITERAL 

    