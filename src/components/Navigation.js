import React from 'react';
import DiceRoller from './DiceRoller';
import '../css/navigation.css';

const save = async (event, getPlayers) => {
  event.preventDefault();
  const playersData = await getPlayers();

  if (playersData && playersData.length) {
    localStorage.setItem('__starfinder', JSON.stringify(playersData));
    return alert('Saved!');
  }

  return alert('No players to save.');
};

const download = async (event, getPlayers) => {
  event.preventDefault();
  const playersData = await getPlayers();

  if (playersData && playersData.length) {
    const data = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(playersData))}`;
    const container = document.querySelector("#tools").parentNode;
    const button = document.createElement("a");
    button.setAttribute("href", data);
    button.setAttribute("download", "starfinders.json");
    container.appendChild(button);
    button.click();
    button.remove();
    return;
  }

  return alert('No players to download.');
};

const load = async (event, addPlayer) => {
  event.preventDefault();
  const playersData = JSON.parse(localStorage.getItem('__starfinder'));

  if (playersData && playersData.length) {
    playersData.forEach((player) => {
      addPlayer(player);
    });

    return;
  }

  return alert('No player data to load.');
};

const Navigation = (props) => {
  const { upload, addPlayer, getPlayers, showNewSheet, showSheet } = props;

  return (
    <div className="nav">
      <nav className="has-radius" aria-labelledby="tools">
        <h2 id="tools">Tools</h2>
        <ul>
          <li><button className="new-player" onClick={event => showNewSheet(event, true)}>New player</button></li>
          <li><button className="new-note">New note</button></li>
        </ul>
        <h2>Save / Load</h2>
        <ul>
          <li>
            <div className="has-flex">
              <div className="is-flexed">
                <button onClick={event => save(event, getPlayers)}>Save</button>
              </div>
              <div className="is-flexed">
                <button id="export" onClick={event => download(event, getPlayers)}>Export</button>
              </div>
            </div>
          </li>
          <li>
            <div className="has-flex">
              <div className="is-flexed">
                <button onClick={event => load(event, addPlayer)}>Restore</button>
              </div>
              <div className="is-flexed">
                <button id="import" onClick={event => upload(event, addPlayer)}>Import</button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="dice">
        <DiceRoller />
      </div>
      {
        showSheet
        ? <div className="sheet-links">
            <h2>Character quick links</h2>
            <ul>
              <li><a href="#player-info">Player Info</a></li>
              <li><a href="#ability-scores">Ability Scores</a></li>
              <li><a href="#health-resolve-init">Health, Resolve, Inits</a></li>
              <li><a href="#armor-class">Armor Class</a></li>
              <li><a href="#saving-throws">Saving Throws</a></li>
              <li><a href="#attack-bonuses">Attack Bonuses</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#weapons">Weapons</a></li>
              <li><a href="#armor">Armor</a></li>
            </ul>
          </div>
        : ''
      }
    </div>
  )
}

export default Navigation;