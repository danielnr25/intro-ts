
class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string,edad:number){
        this.nombre = nombre
        this.edad = edad
    }

    saludar():string{
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
}

const personas:Persona[] = [
    new Persona('Daniel',50),
    new Persona('Giancarlos',20),
    new Persona('Maria',30,)
]

for(let i=0;i<personas.length;i++){
    console.log(personas[i].saludar())
}