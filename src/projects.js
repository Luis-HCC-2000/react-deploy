
  function palindrome(str) {
  str=str.replace(/[^0-9a-z]/gi,"").toLowerCase()
  let invStr=""
  for(let i=str.length-1 ; i>=0 ; i--){
    invStr+=str[i]
  }
  return invStr===str;
  }

 function convertToRoman(num) {
  let convArr=[["I","V"],["X","L"],["C","D"],["M"]];
  num=num.toString().split("").map(str=>Number(str));
  let convIndex=num.length-1;
  let ansArr="";
  for (let elem of num){
    if (elem<5){
      if (elem===4){
        ansArr+=convArr[convIndex][0]+convArr[convIndex][1];
      }
      else{
        for (let i=1 ; i<=elem ; i++){
          ansArr+=convArr[convIndex][0];
        }
      }
    }
    else{
       if (elem===9){
          ansArr+=convArr[convIndex][0]+ convArr[convIndex+1][0];
        }
        else{
      ansArr+=convArr[convIndex][1];
      elem-=5;
      for (let i=1; i<=elem ; i++){
        ansArr+=convArr[convIndex][0];
      }
    }
    }
    convIndex-=1;
  }
  return (ansArr);
}


 function rot(str) {
  let ans=""
  let convArr=Array.from(Array(26).keys()).map(elem=> elem+65).map(elem=>String.fromCharCode(elem))
  for (let elem of str){
    let idx=convArr.indexOf(elem);  
    if (idx===-1){
      ans+=elem;
    }
    else{
      if (idx>=13){
        ans+=convArr[idx-13]
      }
      else{
        ans+=convArr[26-(13-idx)]
      }
    }
  }
  return (ans);
}

 function telephoneCheck(str) {
	if (/^[0-9|\-|\s|(|)]+$/.test(str)){
    if(str.length>=10){
      if(str.match(/\d/g).length===11 && str[0]!==1 ){
        return (false);
      }
      if(str.match(/\d/g).length>11){
        return (false);
      }
      if(/-/.test(str) && str.match(/-/g).length>2){
        return (false);
      }
      if(/[()]/.test(str)){
        if(str.match(/[()]/g).length!==2){
          return (false);
        }
        if (str[str.indexOf("(")+4]!==")"){
          return (false);
        }
      }
      return (true);
    }
  }
  return (false);
}



 function checkCashRegister(price, cash, cid) {
     function isEnoughMoney(change,cid){
         let moneyAvailable=0;
         for (let idx in cid){
             moneyAvailable+=cid[idx][1];
            }
            if (moneyAvailable<change){
                return false;
            }
            return true;
        }
    let change=(cash-price)*100;
  if (change ===0){
    return {status: "CLOSED", change:cid}
  }
    for (let idx in cid){
    cid[idx][1]*=100;
  }
  
  if(!isEnoughMoney(change,cid)){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  let moneyAvailable=0;
  for (let idx in cid){
    moneyAvailable+=cid[idx][1];
  }
  if (moneyAvailable===change){
    return {status: "CLOSED", change:cid.map(elem=>[elem[0], elem[1]/100])}
  }
  let values=[ 
    ["PENNY", 1],
    ["NICKEL",5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
  ]
  let ans=[ 
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]

  let idx=8
  while (idx>=0){
    if (values[idx][1]<=change && cid[idx][1]>0){
        ans[idx][1]+=values[idx][1]
        cid[idx][1]-=values[idx][1]
        change-=values[idx][1]
    }
    else{
      idx-=1
      }
  }
  if (change!==0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  else{   
    ans=ans.filter(elem=>elem[1]!==0);
    ans=ans.map(elem=>[elem[0], elem[1]/100])
    return  {status: "OPEN", change: ans.reverse()}
  }
}


export {palindrome, convertToRoman, rot, telephoneCheck, checkCashRegister}