function calcTemplate() {
  const btns = [
    '+',
    '-',
    '*',
    '/',
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    '.',
    0,
    'C',
    '=',
  ];
  const renderedBtns = btns
    .map(
      (btn) =>
        /*html*/ `<button class='calc-button ${
          btn === '=' ? 'equal' : ''
        }'>${btn}</button>`
    )
    .join('');
  return /*html*/ `
    <div class='calc'>
      <input class='calc-input' disabled />
      <div class='calc-buttons'>
        ${renderedBtns}
      </div>
    </div>
  `;
}
