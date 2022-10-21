function isOldEnoughToDrink(age){
    if(age<21){
        return false;
    }else {
        return true;
    }
}
let output= isOldEnoughToDrink();
console.log(output);