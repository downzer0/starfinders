import React from 'react';
import '../css/sheet.css';

const generatePlayer = (event, addPlayer) => {
  event.preventDefault();

  const form = document.querySelector('.new-sheet form');
  const inputs = Array.from(form.querySelectorAll('input'));
  const playerObject = {};

  let errors = false;

  inputs.forEach((input) => {
    if (!input.value) {
      errors = true;
      return;
    }

    playerObject[input.id] = input.value;
  });

  if (errors) {
    return alert('All player values are needed.');
  }

  return addPlayer(playerObject);
};

const NewSheet = (props) => {
  const { addPlayer, showNewSheet } = props;

  return (
    <div className="new-sheet" tabIndex="-1">
      <h2>Create a new player</h2>
      <form>
        <div className="has-flex">
          <label htmlFor="realName" className="is-not-flexed">Real name:</label>
          <input type="text" id="realName" className="is-flexed" />
        </div>
        <div className="has-flex">
          <label htmlFor="playerName" className="is-not-flexed">Player name:</label>
          <input type="text" id="playerName" className="is-flexed" />
        </div>
        <div className="has-flex">
          <div className="is-flexed">
            <label htmlFor="str" aria-label="Strength">STR</label>
            <input type="number" id="str" />
          </div>
          <div className="is-flexed">
            <label htmlFor="dex" aria-label="Dexterity">DEX</label>
            <input type="number" id="dex" />
          </div>
          <div className="is-flexed">
            <label htmlFor="con" aria-label="Constitution">CON</label>
            <input type="number" id="con" />
          </div>
          <div className="is-flexed">
            <label htmlFor="int" aria-label="Intelligence">INT</label>
            <input type="number" id="int" />
          </div>
          <div className="is-flexed">
            <label htmlFor="wis" aria-label="Wisdom">WIS</label>
            <input type="number" id="wis" />
          </div>
          <div className="is-flexed">
            <label htmlFor="cha" aria-label="Charisma">CHA</label>
            <input type="number" id="cha" />
          </div>
        </div>
      </form>
      <p>
        <em>You will be able to add the additional details later.</em>
      </p>
      <div>
        <button onClick={event => generatePlayer(event, addPlayer)}>Save player</button>
        <button onClick={event => showNewSheet(event, false)}>Cancel</button>
      </div>
    </div>
  )
};

export default NewSheet;