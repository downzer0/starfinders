import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import NewSheet from './NewSheet';
import Sheet from './Sheet';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      toggleNewSheet: false,
      toggleSheet: false,
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
    this.showNewSheet = this.showNewSheet.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.hidePlayer = this.hidePlayer.bind(this);
  }

  addPlayer(playerObject) {
    const allPlayers = this.state.players || [];
    let included = false;

    allPlayers.forEach((player) => {
      if (player.playerName === playerObject.playerName) {
        included = true;
        return;
      }
    });

    if (!included) {
      allPlayers.push(playerObject);
    }

    this.setState({
      players: allPlayers,
      toggleNewSheet: false,
    });
  }

  removePlayer(event, index) {
    event.preventDefault();

    const confirm = window.confirm('Really remove this player?');
    
    if (confirm) {
      const players = [...this.state.players];
      const newPlayers = players.filter((player, i) => i !== index);

      this.setState({
        players: newPlayers,
      });
    }
  }

  showPlayer(event, index) {
    event.preventDefault();

    this.setState({
      toggleSheet: {
        index,
        player: this.state.players[index],
      }
    });
  }

  hidePlayer(event, index) {
    event.preventDefault();

    this.setState({
      toggleSheet: false,
    });
  }

  updatePlayer(index, data) {
    const updatedPlayers = this.state.players.map((player, i) => {
      if (i !== index) {
        return player;
      }
      return data;
    });

    this.setState({
      players: updatedPlayers,
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
      toggleSheet: false,
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
            <Navigation addPlayer={this.addPlayer} getPlayers={this.getPlayers} showNewSheet={this.showNewSheet} showSheet={this.state.toggleSheet} />
          </div>
          <div className="is-flexed">
            {
              this.state.toggleSheet
              ? <Sheet index={this.state.toggleSheet.index} player={this.state.toggleSheet.player} update={this.updatePlayer} close={this.hidePlayer} />
              : this.state.toggleNewSheet
                ? <NewSheet showNewSheet={this.showNewSheet} addPlayer={this.addPlayer} />
                : !this.state.players.length
                  ? 'Create a new player to get started.'
                  : <div className="app-main has-flex">
                    {
                      this.state.players.map((player, index) => {
                        return (
                          <div className="is-not-flexed" key={index}>
                            <div className="player-card">
                              <h3>{player.playerName}</h3>
                              <dl>
                                <dt>Played by:</dt>
                                <dd>{player.realName}</dd>
                                <dt>Class:</dt>
                                <dd>{player.race} {player.mainClass} {player.specialization}</dd>
                              </dl>
                              <button className="view-player-card" onClick={event => this.showPlayer(event, index)}>View</button>
                              <button className="remove-player" onClick={event => this.removePlayer(event, index)}>Remove</button>
                            </div>
                          </div>
                        )
                      })
                    }
                    </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
