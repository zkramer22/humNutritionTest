import React from 'react';
import FriendList from './FriendList';

class FriendForm extends React.Component {

  render() {
    const { friend, friends, addFriend,
      deleteFriend, handleChange, handleSubmit } = this.props;

    return (
      <form id="friend-form" className="hidden">
        <div className="row">
          <div className="column">
            <label>Friend Name:</label>
          </div>
        </div>

        <div className="row">
            <input className="zero-margin"
              placeholder="friend"
              name="friend"
              value={ friend }
              onChange={ e => handleChange(e) } />

            <button className="zero-margin"
              onClick={ e => addFriend(e) } >+</button>
        </div>

        <FriendList friends={ friends } deleteFriend={ deleteFriend }/>

        <div className="row">
          <button onClick={ e => handleSubmit(e) }>SUBMIT</button>
        </div>
      </form>
    )
  }


}

export default FriendForm;
