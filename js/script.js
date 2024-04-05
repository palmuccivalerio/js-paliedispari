
const pariDisp = prompt("Scrivi se vuoi pari o dispari");

const numUser = parseInt(prompt("inserisci il numero da uno a 5"));
console.log (numUser)

const sommaNum = numRnDm() + numUser
console.log(sommaNum)

if (sommaNum % 2 === 0){

 console.log("hai vinto il numero e pari")

}

else{
   console.log("hai perso il numero e dispari") 
}