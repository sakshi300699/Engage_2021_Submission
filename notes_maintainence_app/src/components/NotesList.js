import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export class NotesList extends Component {


    constructor (props) {
        super(props);
      }
    
      deleteNote (id) {
        firebase.database().ref('notes').child(id).remove();
      }
    render() {
        return (
            <section className="notes-wrapper">
             <h3>Notes</h3>
        <div className="notes">
          {this.props.notes.map(note => (
            <div className="note" key={note.id}>
              <div className="note-title">
                <h3>{note.title}</h3>
                <div className="remove" onClick={() => this.deleteNote(note.id)}>x</div>
              </div>
              <div className="note-content">
                <p>{note.note}</p>
              </div>
            </div>
          ))}
        </div>   
            </section>
        )
    }
}

export default NotesList
