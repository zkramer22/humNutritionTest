import React from 'react';

class Data extends React.Component {

  render() {
    const { name, age, friends, startOver } = this.props;

    return (
      <div id="data" className="hidden">
        <p>name: { name }</p>
        <p>age: { age }</p>

        <p><strong>Friends:</strong></p>
        {
          friends.map((friend, i) => {
            return (
              <p key={i}>Friend #{i}: { friend }</p>
            )
          })
        }
        <button className="zero-margin"
          onClick={ startOver }>Start Over</button>
      </div>
    )
  }
}

export default Data;
