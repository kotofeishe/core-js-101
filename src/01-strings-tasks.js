/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return (value1 + value2);
}
console.log (concatenateStrings('', 'bb'));

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength( value ) {
  return (value.length);
}

console.log (getStringLength('aaaaa'));

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return (`Hello, ${firstName} ${lastName}!`);
}
console.log (getStringFromTemplate('John','Doe'));

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
 return (value.slice(7, value.length - 1));
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return (value[0]);
}
console.log (getFirstChar('cat'));

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  let rezult = value.trim();
  let code = rezult.charCodeAt(0);
  while (code < 65 || (code > 90 && code < 97) || (code > 122)) {
    rezult = rezult.slice(1);
    code = rezult.charCodeAt(0);
  }
  if (!/[A-Z]/.test(rezult)) {
    return (rezult); // Если заглавных букв нет, вернуть строку без изменений
  }
  return (rezult.replace(/^[a-z]+/, ''));
}

console.log (removeLeadingAndTrailingWhitespaces('   Abracadabra'))

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  let rezult = '';
  for (let i = count; i!==0; i--) {
    rezult = rezult + value;
  }
  return (rezult);
}

console.log (repeatString ('cat', 5))
/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return (str.replace(value, ""))
}
console.log (removeFirstOccurrences('ABABAB','BA'));
/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return (str.slice(1,str.length-1));
}
console.log ( unbracketTag('<div>'))

/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return (str.toUpperCase())
}
console.log (convertToUpperCase('Thunderstruck'))
/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return (str.split(';'))
}
console.log (extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'))
/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let rezult = "";
  for (let i = 1; i <= width; i++) {
    if (i === 1) {
      rezult = rezult + "┌";
    }
    else if (i === width) {
      rezult = `${rezult}┐`;
    }
    else {
      rezult = rezult + "─"
    }
  }
  for (let j = height - 2; j > 0; j--) {
    rezult = `${rezult}\n│`;
    for (let k = 1; k < width; k++ ){
      if (k === width-1) {
        rezult = `${rezult}│`
      }
      else {
        rezult = rezult + ' ';
      }
    }
  }
  for (let t = 1; t <= width; t++) {
    if (t === 1) {
      rezult = `${rezult}\n└`;
    }
    else if (t === width) {
      rezult = `${rezult}┘\n`;
    }
    else {
      rezult = rezult + "─"
    }
  }
  return (rezult);
}
console.log (getRectangleString(2, 2));

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetDown = 'abcdefghijklmnopqrstuvwxyz';
  let rezultString = '';
  for (let i = 0; i < str.length; i++) {
    let index = i;
    if (alphabetUp.indexOf(str[i]) >= 0) {
      index = alphabetUp.indexOf(str[i]) + 13;
      if (index > alphabetUp.length - 1) {
        index = index - alphabetUp.length;
      }
      rezultString = rezultString + alphabetUp[index];
    }
    else if (alphabetDown.indexOf(str[i]) >= 0) {
      index = alphabetDown.indexOf(str[i]) + 13;
      if (index > alphabetDown.length - 1) {
        index = index - alphabetDown.length;
      }
      rezultString = rezultString + alphabetDown[index];
    }
    else {
      rezultString = rezultString + str[i];
    }
  }
  return (rezultString);
}
console.log (encodeToRot13('ABCD abc'));
/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return (typeof(value) === 'string' || value instanceof String);
}
console.log (typeof(null));

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const arrayCards = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'];
 return (arrayCards.indexOf(value));
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
