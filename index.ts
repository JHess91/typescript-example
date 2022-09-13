let age: number = 31
let firstName: string = 'Justin'
let isTeaching: boolean = false

const classes: string [] = ['javascript' , 'typescript']
let numberOfStudents: number[] = [23,14,22]
numberOfStudents.push(age)
// console.log(numberOfStudents)


enum TaxForms {
  incomeTax=1099,
  childCare=244,
  bitcoinLoss=420,
  richDude=378,
}

const WhichTaxForm = TaxForms.incomeTax
// console.log("use tax form: ",WhichTaxForm)

let postalCode:number | string = "L3p-6R8"
postalCode = 33351
// console.log(postalCode)

function findIndex (index: number, arr:number[]): number {
  return arr[index]
}

let finalNumber:number = findIndex(1, numberOfStudents)
console.log(finalNumber + 1)


// console.log('Hello Typescript', age)