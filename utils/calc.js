// Pure calculation logic, kept separate so it can be tested in CI.
function parseAmount(text) {
  const value = parseFloat(String(text).replace(',', '.'));
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function splitBill(bill, tipPercent, people) {
  const safePeople = Math.max(1, Math.floor(people) || 1);
  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  return {
    tip: round(tip),
    total: round(total),
    perPerson: round(total / safePeople),
  };
}

function round(n) {
  return Math.round(n * 100) / 100;
}

module.exports = { parseAmount, splitBill };
