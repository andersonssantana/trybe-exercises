import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {task('Teste do item')}
    </div>
  );
}

export default App;
