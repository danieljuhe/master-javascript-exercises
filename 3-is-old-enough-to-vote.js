function isOldEnoughToVote(age){
    if(age<18){
        return false;
    }else {
        return true;
    }
  }
  let output= isOldEnoughToVote();
  console.log(output);