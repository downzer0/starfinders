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
  const { addPlayer, getPlayers, showNewSheet, showSheet } = props;

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
          <li><button onClick={event => save(event, getPlayers)}>Save</button></li>
          <li><button onClick={event => load(event, addPlayer)}>Load</button></li>
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
            </ul>
          </div>
        : ''
      }
    </div>
  )
}

export default Navigation;