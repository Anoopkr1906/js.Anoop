// ********** Objects Destructure *********

const course = {
    courseName : "Chai Aur Code",
    coursePrice : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor} = course // getting a element of object
console.log(courseInstructor);

// we can name anything or destructure object elements as shown below ...
const {courseInstructor :instructor} = course ;
console.log(instructor);



//*********** JSON for API ******************
/*
{
    "name" : "Anoop",
    "price" : "999",
    "courseName" : "free"

}
*/