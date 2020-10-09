let a = [3, 5, 6];
let b = [1, 7, 6];

const difAb = (a, b) => {
  let newArr = [0, 0];

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      newArr[0] += 1;
    } else if (a[i] === b[i]) {
      continue;
    } else {
      newArr[1] += 1;
    }
  }
  console.log(newArr);
  return newArr;
};

difAb(a, b);
