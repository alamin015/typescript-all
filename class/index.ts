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



class Teacher extends Student {
    teacherId: number;
    constructor(name:string,id:number,teacherId:number){
        super(name,id);
        this.teacherId = teacherId;
    }
}

const std1 = new Teacher("mahdi",23,50);

std1.display();
