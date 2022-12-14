const speedLimit = 70;
const demeritPoint = 0;

function speed(x){
  const difference = x - speedLimit;
  const totalIncrement = difference / 5;
  // print demerit point
  for(var i = 0; i < totalIncrement; ++i){
    demeritPoint++;
  };
  console.log('Total Demerit points are: ', demeritPoint);

  demeritPoint > 12 ? console.log('License Suspended') : '';
  x < 70 ? console.log('OK') : '';
};

speed(60);
// speed(100);
// speed(200);