import React from 'react';

class UserForm extends React.Component {

  render() {
      return (
        <form id="user-form">
          <div className="row">
            <div className="column">
                <label>Name:</label>
                <input
                  placeholder="Name"
                  name="name"
                  onChange={ e => this.props.handleChange(e) }/>
            </div>
            <div className="column">
              <label>Age:</label>
              <input
              placeholder="Age"
              type="number"
              name="age"
              onChange={e => this.props.handleChange(e) }/>
            </div>
          </div>
          <div className="row" id="next">
            <button onClick={ e => this.props.nextForm(e) }>NEXT</button>
          </div>
        </form>
      )
    }
}

export default UserForm;
