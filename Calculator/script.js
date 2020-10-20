let input = document.getElementById('input');
let container = document.querySelector('.container')

console.log(input);

// numbers = Array.from(numbers)
// console.log(numbers);

input.addEventListener('onChange', (() => {
  console.log(input.textContent);
}))

container.addEventListener('click', ((e)=> {
  let cls = e.target.classList;
  let content = e.target.textContent;
  // console.log(typeof(content));

  if(cls.contains('number')) {
    console.log(e.target.textContent);
    input.value += (content);
    // if(cls.contains('add')) {
    //   input.value += content
    // } else {

    // }
  } else {

  }
}))