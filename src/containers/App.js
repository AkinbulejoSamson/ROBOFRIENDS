import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })})
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length 
      ?  (<h1 className='tc f1'>LOADING</h1>)
      :  (
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBar searchChange={this.onSearchChange} />
              <Scroll>
                <CardList robots={filteredRobots}/>
              </Scroll>
            </div>
          )
  }
}

export default App;
