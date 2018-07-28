// Import statements to import other source files and other dependencies // 
import React, { Component } from 'react';
import classes from './App.css';
//import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'
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

    let persons = null;

    if(this.state.showPersons){    
      persons =  
           <Persons persons = {this.state.persons}
            clicked = {this.deletePersonHandler} 
            changed = {this.nameChangedHandler} />
   }

  
    return (
      
       <div className={classes.App}>
            <Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler} />
           {persons}
       </div>

    );
  }
  
}

export default App;
