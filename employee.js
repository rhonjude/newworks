const employee={
    empid:"100",
    empname:"Rhon",
    dept:{
        deptid:"d100",
        deptname:"sales",
        managerid:"s100"
    },
    salary:22000,
    doj:new Date("2015-02-03"),
    getNumberOfServiceYears:function(){
        return 2022-this.doj.getFullYear()
    } 

}

let emp = employee;
console.log(emp);
console.log(emp.salary);
console.log(emp.empid);
console.log(emp.doj);
console.log(emp.empname);
console.log(emp.dept);
console.log(emp.getNumberOfServiceYears());

let emparr=[
    {empname:"Rahul",empid:"100"},
    {empname:"Alan",empid:"101"},
    {empname:"john",empid:"102"}
];
for(let i=0;i<emparr.length;i++)
{
    console.log(`name :${emparr[i].empname} empid ${emparr[i].empid}`);
}
