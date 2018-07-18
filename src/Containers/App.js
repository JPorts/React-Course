// Import statements to import other source files and other dependencies // 
import React, { Component } from 'react';
import './App.css';
import Person from '../Components/Persons/Person/Person';


// App Class with components within//
// First React Course // 
// Jordan Porter 2018 // 

class App extends Component {
  

  // Declare states // 
  state = {

    persons: 
    [
      {id: '123ABC', name: 'Jordan', age: '24'},
      {id: '456DEF', name: 'Craig', age:'40'},
      {id: '123ABC3', name: 'Deen', age: '16'},
      {id: '456DEF3', name: 'Hayden', age:'15'}
    ],
    otherstate: 'some other state',
    showPersons: false
  }


    // Handles the name change of some Person items //
  nameChangedHandler = (event, id) => {
    // Find person Index
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    // Create person object by using spread operator on the persons array//
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

      this.setState( {persons: persons} )
    }


    // Delete Person // 
  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      // Always update state in an immutablefashion by copying the state 
      const persons =[...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons:persons});
    }


    // Toggle Displaying Persons //
  togglePersonsHandler = () => {

      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow })

    }


  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      
      persons = (
        <div>
          {this.state.persons.map((person, index) => {

            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key= {person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)}/>

          })}
      </div>
      );
      style.backgroundColor = 'red';
    }

    let classes =[];

    if(this.state.persons.length <=2) {
      classes.push('red'); //Classes = ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); //Classes = ['red','bold']
    }




    return (
      
       <div className="App">

           <h1>Hi, I'm a React App</h1>
           <p className={classes.join(' ')}>This is really working !</p>
           <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

           {persons}

       </div>

    );
  }
  
}

export default App;
