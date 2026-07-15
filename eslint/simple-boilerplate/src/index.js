var unusedVariable = 42

let greeting = "world"

function greet(person) {
  console.log("Hello " + person)
  return
  console.log("unreachable code")
}

greet(greeting)

if (greeting == "world") {
  console.log('loose equality used')
}

const numbers = [1, 2, 3]
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

function addNumbers(a, b) {
  result = a + b
  return result
}

addNumbers(2, 3)

const obj = {
  foo: 1,
  foo: 2,
}

console.log(obj)
