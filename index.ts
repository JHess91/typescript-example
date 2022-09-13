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

function log(msg:any): void { // void when nothing is being returned 
  console.log(msg)
}

let finalNumber:number = findIndex(1, numberOfStudents)
// log(finalNumber + 1)
// log("yep. its not going to return something")

const complexObject: any = {name: "Justin", height: "yes please"}

interface Human {
  name: string
  height: string
}

interface Teacher extends Human { 
  age: number
  weight?: string
}

const complexObject2: Teacher = {name: "Justin", height: "yes please", age: 49, weight: "200"}

function displayTeacher(teacher: Teacher): string {
  return `This teacher is ${teacher.age} old`
}

log(complexObject2)



// console.log('Hello Typescript', age)