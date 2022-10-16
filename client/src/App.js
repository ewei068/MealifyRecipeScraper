import './App.css';
import Recipes from './Recipes';

function App() {
  return (
    <div className="App">
      <div>
        <div class="jumbotron justify-content-center mt-5">
          <h1>Add recipes here</h1>
          <br />
          <br />
          <Recipes />
        </div>
      </div>
    </div>
  );
}

export default App;
