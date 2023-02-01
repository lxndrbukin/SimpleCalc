const btns = Array.from(document.querySelectorAll('.calc-button'));
const input = document.querySelector('.calc-input');

btns.map((btn) => {
  btn.addEventListener('click', (e) => {
    switch (e.target.innerHTML) {
      case '=':
        try {
          input.value = eval(input.value);
        } catch (err) {
          input.value = 'Error';
        }
        break;
      case 'C':
        input.value = '';
        break;
      default:
        if (input.value === 'Error') {
          input.value = '';
        } else if (input.value === '0') {
          if (e.target.innerHTML !== '.') {
            input.value = '';
          }
        }
        input.value += e.target.innerHTML;
    }
  });
});

window.addEventListener('keypress', (e) => {
  for (let btn of btns) {
    if (e.key === btn.innerText) {
      switch (e.key) {
        case 'Enter':
          try {
            input.value = eval(input.value);
          } catch (err) {
            input.value = 'Error';
          }
          break;
        case 'C':
          input.value = '';
          break;
        default:
          if (input.value === 'Error') {
            input.value = '';
          } else if (input.value === '0') {
            if (e.key !== '.') {
              input.value = '';
            }
          }
          input.value += e.key;
      }
    }
  }
});
