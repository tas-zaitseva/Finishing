document.addEventListener('DOMContentLoaded', ()=> {
  const form = document.querySelector('#form');  

  const area = form.elements.area;
  const areaMinus = document.querySelector('.number__button--minus');
  const areaPlus = document.querySelector('.number__button--plus');
  const areaStep = 10;

  let areaInputValue = 100;

  area.addEventListener('input', ()=> {
    area.value = area.value.replace(/[^\d.]/g, '');
    areaInputValue = Number(area.value);
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