(()=>{
let myDinamicVar: any;
myDinamicVar= 'Hola';
//de estas 2 maneras digo como quiero que sea trtado
const rta = (myDinamicVar as string). toLowerCase();
console.log(rta);

myDinamicVar =1212;
const rta2 = (<number>myDinamicVar).toFixed();
console.log(rta2);


})();
