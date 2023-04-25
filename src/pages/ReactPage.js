import Card from "../elements/card/Card";
import CardHolder from "../elements/card/CardHolder";
import Skill from "../elements/skill/Skill";

import "./ReactPage.css";

const ReactWeb = () => {
  return (
    <div className="ReactWeb">
      <h1>React</h1>
      {/* <CardHolder>
        <Skill skillName="1 test" rating={1} />
      </CardHolder> */}
      <CardHolder>
        <Card className="card-logo">
          <img src="logos/react_logo.svg" alt="React logo" />
        </Card>
        <Skill skillName="React" rating={4} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            As an experienced web developer, I am proficient in using the
            JavaScript library React.js to build dynamic and interactive user
            interfaces for web applications. With my medium to advanced level of
            expertise in React, I am able to effectively code webpages using
            this powerful and popular front-end framework.
          </p>
          <br />
          <p>
            React.js is a declarative, component-based library that allows for
            efficient rendering of UI elements and easy management of state and
            props. I have extensive experience in building single-page
            applications (SPAs) with React, utilizing its core concepts such as
            virtual DOM, JSX syntax, and React hooks.
          </p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Skill skillName="JavaScript" rating={4} />
        <Card className="card-logo">
          <img src="logos/js_logo.svg" alt="JavaScript logo" />
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            In addition to building SPAs, I am also proficient in integrating
            React.js into larger web projects, using tools like React Router for
            client-side routing. I regularly utilize libraries such as
            React-icons to add icons to my applications.
          </p>
          <br />
          <p>
            I am able to work with React in conjunction with other front-end
            technologies such as CSS and LESS. I am also comfortable using
            popular UI libraries such as Bootstrap and Tailwind, which I can
            leverage to create custom UI components that are intuitive,
            responsive, and visually appealing. For example, the container used
            on this page is inspired by the Bootstrap container.
          </p>
          <br />
          <p>
            One of the most exciting aspects of working with React.js is the
            ability to build reusable and scalable components. I have a keen eye
            for design and am able to create custom UI components that fit
            seamlessly into any web application.
          </p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Skill skillName="CSS & LESS" rating={5} />
        <Card className="card-logo">
          <img src="logos/css_logo.svg" alt="CSS logo" />
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            I am also familiar with the concept of theming in React, and have
            implemented it in projects. For example, this page is inspired by
            the design of Windows 11 and can be easily customized with different
            themes that can be set from settings.
          </p>
          <br />
          <p>
            Overall, my React.js skills are a valuable asset to any web
            development team, and I am confident in my ability to build
            high-quality and efficient web applications using this powerful
            front-end framework.
          </p>
        </Card>
      </CardHolder>
    </div>
  );
};
export default ReactWeb;
