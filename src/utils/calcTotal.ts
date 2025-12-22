export function calcTipPerPerson(tip: number, bill: number, people: number) {
  const totalTipAmount = (tip / 100) * bill;
  const dividedTipAmount = totalTipAmount / people;
  console.log(dividedTipAmount);

  return dividedTipAmount;
}

export function calcTotalPerPerson(
  bill: number,
  people: number,
  dividedTipAmount: number
) {
  const dividedBillAmount = bill / people;
  const totalPerHead = dividedBillAmount + dividedTipAmount;
  console.log(totalPerHead);

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
