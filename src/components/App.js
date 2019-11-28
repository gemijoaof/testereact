import React, { useState } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

const users = [
  {
    name: 'joao freitas',
    email: 'gemijoao@gmail.com'
  },
  {
    name: 'tiago freitas',
    email: 'gemitiago@gmail.com'
  }
];

function App() {
  const [robots, setRobots] = useState(users);

  const SearchChange = event => {
    const filterRobot = event.target.value;
    setRobots(() => users.filter(robot => robot.name.includes(filterRobot)));
  };

  return (
    <div className="App">
      <header className="stickyHeader">
        <h1>ROBOFRIENDS</h1>
        <SearchBox onSearchChange={SearchChange} />
        <hr />
      </header>
      <CardList listRobots={robots} />
    </div>
  );
}

export default App;
