// Mengecheck kevalidan nomor telepon USA
function telephoneCheck(str) {
  if(str.split(/\s|-/).length > 4) {
    return false;
  }

  let newStr = str.split('');
  console.log("awal", newStr);

  //Mengecheck country code, jika ada saring, jika tidak ada return false
  if(newStr[0] == 1){
    if(newStr[1] == ' ') {
      newStr = newStr.slice(2);
    } else {
      newStr = newStr.slice(1);
    }
  }

  //Menghapus tanda strip dan spasi
  newStr = newStr.filter(item => item != '-' && item != ' ')
  console.log("menghilangkan tanda strip dan spasi", newStr);

  //Mengecheck tanda kurung
  if(newStr.some(item => item == '(' || item == ')')){
    if(newStr[0] == '(' && newStr[4] == ')') {
      newStr.splice(0, 1);
      newStr.splice(3, 1);
    } else {
      return false;
    }
  }

  //Mengecheck panjang nomor
  if(newStr.length == 10) {
    return true;
  } 
  return false;
}

console.log(telephoneCheck("1(456) 789 4444"));