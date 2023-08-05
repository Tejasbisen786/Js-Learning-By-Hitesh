const form = document.querySelector('form');
// this usecase will give you empty
const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#result');
  const results1 = document.querySelector('#results');


  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
 // 

 // homework Done
    // cheack weight note
    if(bmi<=18.5)
    {
    results1.innerHTML= "<span> Person is UNDERWEIGHT</span>";
    } else if(bmi>=18.5 && bmi<=24.9 )
    {
    results1.innerHTML= "<span> Person has HEALTHY WEIGHT</span>";

    }
    else if(bmi>=25.0 && bmi<= 29.9 ){
      results1.innerHTML= "<span> Person is OVER WEIGHT</span>";

    }

  else{
  
    results1.innerHTML= "<span> OBESITY</span>";
  }

}});