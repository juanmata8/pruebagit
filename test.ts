//las constantes en ts se pueden declarar como const o variable
//los tipos simples de variables se almcaenan por copia, nunca referencias
//todos los tipos complejos de variables son punteros(referencias), no hay que explicitarlos
//las variables se declaran como:
/* 
let a = 5 variable normal
const b = 5 significa que no puedo reasignar la variable, es decir, cambiar su ref pero si modificarla
siempre se utiliza const a menos que haya una buena razon para ello
*/
//las funciones so todas lambda, todas con variables. Usaremos la funcion flecha
const suma = (a:number, b:number):number => {
    return a + b;
}
const resta = (a:number, b:number):number => {
    return a + b;
}
const operacion = (a:number, b:number, f:(a:number, b:number)=>number):number => {
    return f(a,b);
}

const a = operacion(4,3,suma)
const print_value = (value:string):void => console.log(value);

const print_num = (value:number) => {
    console.log(value);
}
const raiz_cuadrada = (value:number) => {
    return Math.sqrt(value);
}
const is_even = (value:number) =>{
    return value % 2 == 0;
}
const isBigEnough = (element: number) => { 
    return (element >= 70); 
           
 } 
 const arr1 = [31, 2, 33, 21, 23, 22, 12, 12, 14, 43, 12];
const arr:string[] = ["1","2","3","4"]; 
//forEach applies a function to each value:void
arr.forEach(print_value);
//map creates a new array with the output of the function:array
const new_arr = arr1.map(raiz_cuadrada)
new_arr.forEach(print_num);
//filter those that dont pass the test into a new array:array
arr1.filter(is_even)

new_arr.forEach(print_num);
//find finds the first value that pass a condition
const found = arr1.find(function(value){
    return value % 2 == 1;
});
//some tells us if at least one value passes a condition: boolean
console.log("the first odd number is ", found)
console.log("Returned value is: " + arr1.some(isBigEnough));
//reduce sirve para hacer comparaciones con un valor de inicio
//reduce(funcion(acumulador, elemento, indice), valor de inicio): 2 parametros, devuelve cualquier dato
//siempre recibe una funcion con 3 parametros per pueden no usarse todos
//the initial value goes after 
console.log("total is : " + arr1.reduce((a, b) => { 
    return a + b; }
    , 10));
const sin_duplicados = arr1.reduce((a:number[], elem:number) => { 
    if(a.some(n => n === elem)) return a;
    return [...a, elem]; //acumulador
}, []);

const media = arr1.reduce((acc:number, elem:number) =>
    acc + elem, 0)/arr1.length;


const mitad_o_doble = (a:number):number => {
    if(a%2 == 0)return a/2 
    else return a*2; 
}
const get_odds = (a:number):boolean => {
    if(a%2 == 1)return true;
    return false;
}
//every nos dice si todos los valores cumplen con una condicion
const every_value = arr1.every((elem, index) => elem+index > 5)
const some_values = arr1.some((a:number):boolean => a<5)
const filtrado = arr1.filter(get_odds)
const arr_mitad_doble = arr1.map(mitad_o_doble);
console.log("la media es " ,media)

const arr2 = [[2,3], [4,5], [6,7]];
const reducir_arr = arr2.reduce((acc:number[], elem:number[]) => 
[...acc, ...elem], []);  //...acc significa: lo que haya en acc, se expando
//objetos, se define el tipo como 

type Person = {
    name: string,
    age: number
    couple?: string, //cuando un atributo tiene ? significa que puede tenerlo o no
    friends?: Person[]
}
//los objetos siempre se inicilizan con clave, valor
const personas = [{name:"Alberto", age: 10}, {name: "juan", age:20}, {name: "Alberto", age: 40}]

const num_de_alb = personas.reduce((acc:number, elem: Person) =>
{if(elem.name === "Alberto") return acc+1
else return acc //hay que devolver acc y no 0 pq acc se actualiza en cada iteracion por el valor de retorno
}, 0);

//mode of elements
const mode: number = arr1.reduce((acc: number, element) => {
    const count = arr1.filter((e) => e === element).length;
    let max = 0
    if (count > acc) {
      acc = count; //acc es la maxima cantidad que se ha contado de un elemento
      max = element //max es la moda 
    }
    return max;
    
  }, 0); //initial value inicializa el acc

const old_Alberto: Person |undefined = personas.reduce((acc:Person|undefined, elem:Person) =>
{if(elem.name === "Alberto"){
    if(acc){
        if(elem.age > acc.age) return elem;
        return acc;
    }
    return elem;
}}, undefined);//undefined se usa porque puede que no encuentre nigun "Alberto"
console.log("hay", num_de_alb, "albertos, y el mas viejo tiene", old_Alberto?.age)// el ?. contemplpa la posibilidad de que sea undefined
console.log("la moda es", mode)