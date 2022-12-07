const employee={
    empid:"100",
    empname:"Rhon",
    dept:{
        deptid:"d100",
        deptname:"sales",
        managerid:"s100"
    },
    project:{
        projid:"p100",
        projtitle:"new project",
        startdate:new Date("2020-01-03"),
        duration:"2 years"
    },
    salary:22000,
    doj:new Date("2015-02-03"),
    getNumberOfServiceYears:function(){
        return 2022-this.doj.getFullYear()
    } 

}
for(let i in employee){
    if(i==='dept' || i==='project' ){
        for(let j in employee[i]){
            console.log(`${j}: ${employee[i][j]}`);
        }
    }

    else{
        console.log(`${i} : ${employee[i]}`);
    }
}

const prime = (n) => {
    let arr = [];
    for (let i = 2; arr.length < n; i++) {
      var flag = 0;
      for (let k = 2; k <= i; k++) {
        if (i % k == 0 && i > k) {
          flag = 1; //if i is divisible by any small number than it is not prime number
        } else if (i % k == 0 && flag != 1) {
          arr.push(i);
        }
      }
    }
    return arr;
  };
  console.log(prime(5));