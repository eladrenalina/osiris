

import './App.css';
import { NavBar } from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
