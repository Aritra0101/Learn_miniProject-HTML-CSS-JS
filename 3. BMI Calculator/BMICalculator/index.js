const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const res = document.querySelector("#result");

  if (height == "" || height < 0 || isNaN(height)) {
    res.innerHTML = `Enter a valid Height`;
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    res.innerHTML = `Enter a valid Height`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    res.innerHTML = `<span>${bmi}</span>`;

    if(bmi < 18.6) {
        res.innerHTML += `<br/><span>Under Weight</span>`;
    } else if(bmi > 24.9) {
        res.innerHTML += `<br/><span>Over Weight</span>`;
    } else {
        res.innerHTML += `<br/><span>Normal Weight</span>`;
    }
  }
});
