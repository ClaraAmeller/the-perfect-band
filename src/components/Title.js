import React, { Component } from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.renameBand = this.renameBand.bind(this);
  }

    // Name band handler
    renameBand(val) {
      this.setState({title: val});
      console.log('Band', val);
    }

    render() {
      let input;
      return (
        <div>
          <form onMouseLeave={(e) => {
            e.preventDefault();
            this.renameBand(input.value);
          }}>
            <input type='text' placeholder='Your band name' ref={node => {input = node}} />
          </form>
        </div>
      );
    }
}

export default Title;