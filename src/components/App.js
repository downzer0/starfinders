import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import NewSheet from './NewSheet';
// import PlayerCard from './PlayerCard';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      toggleNewSheet: false,
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
    this.showNewSheet = this.showNewSheet.bind(this);
  }

  addPlayer(playerObject) {
    this.setState({
      players: this.state.players.concat(playerObject),
      toggleNewSheet: false,
    });
  }

  getPlayers() {
    return new Promise((resolve) => {
      resolve(this.state.players);
    });
  }

  showNewSheet(event, state) {
    event.preventDefault();

    this.setState({
      toggleNewSheet: state,
    });

    setTimeout(() => {
      if (state) {
        document.querySelector('.new-sheet').focus();
      } else {
        document.querySelector('.new-player').focus();
      }
    }, 100);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="has-flex">
          <div className="is-not-flexed">
            <Navigation addPlayer={this.addPlayer} getPlayers={this.getPlayers} showNewSheet={this.showNewSheet} />
          </div>
          <div className="is-flexed">
            {
              this.state.toggleNewSheet
              ? <NewSheet showNewSheet={this.showNewSheet} addPlayer={this.addPlayer} />
              : !this.state.players.length
                ? 'Create a new player to get started.'
                : this.state.players.map((player, index) => {
                  return (
                    <div className="player-card" key={index}>
                      <h3>{player.playerName}</h3>
                      <button>View</button>
                      <button>Remove</button>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
