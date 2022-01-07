const floor = (num) => Math.floor(num);
const qs = (sel) => document.querySelector(sel);
const form = qs("#form");
const output = qs("#output");

const easter = (year) => {
  const a = year % 19;
  const b = floor(year / 100);
  const c = year % 100;
  const d = floor(b / 4);
  const e = b % 4;
  const f = floor((b + 8) / 25);
  const g = floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = floor((a + 11 * h + 22 * l) / 451);
  const p = (h + l - 7 * m + 114) % 31;
  const day = p + 1;
  const month = floor((h + l - 7 * m + 114) / 31);
//   console.log(
//     `Data Wielkanocy w roku ${year} będzie dokładnie ${day}.0${month}.${year}`
//   );
  output.textContent = `Data Wielkanocy w roku ${year} będzie dokładnie ${day}.0${month}.${year}`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const year = e.target.year.value;
  easter(year);
});
