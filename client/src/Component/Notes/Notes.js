import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GetAllNotes, DeleteNote } from "../../Services/NotesService.js"
import WelcomeHeader from './_WelcomeHeader.js';
import NotesSidebar from './_NotesSidebar.js';
import NotesContainer from './_NotesContainer.js';

class Notes extends Component {
  state = {
    Notes: []
  };
  componentDidMount() {
    GetAllNotes().then(res => {
      if (res.status === 200) {
        this.setState({
          Notes: res.data
        })
      }
    })
  }
  DeleteNote = NoteID => {
    DeleteNote(NoteID).then(res => {
      if (res.status === 200) {
        GetAllNotes().then(res => {
          if (res.status === 200) {
            this.setState({
              Notes: res.data
            });
          }
        });
      }
    });
  };
  render() {
    const { LoggedIn, Logout } = this.props;
    return (
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <WelcomeHeader LoggedIn={LoggedIn} Logout={Logout} />
              <div className="card-body">
                <div className="row">

                  <Router>
                    <Switch>
                      <Route path={["/:NoteID", "/"]} exact={true}>
                        <NotesSidebar
                          Notes={this.state.Notes}
                          LoggedIn={LoggedIn}

                        />
                        <NotesContainer
                          Notes={this.state.Notes}
                          DelNote={this.DeleteNote}
                          LoggedIn={LoggedIn}
                        />
                      </Route>
                    </Switch>
                  </Router>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Notes;
