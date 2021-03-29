import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.jsx';
import {SearchField} from './components/search-field/search-field.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({searchField:e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monsters=>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return ( <
      div className = "App" >
      <h1>Monsters Rolodex</h1>
      <SearchField
        placeholder = "search monster"
        handleChange = {this.handleChange}
      />
      <CardList monsters={filteredMonster}/> 
        </div>
      );
    }
  }

  export default App;