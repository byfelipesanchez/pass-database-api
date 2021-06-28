import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Felipe's Password Database API
        </p>
        <p>
          Database made with SQLite and Flask; Front end made with React.js
        </p>
        <p>
          @byfelipesanchez
        </p>
      </header>
    </div>
  );
}

export default App;
