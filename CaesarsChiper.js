function rot13(str) {
  let newStr = [];

  for(let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let charCode = char.charCodeAt(0);

    if(charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
      let newCharCode = charCode + 13 > 'Z'.charCodeAt('0') ? charCode - 13: charCode + 13;
      newStr.push(String.fromCharCode(newCharCode));
    } else {
      newStr.push(char);
    }

  }

  return newStr.join('');
}
console.log(rot13("Z"));