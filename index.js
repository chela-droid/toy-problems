var warning = document.querySelector('.error'), 
input = document.querySelector('input[type="number"'),
 button = document.querySelector('button'), 
 p = document.querySelector('#blank');

input.addEventListener('input', function(){
  const value = input.value;

});
// A > 79, B- 60 - 79, C - 59 - 49, D - 40 - 49, E - <40

function check(){
  let value = input.value;
  if(value < 0 || value > 100){
    p.innerHTML = '';
  }else if(value > 79 && value <= 100){
     p.innerHTML = 'Your Grade is: A';
  }else if(value >= 60 && value <=79){
    p.innerHTML = 'Your Grade is: B';
  } else if (value >= 49 && value <= 59) {
    p.innerHTML = 'Your Grade is: C';
  } else if (value >= 40 && value <= 49) {
    p.innerHTML = 'Your Grade is: D';
  }else{
    p.innerHTML = 'Your Grade is: E';
  }
};

button.onclick = check;
