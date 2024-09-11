class person{
    constructor(name,age){
       this.name=name,
       this.age=age
    }

    intro(){
        console.log(`my name is ${this.name} and ${this.age} year old`);
        
    }
}
// let person1=new person("shahid",20);
console.log(new person("shahid",20));