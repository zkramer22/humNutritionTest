import React from 'react';

class FriendList extends React.Component {

  render() {
    const { friends } = this.props;

    return (
      <ul>
      {
        friends.map((friend, i) => {
          return (
            <li key={i}>
              <span> { friend }</span>
              <button onClick={ this.props.deleteFriend(i) }>-</button>
            </li>
          )
        })
      }
      </ul>
    )
  }
}

export default FriendList;
