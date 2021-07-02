

import './App.css';
import { NavBar } from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
