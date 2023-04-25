import Card from "../elements/card/Card";
import CardHolder from "../elements/card/CardHolder";
import Skill from "../elements/skill/Skill";

const ReactApp = () => {
  return (
    <>
      <h1>React Native</h1>
      <CardHolder>
        <Card className="card-logo">
          <img src="logos/react_logo.svg" alt="React logo" />
        </Card>
        <Skill skillName="React Native" rating={4} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            As an experienced mobile app developer, I am proficient in using
            React Native to build dynamic and interactive user interfaces for
            iOS and Android applications. With my medium to advanced level of
            expertise in React Native, I am able to effectively code mobile apps
            using this powerful and popular front-end framework.
          </p>
          <br />
          <p>
            React Native is a declarative, component-based library that allows
            for efficient rendering of UI elements and easy management of state
            and props. I have extensive experience in building complex mobile
            applications with React Native, utilizing its core concepts such as
            virtual DOM, JSX syntax, and React hooks.
          </p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Skill skillName="Native Base" rating={4} />
        <Card className="card-logo">
          <img src="logos/nb_logo.png" alt="Native Base logo" />
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            In addition to building mobile apps, I am also proficient in
            integrating React Native into larger projects, using tools like
            NativeBase for UI design and components. NativeBase is an
            accessible, utility-first component library that allows for easy
            implementation of themes and custom styling.
          </p>
          <br />
          <p>
            I am able to work with React Native in conjunction with other
            front-end technologies such as JavaScript and StyleSheets. I have a
            keen eye for design and am able to create custom UI components that
            fit seamlessly into any mobile application.
          </p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card className="card-logo">
          <img src="logos/js_logo.svg" alt="JavaScript logo" />
        </Card>
        <Skill skillName="JavaScript" rating={4} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            One of the most exciting aspects of working with React Native is the
            ability to build reusable and scalable components. With NativeBase,
            I can leverage its pre-built UI components to create intuitive,
            responsive, and visually appealing mobile applications.
          </p>
          <br />
          <p>
            Overall, my React Native skills and experience with NativeBase are a
            valuable asset to any mobile development team, and I am confident in
            my ability to build high-quality and efficient mobile applications
            using this powerful front-end framework.
          </p>
        </Card>
      </CardHolder>
    </>
  );
};
export default ReactApp;
