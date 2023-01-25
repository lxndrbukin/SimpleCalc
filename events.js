const btns = Array.from(document.querySelectorAll('.calc-buttons'));
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
      case 'AC':
        input.value = '';
        break;
      default:
        console.log(e.target.innerHTML);
        if (input.value === 'Error') {
          input.value = '';
        } else if (!input.value.includes('.')) {
          if (input.value.startsWith('0')) {
            input.value = '';
          }
        }
        input.value += e.target.innerHTML;
    }
  });
});

window.addEventListener('keypress', (e) => {
  for (let i = 0; i <= btns.length; i++) {
    if (e.key === btns[i].innerHTML) {
      input.value += btns[i].innerHTML;
    }
  }
});
