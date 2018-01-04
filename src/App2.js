import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

console.clear();

const Title = ({bandName}) => {
  <form onChange={(e) => {
    e.preventDefault();
    renameBand(input.value);
    input.value = '';
  }}>
    <input type='text' placeholder='Your band name' ref={node => {input = node}} />
  </form>
  return (
    <div>
       <div>
          <h1>to-do {bandName}</h1>
       </div>
    </div>
  );
}

const BandForm = ({addMember}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addMember(input.value);
        input.value = '';
      }}>
      <input ref={node => {input = node}} />
      <br />
    </form>
  );
};

const Member = ({member, remove}) => {
  // Each Member
  return (<a href="" onClick={() => {remove(member.id)}}>{member.text}</a>);
}

const MemberList = ({members, remove}) => {
  // Map through the todos
  const memberNode = members.map((member) => {
    return (<Member member={member} key={member.id} remove={remove}/>)
  });
  return (<div>{memberNode}</div>);
}

// Contaner Component
// Todo Id
window.id = 0;
class App extends React.Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      band: '',
      members: []
    }
    this.apiUrl = 'http://localhost:3000'
  }
  // Lifecycle method
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({members:res.members});
      });
      console.log(this.state.members);
  }

  // Name band handler
  renameBand(val) {
    const band = {text: val};
    axios.post(this.apiUrl, band)
      .then((res) => {
        this.setState({band: band});
      });
  }
  // Add todo handler
  addMember(val) {
    // Assemble data
    const member = {text: val}
    // Update members
    axios.post(this.apiUrl, member)
       .then((res) => {
          this.state.members.push(res.members);
          this.setState({members: this.state.members});
       });
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.members.filter((member) => {
      if(member.id !== id) return member;
    });
    // Update state with filter
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({members: remainder});
      })
  }

  render(){
    console.log(this.state.band);
    console.log(this.state.members);
    // Render JSX
    return (
      <div>
        <h1>The Perfect Band</h1>
        <BandForm addMember={this.addMember.bind(this)}/>
        <MemberList
          members={this.state.members}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
