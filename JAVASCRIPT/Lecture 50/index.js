let student = {
    name: "Nishant",
    rollNo: 1322134,
};
let student2 = {
    name: "Arin",
    rollNo: 3253535,
};
let student3 = {
    name: "Arjun",
    rollNo: 564352,
};

function printInfo(branch, cgpa) {
    console.log(this);
    console.log(
        `Name : ${this.name} , Roll No. : ${this.rollNo} , Branch : ${branch} , CGPA  : ${cgpa}`
    );
}
// printInfo.call(student2, "CSE", "9.11");
// printInfo.call(student3, "IT", "6.9");

// printInfo.apply(student3, ["IT", "6.9"]);

let newInfo =  printInfo.bind(student3, "IT", "6.9");
newInfo();