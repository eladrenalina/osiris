

import './App.css';
import { NavBar } from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
     <div>
    <NavBar/>
    <ItemListContainer persona="Lucas"/>
    
    </div>
  );
}

export default App;
