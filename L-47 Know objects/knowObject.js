// ******Lecture : 47 Now You know Objects in Javascript *******

// mathPie Value Concept 

// console.log(Math.PI); 
// Math.PI=5
// console.log(Math.PI);
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const myObj= {
    names:"tejas",
    rollNo:1233,


    orderChai:function(){
   console.log("Code fat gaya");
    },

}
console.log(Object.getOwnPropertyDescriptor(myObj,"rollNo"));

Object.defineProperty(myObj,'rollNo',{
    // writable:false,
    enumerable:true,
    
})

console.log(Object.getOwnPropertyDescriptor(myObj,"rollNo"));

for (const [key,value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }
    
}

