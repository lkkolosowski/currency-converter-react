const names = [
  {
    code: "PLN",
    name: "Złoty polski",
    flag: "pl",
  },
  {
    code: "USD",
    name: "Dolar amerykański",
    flag: "um",
  },
  {
    code: "EUR",
    name: "Euro",
    flag: "eu",
  },
  {
    code: "JPY",
    name: "Yen japoński",
    flag: "jp",
  },
  {
    code: "CZK",
    name: "Korona czeska",
    flag: "cz",
  },
  {
    code: "HRK",
    name: "Kuna chorwacka",
    flag: "hr",
  },
  {
    code: "CHF",
    name: "Frank szwajcarski",
    flag: "ch",
  },
  {
    code: "GBP",
    name: "Funt brytyjski",
    flag: "gb",
  },
  {
    code: "INR",
    name: "Rupia indyjska",
    flag: "in",
  },
  {
    code: "SEK",
    name: "Korona szwecka",
    flag: "se",
  },
  {
    code: "KRW",
    name: "Won południowokoreański",
    flag: "kr",
  },
  {
    code: "CNY",
    name: "Yuan chiński",
    flag: "cn",
  },
];

export const namesData = names.sort((a, b) => {
  const nameA = a.code;
  const nameB = b.code;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});