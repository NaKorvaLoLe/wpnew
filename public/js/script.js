const btn = document.querySelector('.main__btn');
const result = document.querySelector('.main__result');


btn.addEventListener('click', (e) => {
    e.preventDefault();

    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const activity = document.querySelector('input[name="activity"]:checked').value;
    const weight = Number(document.getElementById('weight').value);

    if (weight < 0 || weight > 30) {
      result.innerHTML = '<span>Вводите вес от 0 до 30 кг.</span>';
      return;
    }

    let baseAmount;
    switch (breed) {
      case 'овчарка':
        switch (age) {
          case 'меньше 1':
            baseAmount = 600;
            break;
          case '1-5':
            baseAmount = 800;
            break;
          case 'больше 5':
            baseAmount = 700;
            break;
        }
        break;


      case 'лабрадор':
        switch (age) {
          case 'меньше 1':
            baseAmount = 500;
            break;
          case '1-5':
            baseAmount = 700;
            break;
          case 'больше 5':
            baseAmount = 400;
            break;
        }
        break;
    }

    let weightMultiplier;
    if (weight <= 5) {
      weightMultiplier = 1;
    } else if (weight <= 10) {
      weightMultiplier = 1.2;
    } else if (weight <= 20) {
      weightMultiplier = 1.3;
    } else {
      weightMultiplier = 1.4;
    }

    let activityMultiplier;
    if (activity === 'активный') {
      activityMultiplier = 1.3;
    } else {
      activityMultiplier = 1;
    }

    const recommendedAmount = Math.round(baseAmount * weightMultiplier * activityMultiplier);

    result.textContent = `Рекомендуемое количество корма в день: ${recommendedAmount} г`;
  });




