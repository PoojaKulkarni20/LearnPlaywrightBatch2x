class Students{
    static className = "Playwright2x";
    constructor(studentNames = []){
        this.studentNames  = studentNames;
    }

    printStudents(){
        console.log("Student Names:");
        this.studentNames.forEach((student, index) => {
            console.log(`${index + 1}. ${student}`);
        });
    }

    static printClassName(){
        console.log(`"Class Name: " ${Students.className}`);
    }
}

const names = ["Ram", "Sita", "Krishna", "Radha", "Shiv", "Parvati", "Narayan", "Laxmi", "Mahesh", "Saraswati"];
const s1 = new Students(names);
s1.printStudents();
Students.printClassName();
console.log("Total Students:", s1.studentNames.length);
console.log("Static Variable:", Students.className);


