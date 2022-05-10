const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
$(document).ready(readyNow);
console.log(employees);
function readyNow(){
  $('#clickMe').click(function(){
    $('#bonuses').append(`<li>` + newObject(employees) + `</li>`)
  })
}


function newObject(array) {
  let person = {}
  let bonusArray =[]
  for (let info of array) {
    person = {
      name: '',
      bonusPercentage: 0,
      totalCompensation: 0,
      totalBonus: 0
    }
    if (info.reviewRating === 5) {
      person.bonusPercentage = 0.1;
    }
    else if (info.reviewRating === 4) {
      person.bonusPercentage = 0.06;
    }
    else if (info.reviewRating === 3) {
      person.bonusPercentage = 0.04;
    }
    else {
      person.bonusPercentage = 0;
    }
    if (info.employeeNumber.length === 4) {
     person.bonusPercentage += 0.05;
    }
    if (info.annualSalary > 65000) {
      person.bonusPercentage -= 0.01;
    }
    if (person.bonusPercentage > 0.13){
      person.bonusPercentage = 0.13;
    }
    else if (person.bonusPercentage < 0){
      person.bonusPercentage = 0;
    }
     person.name = info.name;
     person.totalBonus =Number(info.annualSalary * person.bonusPercentage);
     person.totalCompensation = Number(info.annualSalary) + person.totalBonus;

   bonusArray.push(person);

  }

  return bonusArray;
   

}
console.log(newObject(employees));

/*function yearsEmployed() {
  let employeeNum = 0;
  for (let tacos of employees) {
    let employeeNum = tacos.employeeNumber;
    
  }
  return employeeNum;
}
console.log(yearsEmployed(employees));
/*function bonuses(array){
  let salRev;
    for(let employee of array) {
      salRev = {
        salary: employee.annualSalary,
        review: employee.reviewRating
      }
      console.log(salRev)
    }
    return salRev
  }*/


