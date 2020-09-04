const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const decodedMessage = [];
  let encodedLetter = '';
  let decodedLetter = '';
  for (let i = 0; i < expr.length; i += 10) {
    encodedLetter = expr.substring(i, i + 10);
    if (encodedLetter === '**********') {
      decodedMessage.push(' ');
    } else {
      decodedLetter =
        MORSE_TABLE[
          encodedLetter
            .match(/1(\d)+/)[0]
            .replace(/10/g, '.')
            .replace(/11/g, '-')
        ];
      decodedMessage.push(decodedLetter);
    }
  }
  return decodedMessage.join('');
}

module.exports = {
  decode,
};
