import logo from './logo.svg';
import './App.css';
import {Switch,
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import List from './admin/post/List';
import Add from './admin/post/Add';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/post" exact>
          <List></List>
        </Route>

        <Route path="/admin/post/add" exact>
          <Add></Add>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
