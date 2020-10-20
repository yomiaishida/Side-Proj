const input = document.getElementById('input');
let container = document.querySelector('.container');
const addBtn = document.querySelector('.add');
let equalBtn = document.querySelector('.equal');

let a = [];

const inputNum = (e) => {
  
  let cls = e.target.classList;
  let content = e.target.textContent;
  // console.log(typeof(content));

  if(cls.contains('number')) {
    input.value += (content);
  }
}


const addNum = () => {
 a.push(input.value)

 console.log(a);

 input.value = ''
}

function totalNum() {
  let total;
  if(input.value !== '') {
    a.push(input.value)
    console.log(a);

    a.forEach(num => {
      total = parseFloat(num) +parseFloat(num);
      console.log(total);
    });
    input.value = total
  } else {
    alert('Please input a number to be added')
  }
}

container.addEventListener('click', inputNum)

addBtn.addEventListener('click', addNum)

equalBtn.addEventListener('click', totalNum)