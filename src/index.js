import './css/index.scss'


export class Person {
    constructor(name) {
        this.name = name;
    }

}
let _person = new Person("Prasanth");
console.log(_person)
let m = require('./script1')
// alert(`Hey Let see what is printign here: ${m.msg}`)