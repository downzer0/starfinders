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
  const { addPlayer, getPlayers, showNewSheet } = props;

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
    </div>
  )
}

export default Navigation;