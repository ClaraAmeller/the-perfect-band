import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'The Perfect Band',
    };
    this.renameBand = this.renameBand.bind(this);
  }

    // Name band handler
    renameBand(event) {
      if (event.target.value.length === 0) {
        this.setState({title: 'The Perfect Band'});
      } else {
        this.setState({title: event.target.value});
      }
    }

    render() {
      let input;
      return (
        <div>
          <h1 className="text-center">{this.state.title}</h1>
          <form className="form my-3">
            <input type='text' className="form-control" placeholder='Your band name' onChange={this.renameBand} />
          </form>
        </div>
      );
    }
}

export default Title;