import './App.css';
import Recipes from './Recipes';

function App() {
  return (
    <div className="App">
      <div>
        <div class="jumbotron justify-content-center mt-5">
        <img src="mealify_text.png" width="300" height="300"/>

          <h1>Mealify: Add recipes here</h1>
          <Recipes />
        </div>
      </div>
    </div>
  );
}

export default App;
