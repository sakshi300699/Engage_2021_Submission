import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import Navbar from './components/Navbar';
import Form from './components/Form';
import NotesList from './components/NotesList';


class App extends Component {


  constructor() {
    super();
  
    this.state = {
      notes: []
    }
  
    // this.handleEvent = this.handleEvent.bind(this)
  }
  

  componentDidMount () {
    this.db = firebase.database();

    this.listenToChange();
  }

  listenToChange () {
    this.db.ref('notes').on('child_added', snapshot => {

      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note
      }

      let notes = this.state.notes;
      notes.push(note);

      this.setState({
        notes: notes
      });
    });

    this.db.ref('notes').on('child_removed', snapshot => {
      let notes = this.state.notes;
      notes = notes.filter(note => note.id !== snapshot.key);

      this.setState({
        notes: notes
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Form />
          <NotesList notes={this.state.notes}/>
        </main>
      </div>
    );
  }
}

export default App;
