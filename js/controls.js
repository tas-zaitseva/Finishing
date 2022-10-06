document.addEventListener('DOMContentLoaded', ()=> {
  let form = document.querySelector('#form');

  // for .form__range
  let rangeInput = form.elements.priceInput;
  let rangeScale = form.elements.priceScale;
  let rangeInputValue;

  function setInputValueToString(value) {
    rangeInput.value = new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 0, style: 'currency', currency: 'RUB' }).format(value);
  };
  
  rangeScale.addEventListener('input', () => {
    rangeInputValue = rangeScale.value;
    setInputValueToString(rangeScale.value);
  });

  rangeInput.addEventListener('focus', () => {
    if (rangeInputValue) {
      rangeInput.value = rangeInputValue;
    }
  });

  rangeInput.addEventListener('blur', ()=> {
    if (rangeInputValue) {
      setInputValueToString(rangeInputValue);
    }
  });

  rangeInput.addEventListener('input', () => {
    rangeScale.value = rangeInputValue = rangeInput.value;
  });


  // for area
  let area = form.elements.area;
  let areaMinus = document.querySelector('.number__button--minus');
  let areaPlus = document.querySelector('.number__button--plus');
  let areaStep = 10;

  let areaInputValue = 100;

  area.addEventListener('input', ()=> {
    areaInputValue = parseInt(area.value);
  })

  area.addEventListener('blur', ()=> {
    if (areaInputValue) {
      area.value = `${areaInputValue} м${'²'}`;
    }
  })

  area.addEventListener('focus', ()=> {
    area.value = areaInputValue;
  })

  areaMinus.addEventListener('click', ()=> {
    if (areaInputValue >= 10) {
      area.value = areaInputValue = areaInputValue - areaStep;
    }
  })
  
  areaPlus.addEventListener('click', ()=> {
    area.value = areaInputValue = areaInputValue + areaStep;
  })
})