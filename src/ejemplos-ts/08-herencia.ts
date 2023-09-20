class Peronsona3{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }

imprimir(){
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
 }
}
class Empleado extends Peronsona3{
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number){
            super(nombre,edad);
            this.sueldo=sueldo;
    }
    imprimir(){
        super.imprimir()
        console.log(`suldo: ${this.sueldo}`);
    }
    pagarImpuestos(){
        if(this.sueldo>500)
        console.log(`${this.sueldo} debe pagar impuestos`);
        else
        console.log(`${this.sueldo} no debe pagar impuestos`);
    }
}
const persona4=new Peronsona3('Juan',24)
persona4.imprimir();

const empleado1=new Empleado('Ana', 21,7000);
empleado1.imprimir();
empleado1.pagarImpuestos();

