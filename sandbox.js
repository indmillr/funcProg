// Refactor Global Variables OUT of functions

// global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(bookList, bookName) {
  let newList = [...bookList];
  newList.push(bookName);
  return newList;
}

function remove(bookList, bookName) {
  let newList = [...bookList];
  if (newList.indexOf(bookName) >= 0) {
    newList.splice(newList.indexOf(bookName), 1);
    return newList;
  }
}

// testrun
const newBookList = add(bookList, "A Brief History of Time");
const newerBookList = remove(
  bookList,
  "On The Electrodynamics of Moving Bodies",
);
