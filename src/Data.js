import React from 'react';

class Data extends React.Component {

  render() {
    const { name, age, friends } = this.props;

    return (
      <div id="data" className="hidden">
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
