

import './App.css';
import { NavBar } from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/itemcount/ItemCount';
import { Card } from './components/cards/Card';

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer persona="LUCAS" />
      <Card/>

    </div>
  );
}

export default App;
