const greeting = 'Hello, world!'
let count = 0

function add(a, b) {
     return a + b
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubled = numbers.map(function (n) {
     return n * 2
})

const total = numbers.reduce((acc, n) => {
     return acc + n
}, 0)

const person = {
     name: 'Alice',
     age: 30,
     hobbies: ['reading', 'coding', 'hiking'],
     address: { city: 'Wonderland', zip: '12345' },
}

function greet(name) {
     if (name) {
          console.log('Hi ' + name)
     } else {
          console.log('Hi stranger')
     }
}

class Counter {
     constructor(start) {
          this.value = start
     }
     increment() {
          this.value++
          return this.value
     }
     reset() {
          this.value = 0
     }
}

async function fetchData(url) {
     const res = await fetch(url)
     const data = await res.json()
     return data
}

const items = [
     { id: 1, label: 'one' },
     { id: 2, label: 'two' },
     { id: 3, label: 'three' },
]

items.forEach((item) => {
     console.log(item.id, item.label)
})

module.exports = {
     add,
     greet,
     Counter,
     fetchData,
     doubled,
     total,
     person,
     items,
     greeting,
     count,
}
