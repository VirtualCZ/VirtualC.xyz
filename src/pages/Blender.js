import Card from "../elements/card/Card";
import CardHolder from "../elements/card/CardHolder";

import "./ReactPage.css";

const ReactApp = () => {
  return (
    <div className="ReactPage">
      <h1>React</h1>
      <CardHolder>
        <Card>
          <img src="logos/react_logo.svg" alt="React logo" />
          <p>React</p>
        </Card>
        <Card>
          <img src="logos/js_logo.svg" alt="JS logo" />
          <p>JavaScript</p>
        </Card>
        <Card>
          <img src="logos/css_logo.svg" alt="CSS logo" />
          <p>CSS</p>
        </Card>
        <Card>
          <img src="logos/html_logo.svg" alt="HTML logo" />
          <p>HTML</p>
        </Card>
      </CardHolder>
      <Card>I code webpages using a JavaScript framework called React.</Card>
    </div>
  );
};
export default ReactApp;
