import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [template, setTemp] = useState("");

  const changeHandler = (e) => {
    setTemp(e.target.value);
  };

  const templateHandler = (event) => {
    event.preventDefault();
    alert("submitted");
    // redirect to info form
  };

  const infoHandler = (event) => {
    event.preventDefault();
    const [name, company] = event.target;
    const formattedTemplate = template
      .replace("NAME", name.value)
      .replace("COMPANY", company.value);
    console.log(event.target.company.value);
    navigator.clipboard.writeText(formattedTemplate);
    // close popup
  };

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
            <div>
              <p>
                use NAME and COMPANY as placeholders for the desired name and
                company later
              </p>
              <form onSubmit={templateHandler}>
                <textarea
                  name="template"
                  onChange={changeHandler}
                  value={template}
                />
                <input type="submit" />
              </form>
            </div>
          </Route>

          <Route path="/form">
            <div>
              <form onSubmit={infoHandler}>
                <input type="text" name="name" />
                <input type="text" name="company" />
                <input type="submit" />
              </form>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
