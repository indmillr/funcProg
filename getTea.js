// Function that return a string representing a cup of tea
const prepareTea = () => "greenTea";

/*
Given a function (representing the Tea type) and number of cups needed,
the following function returns an array of strings,
each representing a cup of a specific type of tea.
*/

const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4Green = getTea(prepareGreenTea, 27);
const tea4Black = getTea(prepareBlackTea, 13);
