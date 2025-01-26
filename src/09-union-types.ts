(()=>{
let userId: string | number;
userId=1122;
userId = 'asa';
function greeting(myText: string | number){
  if(typeof myText === 'string') {
    console.log(`string ${myText.toLowerCase()}`);
  } else {
    console.log(`number ${myText.toFixed(1)}`);
  }
}
greeting('Sofia')
greeting(12234.3786)
})();
