import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    
      <div>
        <ul>
          <li>
            <Link to="/template">Template</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>


        <Switch>
          <Route path="/template">
            <h1>Hello Template</h1>
          </Route>
          <Route path="/form">
            <h1>Hello Form</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
