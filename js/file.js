// import { fileTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', ()=> {
  let file = form.elements.upload;
  let formFile = document.querySelector('.uploaded');
  file.addEventListener('change', ()=> {
    if(file.files) {
      formFile.style.paddingTop = "12px";
      let files = Array.from(file.files);
      console.log(files);
      for (let file of files) {
        formFile.innerHTML += `
        <li class="uploaded__file">
        <div class="uploaded__display">
          <a href="#" class="uploaded__button">
            <svg class="uploaded__pic">
              <use xlink:href="./svg/sprite.svg#closeBtn"></use>
            </svg>
          </a>
          <div class="uploaded__name">${file.name}</div>
        </div>
        <div class="uploaded__bar"></div>
      </li>`;
      }

      let buttons = document.querySelectorAll('.uploaded__button');
      for (let button of buttons) {
        button.addEventListener('click', (event)=> {
          event.preventDefault();
          button.closest('.uploaded__file').outerHTML = '';
          console.log(files);
        })
      }
    }
  })
})