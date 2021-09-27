import { useState } from "react";

import "./App.css";

function App() {
  const [template, setTemp] = useState("");

  const changeHandler = (e) => {
    setTemp(e.target.value);
  };

  const templateHandler = (event) => {
    event.preventDefault();
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
    <div>
      <details id="first">
        <summary>
          <h2>Template</h2>
        </summary>
        <div className="template-form">
          <p>use NAME and COMPANY as placeholders</p>

          <form onSubmit={templateHandler}>
            <textarea
              name="template"
              onChange={changeHandler}
              value={template}
            />
            <input type="submit" />
          </form>
        </div>
      </details>

      <details>
        <summary>
          <h2>Details</h2>
        </summary>
        <div className="info-form">
          <form onSubmit={infoHandler}>
            <input type="text" name="name" />
            <input type="text" name="company" />
            <input type="submit" />
          </form>
        </div>
      </details>
    </div>
  );
}

export default App;
