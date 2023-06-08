import './App.css';
import Person from './components/personCard'

function App() {
  return (
    <div className="App">
      <Person
      lastName = {"Arelius"}
      firstName = {"Lindon"}
      age = {25}
      hair = {"brown"} />
      <Person
      lastName = {"Arelius"}
      firstName = {"Yeren"}
      age = {25}
      hair = {"red"} />
      <Person
      lastName = {"Akura"}
      firstName = {"Mercy"}
      age = {25}
      hair = {"black"} />
      <Person
      lastName = {"Akura"}
      firstName = {"Malice"}
      age = {450}
      hair = {"midnight"} />
    </div>
    
  );
}

export default App;
