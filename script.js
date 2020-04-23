const noom = [
  '', 'one', 'two', 'three', 
  'four', 'five', 'six', 
  'seven', 'eight', 'nine'
];
const tenHundreds = ["ten", "hundred"];
const da = name =>
  [name].concat(
    tenHundreds.map(
      pre => (pre + " " + name).trim()
    )
  );
const places = [].concat(
  da(""), 
  da("thousand"), 
  da("million"), 
  da("billion"),
  da("trillion"),
  da("quadrillion"),
  da("quintillion"),
  da("sextillion"),
  da("septillion"),
  da("octillion"),
  da("nonillion"),
  da("decillion"),
  da("undecillion"),
  da("duodecillion"),
  da("tredecillion"),
  da("quattuordecillion"),
  da("quindecillion"),
  da("sexdecillion"),
  da("septen-decillion"),
  da("octodecillion"),
  da("novemdecillion"),
  da("vigintillion")
);
console.log(places);

const noomber = document.getElementById("noomber");
const noomberFormat = document.getElementById("noomber-format");
const comma = document.getElementById('comma');

noomber.addEventListener("input", onInputEvent);
noomber.addEventListener("change", onChangeEvent);

function onInputEvent(e) {
  const input = e.data;
  const num = e.target.value;
  console.log("input", { input, num }, e);
  updateFormat(num);
}

function onChangeEvent(e) {
  const num = e.target.value;
  console.log("change", { num }, e);
  updateFormat(num);
}

function updateFormat(num) {
  if (num == null) {
    comma.innerText = '';
    noomberFormat.innerText = '';
    return;
  }
  if (/^([0])+$/g.test(num)) {
    comma.innerText = '0';
    noomberFormat.innerText = 'zero';
    return;
  }
  
  num = num.split('.')[0];
  
  const result = num
    .split('')
    .reverse()
    .map((n, index) => {
      const place = places[index];
      if (noom[n] === '') {return ''};
      return (noom[n] + ' ' + place).trim();
    })
    .reverse()
    .join(' ')
    .trim();

  console.log(result)

  noomberFormat.innerText = result;
  
  let nnnn = '';
  num.split('').reverse().map((n, i) => {
    nnnn = n + nnnn;
    if (i > 0 && i + 1 !== num.length && (i + 1) % 3 === 0) {nnnn = ',' + nnnn}
  });
  comma.innerText = nnnn;
}
