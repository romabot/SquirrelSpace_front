import React from 'react';
import './App.css';
import SquirrelPage from "./components/SquirrelPage"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            SQUIRRELSPACE 🐿
        </header>
        <main>
            <SquirrelPage/>
        </main>
        <footer>
          &copy; 2019 ROMA

        </footer>
      </div>
    );
  }
}

export default App;
