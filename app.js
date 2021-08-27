const map = new Map([['name', 'Rafe Uddaraj']])
map.set('age', 18)
map.set('address', {
    city: 'Dhaka',
    country:'Bangladesh'
})

const obj = {}

map.forEach((value,key) => {
    obj[key] = value // Object - এ convert - করেছি।
})

console.log(obj) // Return map Object

const objMap = new Map([[Object.assign(obj)]])

console.log(objMap) // Output - দেখলে বুঝবেন। আমি আরো অন্য ভাবেও ট্রায় করেছি। কিন্তু সঠিক উয়ে পাছিনা। 