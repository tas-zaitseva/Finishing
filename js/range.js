document.addEventListener('DOMContentLoaded', ()=> {
  const form = document.querySelector('#form');

  const rangeInput = form.elements.priceInput;
  const rangeScale = form.elements.priceScale;
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
    rangeInput.value = rangeInput.value.replace(/[^\d.]/g, '');
    (rangeInput.value === '' || undefined) ? rangeScale.value = rangeInputValue = 0 : rangeScale.value = rangeInputValue = rangeInput.value;
  });
})