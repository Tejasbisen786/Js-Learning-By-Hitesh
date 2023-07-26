// ******** Object De-Strcute Json API Into *******

// Destructuring Of Objects 

const course ={
    courseName: "Js Hindi",
    Price :"999",
    CourseTeacher:"Hitesh"
}
 
// console.log(course.CourseTeacher);

// Optimize the accesing the value 
const{CourseTeacher:Teacher,Price}=course
console.log(Teacher);
console.log(Price);

          //    props.company 
// const navbar =({company})=>{

// }
// navbar(company="Tejas")


// ***********API***************

//   Keys And value Write In String Format in json file 
// {
//     "name":"tejas",
//     "courseName":"Js",
//     "Price":"Free"
// }


[
    { 

    },
    {

    }
    ,
    {},
    {},
]




// https://jsonformatter.org/  


// https://randomuser.me/api/

// {"results":[{"gender":"male","name":{"title":"Monsieur","first":"Dominic","last":"Faure"},"location":{"street":{"number":1232,"name":"Rue de L'Abbé-Patureau"},"city":"Trubschachen","state":"Zürich","country":"Switzerland","postcode":1154,"coordinates":{"latitude":"-63.3937","longitude":"-101.6425"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"dominic.faure@example.com","login":{"uuid":"34619ef9-3200-41c3-8c6e-6efd04856a6e","username":"happywolf446","password":"silver1","salt":"pjabgWnG","md5":"e19cb7327251c84c0be8d6a3a20e5814","sha1":"743e3cca10011bb310cc9856e30e195c782db5b5","sha256":"874413006539e0369dc985aab74fe6c0fbafa74378534bdb46a11c39a61b749c"},"dob":{"date":"1997-08-05T06:02:34.471Z","age":25},"registered":{"date":"2021-08-03T01:58:39.574Z","age":1},"phone":"076 534 64 84","cell":"075 338 82 95","id":{"name":"AVS","value":"756.0855.9661.94"},"picture":{"large":"https://randomuser.me/api/portraits/men/86.jpg","medium":"https://randomuser.me/api/portraits/med/men/86.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/86.jpg"},"nat":"CH"}],"info":{"seed":"bba584b30383d320","results":1,"page":1,"version":"1.4"}}