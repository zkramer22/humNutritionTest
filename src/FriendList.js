import React from 'react';

class FriendList extends React.Component {

  render() {
    const { friends, deleteFriend } = this.props;

    return (
      <ul id="friend-list">
      {
        friends.map((friend, i) => {
          return (
            <li key={i} className="row">
              <span className="friend"> { friend }</span>
              <button className="delete-friend"
              onClick={ deleteFriend(i) }>-</button>
            </li>
          )
        })
      }
      </ul>
    )
  }
}

export default FriendList;
