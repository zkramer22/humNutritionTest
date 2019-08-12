import React from 'react';

class UserForm extends React.Component {
  
  render() {
      return (
      <div>
        <form className="user-form">
          <label>Name:</label>
          <input
            placeholder="Name"
            name="name"
            onChange={ e => this.props.handleChange(e) }/>

          <label>Age:</label>
          <input
            placeholder="Age"
            type="number"
            name="age"
            onChange={e => this.props.handleChange(e) }/>

          <button onClick={ e => this.props.nextForm(e) }>NEXT</button>
        </form>
      </div>
    )
  }

}

export default UserForm;
