import React from 'react';
import FriendList from './FriendList';

class FriendForm extends React.Component {

  render() {
    const { friends, deleteFriend, handleSubmit } = this.props;

    return (
      <form className="friend-form">
        <label>Friend Name:</label>
        <input
        placeholder="friend"
        name="friend"
        value={ this.props.friend }
        onChange={ e => this.props.handleChange(e) } />

        <button onClick={ e => this.props.addFriend(e) } >+</button>

        <FriendList friends={ friends } deleteFriend={ deleteFriend }/>

        <button onClick={ handleSubmit }>SUBMIT</button>
      </form>
    )
  }


}

export default FriendForm;
