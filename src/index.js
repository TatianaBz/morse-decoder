const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let st = [];
      let strExpr = expr.split('');
      while (strExpr.length > 0) {
        let letter = strExpr.splice(-10);
        let world = [];
        if (!letter.includes('*')) {
          while (letter.length > 0 && letter.includes('1')) {
            let simb = letter.splice(-2);
            if (simb.join('') == '10') world.unshift('.');
            else world.unshift('-');
          }
          st.unshift(MORSE_TABLE[world.join('')]);
        }
      else st.unshift(' ');
      }
      return st.join('');
}

module.exports = {
    decode
};