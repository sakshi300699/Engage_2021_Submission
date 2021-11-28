import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export class Form extends Component {
    constructor () {
        super();
        this.state = {
            note: '',
            title: '',
          
        }
    
        this.createNote = this.createNote.bind(this);
      }

      createNote () {
        if (this.state.title !== '' && this.state.note !== '') {
            //the information is being to the database
          firebase.database().ref('notes').push({
            note: this.state.note,
            title: this.state.title,
            
          })
        }
      }

      onChangeHandler (e, key) {
        this.setState({
          [key]: e.target.value
        });
      }
    
      

    render() {
        return (
            <section className="form">
                <h3>Create A Note</h3>
                    <div className="form-group">
                    <label htmlFor="noteform-title">Title of Note</label>
                     <input type="text" onChange={(e) => this.onChangeHandler(e, 'title')} id="noteform-title" name="noteform-title" value={this.state.title}/>
                     </div>
                    <div className="form-group">
                    <label htmlFor="noteform-note">Note Description</label>
                     <textarea onChange={(e) => this.onChangeHandler(e, 'note')} name="noteform-note" id="noteform-note" value={this.state.note}></textarea>
                    </div>
                <button onClick={this.createNote}>Create A Note</button>
            </section>
        )
    }
}

export default Form;
