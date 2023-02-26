class Instructor {
   name = 'Adnan Hassan'
   designation = 'Web Instructor'
   team = 'Web Team'
   location;
   startSupportSession(time){
      console.log(`start the support session at ${time}`)
   }
   createQuiz(module){
      console.log(`create quiz for ${module}`)
   }
}
const adnan = new Instructor();
console.log(adnan);
