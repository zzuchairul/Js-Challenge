// Function untuk mengechek apakah sebuah sebuah string palindrome
// Tanpa memperhatikan non-alfanumeric
function palindrome(str) {
  let newStr = str // Menyimpan nilai string baru yang sudah diolah
  .toLowerCase() // Mengubah semua character menjadi huruf kecil, agar memudahkan pengechekan
  .match(/[a-z]|\d/g) /* /[a-z] => mengambil semua huruf kecil, \d => mengambil semua angka, //'g' => lakukan hingga akhir string 
  dan mengembalikannya dalam bentuk element-element array */
  

  // Melakukan looping untuk mengecheck 
  for(let i = 0, len = newStr.length; i < len / 2; i++) {
    if(newStr[i] !== newStr[i]) {
      return false;
    }
  }
  
  return true;
}