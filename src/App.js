import { useState } from "react";
import templatePrepper from "./templatePrep";
import { Container, Row, Accordion, Form, Button } from "react-bootstrap";

import "./bootstrap.css";
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
    const preppedTemplate = templatePrepper(event, template);
    navigator.clipboard.writeText(preppedTemplate);
  };

  return (
    <Container fluid>
      <Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Template</Accordion.Header>
            <Accordion.Body>
              <div className="template-form">
                <p>use #NAME and #COMPANY as placeholders</p>

                <Form onSubmit={templateHandler}>
                  <Form.Group>
                    <Form.Label>Template</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="template"
                      onChange={changeHandler}
                      value={template}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                      Use Template
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
              <div className="info-form">
                <Form onSubmit={infoHandler}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="lg" type="text" name="name" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Company</Form.Label>
                    <Form.Control size="lg" type="text" name="company" />
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                      Copy
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
}

export default App;
