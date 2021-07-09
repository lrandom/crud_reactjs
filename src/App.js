import logo from './logo.svg';
import './App.css';
import {Switch,
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import List from './admin/post/List';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/post" exact>
          <List></List>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
