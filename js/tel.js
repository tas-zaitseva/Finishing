
document.addEventListener('DOMContentLoaded', ()=> {
  let cleave = new Cleave('.telephone', {
    delimiters: [' ', ' ', '-', '-',],
    blocks: [2, 3, 3, 2, 2],
    prefix: '+7'
  });

  const inputTel = form.elements.tel;
  let valid = false;
  
  inputTel.addEventListener('input', ()=> {
    inputTel.value = inputTel.value.replace(/[^\d.+ -]/g, '');
    if (inputTel.value.length === 16) {
      valid = true,
      inputTel.classList.add('valid');
    };
  })
})