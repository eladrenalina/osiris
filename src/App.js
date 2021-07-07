

import './App.css';
import { NavBar } from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
        <NavBar />
          <ItemListContainer />
        </Route>
        {/* <div className="p-3 mb-2 bg-secondary text-white"> */}
        <Route exact path="/detail" component={ItemDetailContainer} />

        {/* </div> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
