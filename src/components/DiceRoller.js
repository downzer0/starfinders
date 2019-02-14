import React from 'react';
import '../css/dice.css';

const roller = (event) => {
  event.preventDefault();

  const die = event.target.getAttribute('data-value');
  const num = document.querySelector('#number-of-die').value;
  const result = document.querySelector('.dice-result .result');

  const roll = ((Math.floor(Math.random() * parseInt(die, 10)) + 1) * parseInt(num, 10));

  result.innerHTML = roll;
  if (roll === 1) {
    result.style.color = 'red';
  } else if (roll === 20) {
    result.style.color = 'green';
  } else {
    result.style.color = 'inherit';
  }
};

const Dice = () => {
  return (
    <div>
      <h2 id="dice">Dice roller</h2>
      <form>
        <label>
          Number of die:
          <input type="text" id="number-of-die" defaultValue="1" maxLength="2" />
        </label>
        <div className="dice-options">
          <button className="die" aria-label="4-sided" data-value="4" onClick={event => roller(event)}>d4</button>
          <button className="die" aria-label="6-sided" data-value="6" onClick={event => roller(event)}>d6</button>
          <button className="die" aria-label="8-sided" data-value="8" onClick={event => roller(event)}>d8</button>
          <button className="die" aria-label="10-sided" data-value="10" onClick={event => roller(event)}>d10</button>
          <button className="die" aria-label="12-sided" data-value="12" onClick={event => roller(event)}>d12</button>
          <button className="die" aria-label="20-sided" data-value="20" onClick={event => roller(event)}>d20</button>
        </div>
      </form>
      <div className="dice-result">
        <div className="result">~</div>
      </div>
    </div>
  );
};

export default Dice;