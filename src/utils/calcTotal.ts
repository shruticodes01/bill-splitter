export function calcTipPerPerson(tip: number, bill: number, people: number) {
  const totalTipAmount = (tip / 100) * bill;
  const dividedTipAmount = totalTipAmount / people;

  return dividedTipAmount;
}

export function calcTotalPerPerson(
  bill: number,
  people: number,
  dividedTipAmount: number
) {
  const dividedBillAmount = bill / people;
  const totalPerHead = dividedBillAmount + dividedTipAmount;

  return totalPerHead;
}

export function calculateResults(tip: number, bill: number, people: number) {
  const tipPerPerson = calcTipPerPerson(tip, bill, people);
  const totalPerPerson = calcTotalPerPerson(bill, people, tipPerPerson);

  return {
    tipPerPerson: tipPerPerson,
    amountPerPerson: totalPerPerson,
  };
}
