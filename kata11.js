const organizeInstructors = function(instructors) {
let finalOutput={}
    // Put your solution here
for(let i=0; i<instructors.length; i++){
    if(finalOutput.hasOwnProperty(instructors[i].course)==false){
        let short=instructors[i].course
        finalOutput[short]=[]
    }
}
    for(let i=0; i<instructors.length; i++){
        if(finalOutput.hasOwnProperty(instructors[i].course)){
            let shorts=instructors[i].course
            finalOutput[shorts].push(instructors[i].name)
        }
    }


return finalOutput
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));