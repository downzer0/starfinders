import React, { Component } from 'react';
import '../css/sheet.css';

class Sheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: this.props.player,
      togglePlayerNote: false,
    };

    this.prepState = this.prepState.bind(this);
    this.updateAllStats = this.updateAllStats.bind(this);
  }

  async componentDidMount() {
    await this.prepState();
  }

  prepState() {
    return new Promise((resolve) => {
      const form = document.querySelector('.sheet form');
      const inputs = Array.from(form.querySelectorAll('input,select,textarea'));
      const playerObject = {};

      inputs.forEach((input) => {
        playerObject[input.id] = input.value;
      });

      playerObject.realName = this.props.player.realName;
      playerObject.playerName = this.props.player.playerName;

      this.setState({
        player: playerObject,
      });

      resolve();
    });
  }

  updatePlayer(event) {
    event.preventDefault();

    const form = document.querySelector('.sheet form');
    const inputs = Array.from(form.querySelectorAll('input,select,textarea'));
    const playerObject = {};

    inputs.forEach((input) => {
      playerObject[input.id] = input.value;
    });

    playerObject.realName = this.props.player.realName;
    playerObject.playerName = this.props.player.playerName;

    return this.props.update(this.props.index, playerObject);
  }

  updateAllStats(event) {
    const target = event.target;
    const updatedPlayer = this.state.player;

    updatedPlayer[target.id] = target.value;
    this.setState({
      player: updatedPlayer,
    });
  }

  render() {
    return (
      <div className="sheet">
        <form>
          <header id="player-info" tabIndex="-1">
            <h2>{this.state.player.playerName} ({this.state.player.realName})</h2>
            <button type="button" onClick={event => this.props.close(event)}>Close</button>
            <div className="has-flex">
              <div className="is-flexed">
                <label htmlFor="mainClass">Main class:</label>
                <select id="mainClass" name="mainClass" defaultValue={this.state.player.mainClass}>
                  <option value="Envoy">Envoy</option>
                  <option value="Operative">Operative</option>
                  <option value="Mystic">Mystic</option>
                  <option value="Solarian">Solarian</option>
                  <option value="Soldier">Soldier</option>
                  <option value="Technomancer">Technomancer</option>
                </select>
              </div>
              <div className="is-flexed">
                <label htmlFor="level">Level:</label>
                <input type="text" id="level" defaultValue={this.state.player.level || 1} />
              </div>
              <div className="is-flexed">
                <label htmlFor="specialization">Specialization:</label>
                <select id="specialization" name="specialization" defaultValue={this.state.player.specialization}>
                  <option value="Ghost">Ghost</option>
                  <option value="Daredevil">Daredevil</option>
                  <option value="Detective">Detective</option>
                  <option value="Explorer">Explorer</option>
                  <option value="Hacker">Hacker</option>
                  <option value="Spy">Spy</option>
                  <option value="Thief">Thief</option>
                </select>
              </div>
              <div className="is-flexed">
                <label htmlFor="race">Race:</label>
                <input type="text" id="race" defaultValue={this.state.player.race} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <label htmlFor="secondaryClass">Secondary class:</label>
                <select id="secondaryClass" name="secondaryClass" defaultValue={this.state.player.secondaryClass}>
                  <option value="Envoy">Envoy</option>
                  <option value="Operative">Operative</option>
                  <option value="Mystic">Mystic</option>
                  <option value="Solarian">Solarian</option>
                  <option value="Soldier">Soldier</option>
                  <option value="Technomancer">Technomancer</option>
                </select>
              </div>
              <div className="is-flexed">
                <label htmlFor="gender">Gender:</label>
                <input type="text" id="gender" defaultValue={this.state.player.gender} />
              </div>
              <div className="is-flexed">
                <label htmlFor="size">Size:</label>
                <input type="number" id="size" defaultValue={this.state.player.size} />
              </div>
              <div className="is-flexed">
                <label htmlFor="speed">Speed:</label>
                <input type="number" id="speed" defaultValue={this.state.player.speed} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <label htmlFor="tertiaryClass">Tertiary class:</label>
                <input type="text" id="tertiaryClass" defaultValue={this.state.player.tertiaryClass} />
              </div>
              <div className="is-flexed">
                <label htmlFor="theme">Theme:</label>
                <select id="theme" name="theme" defaultValue={this.state.player.theme}>
                  <option value="Ace Pilot">Ace Pilot</option>
                  <option value="Bounty Hunter">Bounty Hunter</option>
                  <option value="Icon">Icon</option>
                  <option value="Mercenary">Mercenary</option>
                  <option value="Outlaw">Outlaw</option>
                  <option value="Priest">Priest</option>
                  <option value="Scholar">Scholar</option>
                  <option value="Spacefarer">Spacefarer</option>
                  <option value="Xenoseeker">Xenoseeker</option>
                  <option value="Themeless">Themeless</option>
                </select>
              </div>
              <div className="is-flexed">
                <label htmlFor="homeWorld">Home world:</label>
                <input type="text" id="homeWorld" defaultValue={this.state.player.homeWorld} />
              </div>
              <div className="is-flexed">
                <label htmlFor="diety">Diety:</label>
                <input type="text" id="diety" defaultValue={this.state.player.diety} />
              </div>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea id="description" defaultValue={this.state.player.description}></textarea>
            </div>
          </header>

          <section id="ability-scores" tabIndex="-1">
            <h2>Ability scores</h2>
            <div className="has-flex">
              <div className="is-flexed">
                <span className="abbr abbr-str" aria-label="Strength">STR</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="strTotal" aria-label="Total strength"><strong>Total</strong></label>
                <input type="number" id="strTotal" value={(10 + (parseInt(this.state.player.strModifier, 10) + parseInt(this.state.player.strRacePoints, 10) + parseInt(this.state.player.strThemePoints, 10) + parseInt(this.state.player.strAugmentPoints, 10) + parseInt(this.state.player.strAbilityPoints, 10))) || 10} readOnly />
              </div>
              <div className="is-flexed is-key">
                <label htmlFor="strModifier" aria-label="Strength modifier">Mod</label>
                <input type="number" id="strModifier" defaultValue={this.state.player.strModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="strRacePoints" aria-label="Strength race points">Race</label>
                <input type="number" id="strRacePoints" defaultValue={this.state.player.strRacePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="strThemePoints" aria-label="Strength theme points">Theme</label>
                <input type="number" id="strThemePoints" defaultValue={this.state.player.strThemePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="strAugmentPoints" aria-label="Strength augment points">Aug</label>
                <input type="number" id="strAugmentPoints" defaultValue={this.state.player.strAugmentPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="strAbilityPoints" aria-label="Strength ability points">Abl</label>
                <input type="number" id="strAbilityPoints" defaultValue={this.state.player.strAbilityPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <span className="abbr abbr-dex" aria-label="Dexterity">DEX</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="dexTotal" aria-label="Total Dexterity"><strong>Total</strong></label>
                <input type="number" id="dexTotal" value={(10 + (parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.dexRacePoints, 10) + parseInt(this.state.player.dexThemePoints, 10) + parseInt(this.state.player.dexAugmentPoints, 10) + parseInt(this.state.player.dexAbilityPoints, 10))) || 10} readOnly />
              </div>
              <div className="is-flexed is-key">
                <label htmlFor="dexModifier" aria-label="Dexterity modifier">Mod</label>
                <input type="number" id="dexModifier" defaultValue={0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="dexRacePoints" aria-label="Dexterity race points">Race</label>
                <input type="number" id="dexRacePoints" defaultValue={this.state.player.dexRacePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="dexThemePoints" aria-label="Dexterity theme points">Theme</label>
                <input type="number" id="dexThemePoints" defaultValue={this.state.player.dexThemePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="dexAugmentPoints" aria-label="Dexterity augment points">Aug</label>
                <input type="number" id="dexAugmentPoints" defaultValue={this.state.player.dexAugmentPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="dexAbilityPoints" aria-label="Dexterity ability points">Abl</label>
                <input type="number" id="dexAbilityPoints" defaultValue={this.state.player.dexAbilityPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <span className="abbr abbr-con" aria-label="Constitution">CON</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="conTotal" aria-label="Total Constitution"><strong>Total</strong></label>
                <input type="number" id="conTotal" value={(10 + (parseInt(this.state.player.conModifier, 10) + parseInt(this.state.player.conRacePoints, 10) + parseInt(this.state.player.conThemePoints, 10) + parseInt(this.state.player.conAugmentPoints, 10) + parseInt(this.state.player.conAbilityPoints, 10))) || 10} readOnly />
              </div>
              <div className="is-flexed is-key">
                <label htmlFor="conModifier" aria-label="Constitution modifier">Mod</label>
                <input type="number" id="conModifier" defaultValue={this.state.player.conModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="conRacePoints" aria-label="Constitution race points">Race</label>
                <input type="number" id="conRacePoints" defaultValue={this.state.player.conRacePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="conThemePoints" aria-label="Constitution theme points">Theme</label>
                <input type="number" id="conThemePoints" defaultValue={this.state.player.conThemePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="conAugmentPoints" aria-label="Constitution augment points">Aug</label>
                <input type="number" id="conAugmentPoints" defaultValue={this.state.player.conAugmentPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="conAbilityPoints" aria-label="Constitution ability points">Abl</label>
                <input type="number" id="conAbilityPoints" defaultValue={this.state.player.conAbilityPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <span className="abbr abbr-int" aria-label="Intelligence">INT</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="intTotal" aria-label="Total Intelligence"><strong>Total</strong></label>
                <input type="number" id="intTotal" value={(10 + (parseInt(this.state.player.intModifier, 10) + parseInt(this.state.player.intRacePoints, 10) + parseInt(this.state.player.intThemePoints, 10) + parseInt(this.state.player.intAugmentPoints, 10) + parseInt(this.state.player.intAbilityPoints, 10))) || 10} readOnly />
              </div>
              <div className="is-flexed is-key">
                <label htmlFor="intModifier" aria-label="Intelligence modifier">Mod</label>
                <input type="number" id="intModifier" defaultValue={this.state.player.intModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="intRacePoints" aria-label="Intelligence race points">Race</label>
                <input type="number" id="intRacePoints" defaultValue={this.state.player.intRacePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="intThemePoints" aria-label="Intelligence theme points">Theme</label>
                <input type="number" id="intThemePoints" defaultValue={this.state.player.intThemePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="intAugmentPoints" aria-label="Intelligence augment points">Aug</label>
                <input type="number" id="intAugmentPoints" defaultValue={this.state.player.intAugmentPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="intAbilityPoints" aria-label="Intelligence ability points">Abl</label>
                <input type="number" id="intAbilityPoints" defaultValue={this.state.player.intAbilityPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <span className="abbr abbr-wis" aria-label="Wisdom">WIS</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="wisTotal" aria-label="Total Wisdom"><strong>Total</strong></label>
                <input type="number" id="wisTotal" value={(10 + (parseInt(this.state.player.wisModifier, 10) + parseInt(this.state.player.wisRacePoints, 10) + parseInt(this.state.player.wisThemePoints, 10) + parseInt(this.state.player.wisAugmentPoints, 10) + parseInt(this.state.player.wisAbilityPoints, 10))) || 10} readOnly />
              </div>
              <div className="is-flexed is-key">
                <label htmlFor="wisModifier" aria-label="Wisdom modifier">Mod</label>
                <input type="number" id="wisModifier" defaultValue={this.state.player.wisModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="wisRacePoints" aria-label="Wisdom race points">Race</label>
                <input type="number" id="wisRacePoints" defaultValue={this.state.player.wisRacePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="wisThemePoints" aria-label="Wisdom theme points">Theme</label>
                <input type="number" id="wisThemePoints" defaultValue={this.state.player.wisThemePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="wisAugmentPoints" aria-label="Wisdom augment points">Aug</label>
                <input type="number" id="wisAugmentPoints" defaultValue={this.state.player.wisAugmentPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="wisAbilityPoints" aria-label="Wisdom ability points">Abl</label>
                <input type="number" id="wisAbilityPoints" defaultValue={this.state.player.wisAbilityPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <span className="abbr abbr-cha" aria-label="Charisma">CHA</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="chaTotal" aria-label="Total Charisma"><strong>Total</strong></label>
                <input type="number" id="chaTotal" value={(10 + (parseInt(this.state.player.chaModifier, 10) + parseInt(this.state.player.chaRacePoints, 10) + parseInt(this.state.player.chaThemePoints, 10) + parseInt(this.state.player.chaAugmentPoints, 10) + parseInt(this.state.player.chaAbilityPoints, 10))) || 10} readOnly />
              </div>
              <div className="is-flexed is-key">
                <label htmlFor="chaModifier" aria-label="Charisma modifier">Mod</label>
                <input type="number" id="chaModifier" defaultValue={this.state.player.chaModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="chaRacePoints" aria-label="Charisma race points">Race</label>
                <input type="number" id="chaRacePoints" defaultValue={this.state.player.chaRacePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="chaThemePoints" aria-label="Charisma theme points">Theme</label>
                <input type="number" id="chaThemePoints" defaultValue={this.state.player.chaThemePoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="chaAugmentPoints" aria-label="Charisma augment points">Aug</label>
                <input type="number" id="chaAugmentPoints" defaultValue={this.state.player.chaAugmentPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="chaAbilityPoints" aria-label="Charisma ability points">Abl</label>
                <input type="number" id="chaAbilityPoints" defaultValue={this.state.player.chaAbilityPoints || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
          </section>

          <section id="health-resolve-init" tabIndex="-1">
            <h2>Health, resolve, initiative</h2>
            <h3 id="initiative">Initiative</h3>
            <div className="has-flex">
              <div className="is-flexed is-important">
                <label htmlFor="initTotal" aria-describedby="initiative"><strong>Total</strong></label>
                <input type="number" id="initTotal" value={(parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.initMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="initDexModifier" aria-describedby="initiative">Dex Mod</label>
                <input type="number" id="initDexModifier" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="initMiscModifier" aria-describedby="initiative">Misc Mod</label>
                <input type="number" id="initMiscModifier" defaultValue={this.state.player.initMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed"></div>
              <div className="is-flexed"></div>
              <div className="is-flexed"></div>
            </div>

            <h3 id="healthResolve">Health and Resolve</h3>
            <div className="has-flex">
              <div className="is-flexed">
                <h4 id="stamina">Stamina</h4>
              </div>
              <div className="is-flexed">
                <h4 id="hitpoints">Hit Points</h4>
              </div>
              <div className="is-flexed">
                <h4 id="resolve">Resolve</h4>
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed is-important">
                <label htmlFor="staTotal" aria-describedby="stamina"><strong>Total</strong></label>
                <input type="number" id="staTotal" value={(parseInt(this.state.player.staFromLevel, 10) + parseInt(this.state.player.staMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="staFromLevel" aria-describedby="stamina">From Level</label>
                <input type="number" id="staFromLevel" defaultValue={this.state.player.staFromLevel || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="staMiscModifier" aria-describedby="stamina">Misc Mod</label>
                <input type="number" id="staMiscModifier" defaultValue={this.state.player.staMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="hpTotal" aria-describedby="hitpoints"><strong>Total</strong></label>
                <input type="number" id="hpTotal" value={(parseInt(this.state.player.hpFromLevel, 10) + parseInt(this.state.player.hpMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="hpFromLevel" aria-describedby="hitpoints">From Level</label>
                <input type="number" id="hpFromLevel" defaultValue={this.state.player.hpFromLevel || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="hpMiscModifier" aria-describedby="hitpoints">Misc Mod</label>
                <input type="number" id="hpMiscModifier" defaultValue={this.state.player.hpMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="resTotal" aria-describedby="resolve"><strong>Total</strong></label>
                <input type="number" id="resTotal" value={(parseInt(this.state.player.resFromLevel, 10) + parseInt(this.state.player.resMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="resFromLevel" aria-describedby="resolve">From Level</label>
                <input type="number" id="resFromLevel" defaultValue={this.state.player.resFromLevel || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="resMiscModifier" aria-describedby="resolve">Misc Mod</label>
                <input type="number" id="resMiscModifier" defaultValue={this.state.player.resMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed is-key">
                <label htmlFor="staCurrent">Current Stamina</label>
                <input type="number" id="staCurrent" defaultValue={this.state.player.staCurrent || 0} />
              </div>
              <div className="is-flexed is-key">
                <label htmlFor="hpCurrent">Current HP</label>
                <input type="number" id="hpCurrent" defaultValue={this.state.player.hpCurrent || 0} />
              </div>
              <div className="is-flexed">
                <label htmlFor="hpTemp">Temp HP</label>
                <input type="number" id="hpTemp" defaultValue={this.state.player.hpTemp || 0} />
              </div>
              <div className="is-flexed">
                <label htmlFor="resTemp">Temp Resolve</label>
                <input type="number" id="resTemp" defaultValue={this.state.player.resTemp || 0} />
              </div>
            </div>
          </section>

          <section id="armor-class" tabIndex="-1">
            <h2>Armor Class</h2>
            <div className="has-flex">
              <div className="is-flexed">
                <div className="eac">
                  <span className="abbr abbr-eac" aria-hidden="true">EAC</span>
                  <span id="eac" className="sr-only">Energy Armor Class</span>
                </div>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="eacTotal"><strong>Total</strong></label>
                <input type="number" id="eacTotal" aria-describedby="eac" value={10 + ((parseInt(this.state.player.eacArmorBonus, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.eacMisModifier, 10))) || 10} readOnly />
              </div>
              <div className="is-flexed">
                = 10 +
              </div>
              <div className="is-flexed">
                <label htmlFor="eacArmorBonus">Armor Bonus</label>
                <input type="number" id="eacArmorBonus" aria-describedby="eac" defaultValue={this.state.player.eacArmorBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="eacDexBonus">DEX Bonus</label>
                <input type="number" id="eacDexBonus" aria-describedby="eac" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="eacMisModifier">Misc Mod</label>
                <input type="number" id="eacMisModifier" aria-describedby="eac" defaultValue={this.state.player.eacMisModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <div className="kac">
                  <span className="abbr abbr-kac" aria-hidden="true">KAC</span>
                  <span id="kac" className="sr-only">Kinetic Armor Class</span>
                </div>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="kacTotal"><strong>Total</strong></label>
                <input type="number" id="kacTotal" aria-describedby="kac" value={( 10 + (parseInt(this.state.player.kacArmorBonus, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.kacMisModifier, 10))) || 10} readOnly />
              </div>
              <div className="is-flexed">
                = 10 +
              </div>
              <div className="is-flexed">
                <label htmlFor="kacArmorBonus">Armor Bonus</label>
                <input type="number" id="kacArmorBonus" aria-describedby="kac" defaultValue={this.state.player.kacArmorBonux || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="kacDexBonus">DEX Bonus</label>
                <input type="number" id="kacDexBonus" aria-describedby="kac" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="kacMisModifier">Misc Mod</label>
                <input type="number" id="kacMisModifier" aria-describedby="kac" defaultValue={this.state.player.kacMisModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <div>
                  <strong id="acVsCombat">AC vs Combat Maneuvers</strong>
                </div>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="acVsCombatTotal"><strong>Total</strong></label>
                <input type="number" id="acVsCombatTotal" aria-describedby="acVsCombat" value={( 8 + 10 + (parseInt(this.state.player.kacArmorBonus, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.kacMisModifier, 10))) || 8} readOnly />
              </div>
              <div className="is-flexed">
                = 8 +
              </div>
              <div className="is-flexed">
                <div className="kac">
                  <span className="abbr abbr-kac" aria-label="Kinetic Armor Class">KAC</span>
                </div>
              </div>
            </div>
          </section>

          <section id="saving-throws" tabIndex="-1">
            <h2>Saving Throws</h2>
            <div className="has-flex">
              <div className="is-flexed">
                <div className="saving-fortitude">
                  <span className="abbr" id="fortitude">FORTITUDE</span>
                </div>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="fortTotal"><strong>Total</strong></label>
                <input type="number" id="fortTotal" aria-describedby="fortitude" value={(parseInt(this.state.player.fortBaseSave, 10) + parseInt(this.state.player.conModifier, 10) + parseInt(this.state.player.fortMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                =
              </div>
              <div className="is-flexed">
                <label htmlFor="fortBaseSave">Base Save</label>
                <input type="number" id="fortBaseSave" aria-describedby="fortitude" defaultValue={this.state.player.fortBaseSave || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="fortAbilityModifier">Ability Mod</label>
                <input type="number" id="fortAbilityModifier" aria-describedby="fortitude" value={this.state.player.conModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="fortMiscModifier">Misc Mod</label>
                <input type="number" id="fortMiscModifier" aria-describedby="fortitude" defaultValue={this.state.player.fortMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <div className="saving-reflex">
                  <span className="abbr" id="reflex">REFLEX</span>
                </div>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="reflTotal"><strong>Total</strong></label>
                <input type="number" id="reflTotal" aria-describedby="reflex" value={(parseInt(this.state.player.reflBaseSave, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.reflMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                =
              </div>
              <div className="is-flexed">
                <label htmlFor="reflBaseSave">Base Save</label>
                <input type="number" id="reflBaseSave" aria-describedby="reflex" defaultValue={this.state.player.reflBaseSave || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="reflAbilityModifier">Ability Mod</label>
                <input type="number" id="reflAbilityModifier" aria-describedby="reflex" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="reflMiscModifier">Misc Mod</label>
                <input type="number" id="reflMiscModifier" aria-describedby="reflex" defaultValue={this.state.player.reflMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-flexed">
                <div className="saving-will">
                  <span className="abbr" id="will">WILL</span>
                </div>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="willTotal"><strong>Total</strong></label>
                <input type="number" id="willTotal" aria-describedby="will" value={(parseInt(this.state.player.willBaseSave, 10) + parseInt(this.state.player.wisModifier, 10) + parseInt(this.state.player.willMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                =
              </div>
              <div className="is-flexed">
                <label htmlFor="willBaseSave">Base Save</label>
                <input type="number" id="willBaseSave" aria-describedby="will" defaultValue={this.state.player.willBaseSave || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="willAbilityModifier">Ability Mod</label>
                <input type="number" id="willAbilityModifier" aria-describedby="will" value={this.state.player.wisModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="willMiscModifier">Misc Mod</label>
                <input type="number" id="willMiscModifier" aria-describedby="will" defaultValue={this.state.player.willMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
          </section>

          <section id="attack-bonuses" tabIndex="-1">
            <h2>Attack Bonuses</h2>
            <div className="has-flex">
              <div className="is-flexed">
                <label htmlFor="baseAttackBonus"><strong>Base Attack Bonus (BAB)</strong></label>
                <input type="number" id="baseAttackBonus" defaultValue={this.state.player.baseAttackBonus || 0} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed is-fixed-width">
                <strong id="meleeAttack">Melee</strong>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="meleeAttackTotal"><strong>Total</strong></label>
                <input type="number" id="meleeAttackTotal" value={(parseInt(this.state.player.meleeBAB, 10) + parseInt(this.state.player.strModifier, 10) + parseInt(this.state.player.meleeMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                =
              </div>
              <div className="is-flexed">
                <label htmlFor="meleeBAB">BAB</label>
                <input type="number" id="meleeBAB" aria-label="Melee Base Attack Bonus" defaultValue={this.state.player.meleeBAB || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="meleeStrModifier">STR Mod</label>
                <input type="number" id="meleeStrModifier" aria-label="Melee Strength Modifier" value={this.state.player.strModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="meleeMiscModifier">Misc Mod</label>
                <input type="number" id="meleeMiscModifier" aria-label="Melee Miscellenous Modifier" defaultValue={this.state.player.meleeMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed is-fixed-width">
                <strong id="rangedAttack">Ranged</strong>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="rangedAttackTotal"><strong>Total</strong></label>
                <input type="number" id="rangedAttackTotal" value={(parseInt(this.state.player.rangedBAB, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.rangedMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                =
              </div>
              <div className="is-flexed">
                <label htmlFor="rangedBAB">BAB</label>
                <input type="number" id="rangedBAB" aria-label="Ranged Base Attack Bonus" defaultValue={this.state.player.rangedBAB || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="rangedStrModifier">DEX Mod</label>
                <input type="number" id="rangedStrModifier" aria-label="Ranged Strength Modifier" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="rangedMiscModifier">Misc Mod</label>
                <input type="number" id="rangedMiscModifier" aria-label="Ranged Miscellenous Modifier" defaultValue={this.state.player.rangedMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed is-fixed-width">
                <strong id="thrownAttack">Thrown</strong>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="thrownAttackTotal"><strong>Total</strong></label>
                <input type="number" id="thrownAttackTotal" value={(parseInt(this.state.player.thrownBAB, 10) + parseInt(this.state.player.strModifier, 10) + parseInt(this.state.player.thrownMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                =
              </div>
              <div className="is-flexed">
                <label htmlFor="thrownBAB">BAB</label>
                <input type="number" id="thrownBAB" aria-label="Thrown Base Attack Bonus" defaultValue={this.state.player.thrownBAB || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="thrownStrModifier">STR Mod</label>
                <input type="number" id="thrownStrModifier" aria-label="Thrown Strength Modifier" value={this.state.player.strModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                +
              </div>
              <div className="is-flexed">
                <label htmlFor="thrownMiscModifier">Misc Mod</label>
                <input type="number" id="thrownMiscModifier" aria-label="Thrown Miscellenous Modifier" defaultValue={this.state.player.thrownMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
          </section>

          <section id="skills" tabIndex="-1">
            <h2>Skills</h2>
            <div className="has-flex">
              <div className="is-flexed">
                <label htmlFor="skillRanksRemain">Remaining skill ranks</label>
                <input type="number" id="skillRanksRemain" defaultValue={this.state.player.skillRanksRemain} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillRanksPerLevel">Skill ranks per level</label>
                <input type="number" id="skillRanksPerLevel" defaultValue={this.state.player.skillRanksPerLevel} />
              </div>
            </div>
            <h3 className="sr-only">Class skills</h3>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" id="acrobatics" aria-labelledby="skillAcrobatics" defaultChecked={this.state.player.acrobatics ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillAcrobatics">Acrobatics (DEX)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillAcrobaticsTotal">Total</label>
                <input type="number" id="skillAcrobaticsTotal" aria-describedby="skillAcrobatics" value={(parseInt(this.state.player.skillAcrobaticsClassBonus, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.skillAcrobaticsBonusPen, 10) + parseInt(this.state.player.skillAcrobaticsMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAcrobaticsRank">Ranks</label>
                <input type="number" id="skillAcrobaticsRank" aria-describedby="skillAcrobatics" defaultValue={this.state.player.skillAcrobaticsRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAcrobaticsClassBonus">Class Bonus</label>
                <input type="number" id="skillAcrobaticsClassBonus" aria-describedby="skillAcrobatics" defaultValue={this.state.player.skillAcrobaticsClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAcrobaticsAbilityModifier">Ability Mod</label>
                <input type="number" id="skillAcrobaticsAbilityModifier" aria-describedby="skillAcrobatics" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAcrobaticsBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillAcrobaticsBonusPen" aria-describedby="skillAcrobatics" defaultValue={this.state.player.skillAcrobaticsBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAcrobaticsMiscModifier">Misc Mod</label>
                <input type="number" id="skillAcrobaticsMiscModifier" aria-describedby="skillAcrobatics" defaultValue={this.state.player.skillAcrobaticsMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" id="athletics" aria-labelledby="skillAthletics" defaultChecked={this.state.player.athletics ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillAthletics">Athletics (STR)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillAthleticsTotal">Total</label>
                <input type="number" id="skillAthleticsTotal" aria-describedby="skillAthletics" value={(parseInt(this.state.player.skillAthleticsClassBonus, 10) + parseInt(this.state.player.strModifier, 10) + parseInt(this.state.player.skillAthleticsBonusPen, 10) + parseInt(this.state.player.skillAthleticsMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAthleticsRank">Ranks</label>
                <input type="number" id="skillAthleticsRank" aria-describedby="skillAthletics" defaultValue={this.state.player.skillAthleticsRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAthleticsClassBonus">Class Bonus</label>
                <input type="number" id="skillAthleticsClassBonus" aria-describedby="skillAthletics" defaultValue={this.state.player.skillAthleticsClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAthleticsAbilityModifier">Ability Mod</label>
                <input type="number" id="skillAthleticsAbilityModifier" aria-describedby="skillAthletics" value={this.state.player.strModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAthleticsBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillAthleticsBonusPen" aria-describedby="skillAthletics" defaultValue={this.state.player.skillAthleticsBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillAthleticsMiscModifier">Misc Mod</label>
                <input type="number" id="skillAthleticsMiscModifier" aria-describedby="skillAthletics" defaultValue={this.state.player.skillAthleticsMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" id="bluff" aria-labelledby="skillBluff" defaultChecked={this.state.player.bluff ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillBluff">Bluff (CHA)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillBluffTotal">Total</label>
                <input type="number" id="skillBluffTotal" aria-describedby="skillBluff" value={(parseInt(this.state.player.skillBluffClassBonus, 10) + parseInt(this.state.player.chaModifier, 10) + parseInt(this.state.player.skillBluffBonusPen, 10) + parseInt(this.state.player.skillBluffMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillBluffRank">Ranks</label>
                <input type="number" id="skillBluffRank" aria-describedby="skillBluff" defaultValue={this.state.player.skillBluffRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillBluffClassBonus">Class Bonus</label>
                <input type="number" id="skillBluffClassBonus" aria-describedby="skillBluff" defaultValue={this.state.player.skillBluffClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillBluffAbilityModifier">Ability Mod</label>
                <input type="number" id="skillBluffAbilityModifier" aria-describedby="skillBluff" value={this.state.player.chaModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillBluffBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillBluffBonusPen" aria-describedby="skillBluff" defaultValue={this.state.player.skillBluffBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillBluffMiscModifier">Misc Mod</label>
                <input type="number" id="skillBluffMiscModifier" aria-describedby="skillBluff" defaultValue={this.state.player.skillBluffMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillComputers" id="computers" defaultChecked={this.state.player.computers ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillComputers">Computers (INT)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillComputersTotal">Total</label>
                <input type="number" id="skillComputersTotal" aria-describedby="skillComputers" value={(parseInt(this.state.player.skillComputersClassBonus, 10) + parseInt(this.state.player.intModifier, 10) + parseInt(this.state.player.skillComputersBonusPen, 10) + parseInt(this.state.player.skillComputersMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillComputersRank">Ranks</label>
                <input type="number" id="skillComputersRank" aria-describedby="skillComputers" defaultValue={this.state.player.skillComputersRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillComputersClassBonus">Class Bonus</label>
                <input type="number" id="skillComputersClassBonus" aria-describedby="skillComputers" defaultValue={this.state.player.skillComputersClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillComputersAbilityModifier">Ability Mod</label>
                <input type="number" id="skillComputersAbilityModifier" aria-describedby="skillComputers" value={this.state.player.intModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillComputersBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillComputersBonusPen" aria-describedby="skillComputers" defaultValue={this.state.player.skillComputersBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillComputersMiscModifier">Misc Mod</label>
                <input type="number" id="skillComputersMiscModifier" aria-describedby="skillComputers" defaultValue={this.state.player.skillComputersMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillCulture" id="culture" defaultChecked={this.state.player.culture ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillCulture">Culture (INT)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillCultureTotal">Total</label>
                <input type="number" id="skillCultureTotal" aria-describedby="skillCulture" value={(parseInt(this.state.player.skillCultureClassBonus, 10) + parseInt(this.state.player.intModifier, 10) + parseInt(this.state.player.skillCultureBonusPen, 10) + parseInt(this.state.player.skillCultureMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillCultureRank">Ranks</label>
                <input type="number" id="skillCultureRank" aria-describedby="skillCulture" defaultValue={this.state.player.skillCultureRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillCultureClassBonus">Class Bonus</label>
                <input type="number" id="skillCultureClassBonus" aria-describedby="skillCulture" defaultValue={this.state.player.skillCultureClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillCultureAbilityModifier">Ability Mod</label>
                <input type="number" id="skillCultureAbilityModifier" aria-describedby="skillCulture" value={this.state.player.intModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillCultureBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillCultureBonusPen" aria-describedby="skillCulture" defaultValue={this.state.player.skillCultureBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillCultureMiscModifier">Misc Mod</label>
                <input type="number" id="skillCultureMiscModifier" aria-describedby="skillCulture" defaultValue={this.state.player.skillCultureMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillDiplomacy" id="diplomacy" defaultChecked={this.state.player.diplomacy ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillDiplomacy">Diplomacy (CHA)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillDiplomacyTotal">Total</label>
                <input type="number" id="skillDiplomacyTotal" aria-describedby="skillDiplomacy" value={(parseInt(this.state.player.skillDiplomacyClassBonus, 10) + parseInt(this.state.player.chaModifier, 10) + parseInt(this.state.player.skillDiplomacyBonusPen, 10) + parseInt(this.state.player.skillDiplomacyMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDiplomacyRank">Ranks</label>
                <input type="number" id="skillDiplomacyRank" aria-describedby="skillDiplomacy" defaultValue={this.state.player.skillDiplomacyRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDiplomacyClassBonus">Class Bonus</label>
                <input type="number" id="skillDiplomacyClassBonus" aria-describedby="skillDiplomacy" defaultValue={this.state.player.skillDiplomacyClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDiplomacyAbilityModifier">Ability Mod</label>
                <input type="number" id="skillDiplomacyAbilityModifier" aria-describedby="skillDiplomacy" value={this.state.player.chaModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDiplomacyBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillDiplomacyBonusPen" aria-describedby="skillDiplomacy" defaultValue={this.state.player.skillDiplomacyBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDiplomacyMiscModifier">Misc Mod</label>
                <input type="number" id="skillDiplomacyMiscModifier" aria-describedby="skillDiplomacy" defaultValue={this.state.player.skillDiplomacyMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillDisguise" id="disguise" defaultChecked={this.state.player.disguise ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillDisguise">Disguise (CHA)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillDisguiseTotal">Total</label>
                <input type="number" id="skillDisguiseTotal" aria-describedby="skillDisguise" value={(parseInt(this.state.player.skillDisguiseClassBonus, 10) + parseInt(this.state.player.chaModifier, 10) + parseInt(this.state.player.skillDisguiseBonusPen, 10) + parseInt(this.state.player.skillDisguiseMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDisguiseRank">Ranks</label>
                <input type="number" id="skillDisguiseRank" aria-describedby="skillDisguise" defaultValue={this.state.player.skillDisguiseRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDisguiseClassBonus">Class Bonus</label>
                <input type="number" id="skillDisguiseClassBonus" aria-describedby="skillDisguise" defaultValue={this.state.player.skillDisguiseClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDisguiseAbilityModifier">Ability Mod</label>
                <input type="number" id="skillDisguiseAbilityModifier" aria-describedby="skillDisguise" value={this.state.player.chaModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDisguiseBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillDisguiseBonusPen" aria-describedby="skillDisguise" defaultValue={this.state.player.skillDisguiseBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillDisguiseMiscModifier">Misc Mod</label>
                <input type="number" id="skillDisguiseMiscModifier" aria-describedby="skillDisguise" defaultValue={this.state.player.skillDisguiseMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillEngineering" id="engineering" defaultChecked={this.state.player.engineering ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillEngineering">Engineering (INT)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillEngineeringTotal">Total</label>
                <input type="number" id="skillEngineeringTotal" aria-describedby="skillEngineering" value={(parseInt(this.state.player.skillEngineeringClassBonus, 10) + parseInt(this.state.player.intModifier, 10) + parseInt(this.state.player.skillEngineeringBonusPen, 10) + parseInt(this.state.player.skillEngineeringMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillEngineeringRank">Ranks</label>
                <input type="number" id="skillEngineeringRank" aria-describedby="skillEngineering" defaultValue={this.state.player.skillEngineeringRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillEngineeringClassBonus">Class Bonus</label>
                <input type="number" id="skillEngineeringClassBonus" aria-describedby="skillEngineering" defaultValue={this.state.player.skillEngineeringClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillEngineeringAbilityModifier">Ability Mod</label>
                <input type="number" id="skillEngineeringAbilityModifier" aria-describedby="skillEngineering" value={this.state.player.intModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillEngineeringBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillEngineeringBonusPen" aria-describedby="skillEngineering" defaultValue={this.state.player.skillEngineeringBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillEngineeringMiscModifier">Misc Mod</label>
                <input type="number" id="skillEngineeringMiscModifier" aria-describedby="skillEngineering" defaultValue={this.state.player.skillEngineeringMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillIntimidate" id="intimidate" defaultChecked={this.state.player.intimidate ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillIntimidate">Intimidate (CHA)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillIntimidateTotal">Total</label>
                <input type="number" id="skillIntimidateTotal" aria-describedby="skillIntimidate" value={(parseInt(this.state.player.skillIntimidateClassBonus, 10) + parseInt(this.state.player.chaModifier, 10) + parseInt(this.state.player.skillIntimidateBonusPen, 10) + parseInt(this.state.player.skillIntimidateMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillIntimidateRank">Ranks</label>
                <input type="number" id="skillIntimidateRank" aria-describedby="skillIntimidate" defaultValue={this.state.player.skillIntimidateRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillIntimidateClassBonus">Class Bonus</label>
                <input type="number" id="skillIntimidateClassBonus" aria-describedby="skillIntimidate" defaultValue={this.state.player.skillIntimidateClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillIntimidateAbilityModifier">Ability Mod</label>
                <input type="number" id="skillIntimidateAbilityModifier" aria-describedby="skillIntimidate" value={this.state.player.chaModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillIntimidateBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillIntimidateBonusPen" aria-describedby="skillIntimidate" defaultValue={this.state.player.skillIntimidateBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillIntimidateMiscModifier">Misc Mod</label>
                <input type="number" id="skillIntimidateMiscModifier" aria-describedby="skillIntimidate" defaultValue={this.state.player.skillIntimidateMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillLifeScience" id="lifeScience" defaultChecked={this.state.player.lifeScience ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillLifeScience">Life Science (INT)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillLifeScienceTotal">Total</label>
                <input type="number" id="skillLifeScienceTotal" aria-describedby="skillLifeScience" value={(parseInt(this.state.player.skillLifeScienceClassBonus, 10) + parseInt(this.state.player.intModifier, 10) + parseInt(this.state.player.skillLifeScienceBonusPen, 10) + parseInt(this.state.player.skillLifeScienceMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillLifeScienceRank">Ranks</label>
                <input type="number" id="skillLifeScienceRank" aria-describedby="skillLifeScience" defaultValue={this.state.player.skillLifeScienceRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillLifeScienceClassBonus">Class Bonus</label>
                <input type="number" id="skillLifeScienceClassBonus" aria-describedby="skillLifeScience" defaultValue={this.state.player.skillLifeScienceClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillLifeScienceAbilityModifier">Ability Mod</label>
                <input type="number" id="skillLifeScienceAbilityModifier" aria-describedby="skillLifeScience" value={this.state.player.intModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillLifeScienceBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillLifeScienceBonusPen" aria-describedby="skillLifeScience" defaultValue={this.state.player.skillLifeScienceBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillLifeScienceMiscModifier">Misc Mod</label>
                <input type="number" id="skillLifeScienceMiscModifier" aria-describedby="skillLifeScience" defaultValue={this.state.player.skillLifeScienceMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillMedicine" id="medicine" defaultChecked={this.state.player.medicine ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillMedicine">Medicine (INT)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillMedicineTotal">Total</label>
                <input type="number" id="skillMedicineTotal" aria-describedby="skillMedicine" value={(parseInt(this.state.player.skillMedicineClassBonus, 10) + parseInt(this.state.player.intModifier, 10) + parseInt(this.state.player.skillMedicineBonusPen, 10) + parseInt(this.state.player.skillMedicineMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMedicineRank">Ranks</label>
                <input type="number" id="skillMedicineRank" aria-describedby="skillMedicine" defaultValue={this.state.player.skillMedicineRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMedicineClassBonus">Class Bonus</label>
                <input type="number" id="skillMedicineClassBonus" aria-describedby="skillMedicine" defaultValue={this.state.player.skillMedicineClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMedicineAbilityModifier">Ability Mod</label>
                <input type="number" id="skillMedicineAbilityModifier" aria-describedby="skillMedicine" value={this.state.player.intModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMedicineBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillMedicineBonusPen" aria-describedby="skillMedicine" defaultValue={this.state.player.skillMedicineBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMedicineMiscModifier">Misc Mod</label>
                <input type="number" id="skillMedicineMiscModifier" aria-describedby="skillMedicine" defaultValue={this.state.player.skillMedicineMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillMysticism" id="mysticism" defaultChecked={this.state.player.mysticism ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillMysticism">Mysticism (WIS)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillMysticismTotal">Total</label>
                <input type="number" id="skillMysticismTotal" aria-describedby="skillMysticism" value={(parseInt(this.state.player.skillMysticismClassBonus, 10) + parseInt(this.state.player.wisModifier, 10) + parseInt(this.state.player.skillMysticismBonusPen, 10) + parseInt(this.state.player.skillMysticismMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMysticismRank">Ranks</label>
                <input type="number" id="skillMysticismRank" aria-describedby="skillMysticism" defaultValue={this.state.player.skillMysticismRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMysticismClassBonus">Class Bonus</label>
                <input type="number" id="skillMysticismClassBonus" aria-describedby="skillMysticism" defaultValue={this.state.player.skillMysticismClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMysticismAbilityModifier">Ability Mod</label>
                <input type="number" id="skillMysticismAbilityModifier" aria-describedby="skillMysticism" value={this.state.player.wisModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMysticismBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillMysticismBonusPen" aria-describedby="skillMysticism" defaultValue={this.state.player.skillMysticismBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillMysticismMiscModifier">Misc Mod</label>
                <input type="number" id="skillMysticismMiscModifier" aria-describedby="skillMysticism" defaultValue={this.state.player.skillMysticismMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillPerception" id="perception" defaultChecked={this.state.player.perception ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillPerception">Perception (WIS)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillPerceptionTotal">Total</label>
                <input type="number" id="skillPerceptionTotal" aria-describedby="skillPerception" value={(parseInt(this.state.player.skillPerceptionClassBonus, 10) + parseInt(this.state.player.wisModifier, 10) + parseInt(this.state.player.skillPerceptionBonusPen, 10) + parseInt(this.state.player.skillPerceptionMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPerceptionRank">Ranks</label>
                <input type="number" id="skillPerceptionRank" aria-describedby="skillPerception" defaultValue={this.state.player.skillPerceptionRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPerceptionClassBonus">Class Bonus</label>
                <input type="number" id="skillPerceptionClassBonus" aria-describedby="skillPerception" defaultValue={this.state.player.skillPerceptionClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPerceptionAbilityModifier">Ability Mod</label>
                <input type="number" id="skillPerceptionAbilityModifier" aria-describedby="skillPerception" value={this.state.player.wisModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPerceptionBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillPerceptionBonusPen" aria-describedby="skillPerception" defaultValue={this.state.player.skillPerceptionBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPerceptionMiscModifier">Misc Mod</label>
                <input type="number" id="skillPerceptionMiscModifier" aria-describedby="skillPerception" defaultValue={this.state.player.skillPerceptionMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillPhysicalScience" id="physicalScience" defaultChecked={this.state.player.physicalScience ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillPhysicalScience">Physical Science (INT)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillPhysicalScienceTotal">Total</label>
                <input type="number" id="skillPhysicalScienceTotal" aria-describedby="skillPhysicalScience" value={(parseInt(this.state.player.skillPhysicalScienceClassBonus, 10) + parseInt(this.state.player.intModifier, 10) + parseInt(this.state.player.skillPhysicalScienceBonusPen, 10) + parseInt(this.state.player.skillPhysicalScienceMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPhysicalScienceRank">Ranks</label>
                <input type="number" id="skillPhysicalScienceRank" aria-describedby="skillPhysicalScience" defaultValue={this.state.player.skillPhysicalScienceRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPhysicalScienceClassBonus">Class Bonus</label>
                <input type="number" id="skillPhysicalScienceClassBonus" aria-describedby="skillPhysicalScience" defaultValue={this.state.player.skillPhysicalScienceClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPhysicalScienceAbilityModifier">Ability Mod</label>
                <input type="number" id="skillPhysicalScienceAbilityModifier" aria-describedby="skillPhysicalScience" value={this.state.player.intModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPhysicalScienceBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillPhysicalScienceBonusPen" aria-describedby="skillPhysicalScience" defaultValue={this.state.player.skillPhysicalScienceBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPhysicalScienceMiscModifier">Misc Mod</label>
                <input type="number" id="skillPhysicalScienceMiscModifier" aria-describedby="skillPhysicalScience" defaultValue={this.state.player.skillPhysicalScienceMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillPiloting" id="piloting" defaultChecked={this.state.player.piloting ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillPiloting">Piloting (DEX)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillPilotingTotal">Total</label>
                <input type="number" id="skillPilotingTotal" aria-describedby="skillPiloting" value={(parseInt(this.state.player.skillPilotingClassBonus, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.skillPilotingBonusPen, 10) + parseInt(this.state.player.skillPilotingMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPilotingRank">Ranks</label>
                <input type="number" id="skillPilotingRank" aria-describedby="skillPiloting" defaultValue={this.state.player.skillPilotingRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPilotingClassBonus">Class Bonus</label>
                <input type="number" id="skillPilotingClassBonus" aria-describedby="skillPiloting" defaultValue={this.state.player.skillPilotingClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPilotingAbilityModifier">Ability Mod</label>
                <input type="number" id="skillPilotingAbilityModifier" aria-describedby="skillPiloting" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPilotingBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillPilotingBonusPen" aria-describedby="skillPiloting" defaultValue={this.state.player.skillPilotingBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillPilotingMiscModifier">Misc Mod</label>
                <input type="number" id="skillPilotingMiscModifier" aria-describedby="skillPiloting" defaultValue={this.state.player.skillPilotingMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillSenseMotive" id="senseMotive" defaultChecked={this.state.player.senseMotive ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillSenseMotive">Sense Motive (WIS)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillSenseMotiveTotal">Total</label>
                <input type="number" id="skillSenseMotiveTotal" aria-describedby="skillSenseMotive" value={(parseInt(this.state.player.skillSenseMotiveClassBonus, 10) + parseInt(this.state.player.wisModifier, 10) + parseInt(this.state.player.skillSenseMotiveBonusPen, 10) + parseInt(this.state.player.skillSenseMotiveMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSenseMotiveRank">Ranks</label>
                <input type="number" id="skillSenseMotiveRank" aria-describedby="skillSenseMotive" defaultValue={this.state.player.skillSenseMotiveRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSenseMotiveClassBonus">Class Bonus</label>
                <input type="number" id="skillSenseMotiveClassBonus" aria-describedby="skillSenseMotive" defaultValue={this.state.player.skillSenseMotiveClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSenseMotiveAbilityModifier">Ability Mod</label>
                <input type="number" id="skillSenseMotiveAbilityModifier" aria-describedby="skillSenseMotive" value={this.state.player.wisModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSenseMotiveBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillSenseMotiveBonusPen" aria-describedby="skillSenseMotive" defaultValue={this.state.player.skillSenseMotiveBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSenseMotiveMiscModifier">Misc Mod</label>
                <input type="number" id="skillSenseMotiveMiscModifier" aria-describedby="skillSenseMotive" defaultValue={this.state.player.skillSenseMotiveMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillSleightOfHand" id="sleightOfHand" defaultChecked={this.state.player.sleightOfHand ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillSleightOfHand">Sleight Of Hand (DEX)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillSleightOfHandTotal">Total</label>
                <input type="number" id="skillSleightOfHandTotal" aria-describedby="skillSleightOfHand" value={(parseInt(this.state.player.skillSleightOfHandClassBonus, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.skillSleightOfHandBonusPen, 10) + parseInt(this.state.player.skillSleightOfHandMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSleightOfHandRank">Ranks</label>
                <input type="number" id="skillSleightOfHandRank" aria-describedby="skillSleightOfHand" defaultValue={this.state.player.skillSleightOfHandRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSleightOfHandClassBonus">Class Bonus</label>
                <input type="number" id="skillSleightOfHandClassBonus" aria-describedby="skillSleightOfHand" defaultValue={this.state.player.skillSleightOfHandClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSleightOfHandAbilityModifier">Ability Mod</label>
                <input type="number" id="skillSleightOfHandAbilityModifier" aria-describedby="skillSleightOfHand" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSleightOfHandBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillSleightOfHandBonusPen" aria-describedby="skillSleightOfHand" defaultValue={this.state.player.skillSleightOfHandBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSleightOfHandMiscModifier">Misc Mod</label>
                <input type="number" id="skillSleightOfHandMiscModifier" aria-describedby="skillSleightOfHand" defaultValue={this.state.player.skillSleightOfHandMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillStealth" id="stealth" defaultChecked={this.state.player.stealth ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillStealth">Stealth (DEX)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillStealthTotal">Total</label>
                <input type="number" id="skillStealthTotal" aria-describedby="skillStealth" value={(parseInt(this.state.player.skillStealthClassBonus, 10) + parseInt(this.state.player.dexModifier, 10) + parseInt(this.state.player.skillStealthBonusPen, 10) + parseInt(this.state.player.skillStealthMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillStealthRank">Ranks</label>
                <input type="number" id="skillStealthRank" aria-describedby="skillStealth" defaultValue={this.state.player.skillStealthRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillStealthClassBonus">Class Bonus</label>
                <input type="number" id="skillStealthClassBonus" aria-describedby="skillStealth" defaultValue={this.state.player.skillStealthClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillStealthAbilityModifier">Ability Mod</label>
                <input type="number" id="skillStealthAbilityModifier" aria-describedby="skillStealth" value={this.state.player.dexModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillStealthBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillStealthBonusPen" aria-describedby="skillStealth" defaultValue={this.state.player.skillStealthBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillStealthMiscModifier">Misc Mod</label>
                <input type="number" id="skillStealthMiscModifier" aria-describedby="skillStealth" defaultValue={this.state.player.skillStealthMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
            <div className="has-flex">
              <div className="is-not-flexed">
                <input type="checkbox" name="classSkills" aria-labelledby="skillSurvival" id="survival" defaultChecked={this.state.player.survival ? true : false} />
              </div>
              <div className="is-flexed">
                <span id="skillSurvival">Survival (WIS)</span>
              </div>
              <div className="is-flexed is-important">
                <label htmlFor="skillSurvivalTotal">Total</label>
                <input type="number" id="skillSurvivalTotal" aria-describedby="skillSurvival" value={(parseInt(this.state.player.skillSurvivalClassBonus, 10) + parseInt(this.state.player.wisModifier, 10) + parseInt(this.state.player.skillSurvivalBonusPen, 10) + parseInt(this.state.player.skillSurvivalMiscModifier, 10)) || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSurvivalRank">Ranks</label>
                <input type="number" id="skillSurvivalRank" aria-describedby="skillSurvival" defaultValue={this.state.player.skillSurvivalRank || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSurvivalClassBonus">Class Bonus</label>
                <input type="number" id="skillSurvivalClassBonus" aria-describedby="skillSurvival" defaultValue={this.state.player.skillSurvivalClassBonus || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSurvivalAbilityModifier">Ability Mod</label>
                <input type="number" id="skillSurvivalAbilityModifier" aria-describedby="skillSurvival" value={this.state.player.wisModifier || 0} readOnly />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSurvivalBonusPen">Bonuses/Penalties</label>
                <input type="number" id="skillSurvivalBonusPen" aria-describedby="skillSurvival" defaultValue={this.state.player.skillSurvivalBonusPen || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
              <div className="is-flexed">
                <label htmlFor="skillSurvivalMiscModifier">Misc Mod</label>
                <input type="number" id="skillSurvivalMiscModifier" aria-describedby="skillSurvival" defaultValue={this.state.player.skillSurvivalMiscModifier || 0} onBlur={event => this.updateAllStats(event)} />
              </div>
            </div>
          </section>

          <div className="notes">
            <label htmlFor="notes">Player notes</label>
            <textarea id="notes" defaultValue={this.state.player.notes}></textarea>
          </div>

          <div className="controls">
            <button onClick={event => this.updatePlayer(event)}>Update player details</button>
          </div>
        </form>
      </div>
    );
  };
};

export default Sheet;