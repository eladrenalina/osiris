

import './App.css';
import { NavBar } from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import Card from './components/cards/Card';

function App() {

  return (
    <div>
      <NavBar />
     <ItemListContainer/>
      <Card/>
    </div>
  );
}

export default App;
