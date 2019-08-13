import React from 'react';

class Data extends React.Component {

  render() {
    const { name, age, friends } = this.props;

    return (
      <div className="data hidden">
        <p>name: { name }</p>
        <p>age: { age }</p>

        <p>Friends:</p>
        {
          friends.map((friend, i) => {
            return (
              <p key={i}>Friend #{i}: { friend }</p>
            )
          })
        }
      </div>
    )
  }
}

export default Data;
