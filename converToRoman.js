// Program untuk mengkonversi angka biasa ke angka roman
function convertToRoman(num) {
  let roman = [];
  
  if(num >= 1000) {
    thousand(num);
  } else if(num >= 100) {
    hundred(num);
  } else if(num >= 10) {
    dozen(num);
  } else {
    unit(num);
  }

  function thousand (x) {
    let numb = parseInt(x / 1000);
    switch(numb) {
      case 0:
        break;
      case 1:
        roman.push('M');
        break;
      case 2:
        roman.push('MM');
        break;
      case 3:
        roman.push('MMM');
        break;
    }
  hundred(x - (numb * 1000));
  }

  function hundred(x) {
    let numb = parseInt(x / 100);
    switch(numb) {
      case 0:
        break;
      case 1:
        roman.push('C');
        break;
      case 2:
        roman.push('CC');
        break;
      case 3:
        roman.push('CCC');
        break;
      case 4:
        roman.push('CD');
        break;
      case 5:
        roman.push('D');
        break;
      case 6:
        roman.push('DC');
        break;
      case 7:
        roman.push('DCC');
        break;
      case 8:
        roman.push('DCCC');
        break;
      case 9:
        roman.push('CM');
        break;
    }
    dozen(x - (numb * 100));
  }

  function dozen(x) {
    let numb = parseInt(x / 10);
    switch(numb) {
      case 0:
        break;
      case 1:
        roman.push('X');
        break
      case 2:
        roman.push('XX');
        break;
      case 3:
        roman.push('XXX');
        break;
      case 4:
        roman.push('XL');
        break;
      case 5:
        roman.push('L');
        break;
      case 6:
        roman.push('LX');
        break;
      case 7:
        roman.push('LXX');
        break;
      case 8:
        roman.push('LXXX');
        break;
      case 9:
        roman.push('XC');
        break;
    }
    unit(x - (numb * 10));
  }

  function unit(x) {
    switch(x) {
      case 1:
        roman.push('I');
        break;
      case 2:
        roman.push('II');
        break;
      case 3:
        roman.push('III');
        break;
      case 4:
        roman.push('IV');
        break;
      case 5:
        roman.push('V');
        break;
      case 6:
        roman.push('VI');
        break;
      case 7:
        roman.push('VII');
        break;
      case 8:
        roman.push('VIII');
        break;
      case 9:
        roman.push('IX');
        break;
    }
  }
  return roman.join('');
}

console.log(convertToRoman(2374));