## my first readme file 

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("John");





class Student {
    name:string;
    id: number;
    constructor(name:string,id:number) {
        this.name = name;
        this.id = id;
    }
    display():void {
        console.log(this.name,this.id)
    }
}
