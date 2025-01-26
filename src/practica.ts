//crea una funcion que reciba dos num(inicio y fin) y devuelva un array con todos los numerosprimos en ese rango
//crea una func que reciba un array de numeros, elimine los duplicados, y devuelva el arrayordenado de forma ascendente usa filter y sort
//una funcion que reciba una palabra y determine si es un palindromo que se lee igual de ambos sentidos

const recorrer = ()
const numeros = (inicio: number, fin: number)=>{
  return{ inicio,
  fin}
}

const duple = (nums: number[]): => {

}

const palindromo = (palabra: string): boolean => {
  let contador = 0;
  for (let letra of palabra) {
    contador++;
  }

  for (let i = 0; i < contador / 2; i++) {
    if (palabra[i] !== palabra[contador - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(palindromo("reconocer"));
console.log(palindromo("palabra"));

