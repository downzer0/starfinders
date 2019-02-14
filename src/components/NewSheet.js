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