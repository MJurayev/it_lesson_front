export 
async function  getCourses(){
    const res = await fetch("http://localhost:3004/courses").
    then(respone=>{return respone.json()})
    .then((response)=>{
      console.log(response)
    }).catch(()=>{
      console.log("Error");
    });
    return res;
}
export function likedCourse(){
  
}