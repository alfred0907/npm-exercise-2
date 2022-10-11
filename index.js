const { argv } = require('process');
let str = argv.slice(2).join(' ');
let vowels = 0;

for (let i = 0; i < str.length; i++) {
  if ('aeiou'.includes(str[i].toLowerCase())) {
    vowels++;
  }
}
console.log(
  `There are ${argv.length - 2} argument${
    argv.length - 2 && argv.length - 2 !== 1 ? 's' : ''
  }.`
);
console.log(
  `There are ${vowels} vowel${
    vowels && vowels !== 1 ? 's' : ''
  } in the argument${argv.length - 2 && argv.length - 2 !== 1 ? 's' : ''}.`
);
