(()=>{
let prices = [1,2,3,4,4,555];
prices.push(1212);

//si voy a recibir algo le tengo que decir puntualmente cuales son no los puede inferir

let mixed:(number| string | boolean | Object)[] = ['hola', true];
mixed.push(12);
mixed.push()
})();
