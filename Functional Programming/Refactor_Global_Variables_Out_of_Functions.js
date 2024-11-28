// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr,bookName) {
  let newarr=[...arr];
  newarr.push(bookName);
  return newarr;
}

function remove(arr,bookName) {
  let newarr=[...arr];
  if (newarr.indexOf(bookName) >= 0) {

    newarr.splice(newarr.indexOf(bookName), 1);
    return newarr;

    }
}