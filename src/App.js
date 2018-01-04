import React from 'react';
import Title from './components/Title';
import MembersForm from './components/MembersForm';

// Member id
window.id = 0;

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <MembersForm />
      </div>
    );
  }
}

export default App;