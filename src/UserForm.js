import React from 'react';

class UserForm extends React.Component {

  render() {
    const { handleChange, name, age, nextForm } = this.props;

    return (
      <form id="user-form">
        <div className="row">
          <div className="column">
            <label>Name:</label>
            <input
              placeholder="Name"
              name="name"
              value={ name }
              onChange={ e => handleChange(e) }/>
          </div>

          <div className="column">
            <label>Age:</label>
            <input
              placeholder="Age"
              type="number"
              name="age"
              value={ age }
              onChange={e => handleChange(e) }/>
          </div>
        </div>

        <div className="row" id="next">
          <button onClick={ e => nextForm(e) }>NEXT</button>
        </div>
      </form>
    )
  }
}

export default UserForm;
