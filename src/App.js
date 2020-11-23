import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Matt', age: 33},
      {name: 'John', age: 38},
      {name: 'Julia', age: 27}
    ]
  })

  const [otherState, setOtherState] = useState('some other state value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 33},
        {name: 'John', age: 38},
        {name: 'Julia', age: 28}
      ]
    })
  }
  
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler} >Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default App;





