const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const results = document.getElementById('results');

    if (height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    

    if (weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6)
    {
        advice.innerHTML = ' <p>You are Under Weight</p>'
    }
    if (bmi >= 18.6 && bmi <= 24.9)
    {
        advice.innerHTML = ' <p>You are Fit</p>'
    }
    if (bmi > 24.9)
    {
        advice.innerHTML = ' <p>You are Over Weight</p>'
    }

})

