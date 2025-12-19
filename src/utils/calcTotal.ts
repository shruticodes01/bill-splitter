export function calcTipPerPerson(
  tip: number,
  billAmount: number,
  totalPersons: number
) {
  console.log(tip / 100);
  const totalTipAmount = (tip / 100) * billAmount;
  console.log(totalTipAmount);
  const dividedTipAmount = totalTipAmount / totalPersons;
  console.log(dividedTipAmount);

  // return totalTipAmount;
  return dividedTipAmount;
}

export function calcTotalPerPerson(
  billAmount: number,
  totalPersons: number,
  dividedTipAmount: number
) {
  const dividedBillAmount = billAmount / totalPersons;
  console.log(dividedBillAmount);

  const totalPerHead = dividedBillAmount + dividedTipAmount;
  console.log(totalPerHead);

  // return dividedBillAmount;
  return totalPerHead;
}

export function calculateResults(tip: number, bill: number, people: number) {
  const tipPerPerson = calcTipPerPerson(tip, bill, people);

  const totalPerPerson = calcTotalPerPerson(bill, people, tipPerPerson);
  console.log(tipPerPerson);
  console.log(totalPerPerson);

  return {
    tipPerPerson: tipPerPerson,
    amountPerPerson: totalPerPerson,
  };
}

// function calculateResults(tip: number) {
//   // const tipPerPerson = calcTipPerPerson(
//   //   tip,
//   //   userInput.billAmount,
//   //   userInput.totalPersons
//   // );

//   // const totalPerPerson = calcTotalPerPerson(
//   //   userInput.billAmount,
//   //   userInput.totalPersons,
//   //   tipPerPerson
//   // );

//   // return {
//   //   tipPerPerson: tipPerPerson,
//   //   amountPerPerson: totalPerPerson,
//   // };
// }
