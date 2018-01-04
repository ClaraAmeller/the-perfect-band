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
    }

    render() {
      let input;
      return (
        <form className="form my-3" onMouseLeave={(e) => {
          e.preventDefault();
          this.renameBand(input.value);
        }}>
          <input type='text' className="form-control" placeholder='Your band name' ref={node => {input = node}} />
        </form>
      );
    }
}

export default Title;