function checkCashRegister(price, cash, cid) {
  const unitAmount = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let change = cash - price;
  let totalCid = 0;
  let newArray = [];

  for(let elem of cid) {
    totalCid += elem[1];
  }
  totalCid = totalCid.toFixed(2);
  
  if(change > totalCid) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if(change == totalCid) {
    return {status: "CLOSED", change: cid};
  } else {
    let cidReverse = cid.reverse();
    for(let elem of cidReverse) {
      let temp = [elem[0], 0];
      while(change >= unitAmount[temp[0]] && elem[1] > 0) {
        temp[1] += unitAmount[temp[0]];
        elem[1] -= unitAmount[temp[0]];
        change -= unitAmount[temp[0]];
        change = change.toFixed(2);
      }

      if(temp[1] > 0) {
        newArray.push(temp);
      }
    }
  }
  
  if(change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: newArray};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));