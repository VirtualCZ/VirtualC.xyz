import Card from "../elements/card/Card";
import CardHolder from "../elements/card/CardHolder";
import Skill from "../elements/skill/Skill";

const Blender = () => {
  return (
    <>
      <h1>Blender</h1>
      <CardHolder>
        <Card className="card-logo">
          <img src="logos/blender_logo.svg" alt="React logo" />
        </Card>
        <Skill skillName="Blender" rating={3} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            As an experienced 3D modeler, I am proficient in using Blender to
            create dynamic and high-quality 3D models for a variety of purposes.
            With my medium-level expertise in Blender, I am able to effectively
            create 3D models for animations, 3D printing, and other basic uses.
          </p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            One of the key strengths of Blender is its ability to create
            realistic materials for 3D models. While I have the ability to
            create basic materials myself, I often utilize BlenderKit, a
            powerful online database of high-quality materials that can be
            easily integrated into my projects.
          </p>
          <br />
          <p>
            In addition to modeling, I am also able to use Blender to create
            animations that bring models to life. I am familiar with cloth
            simulation, hooks, and other animation tools that allow me to create
            realistic movements and interactions within the 3D environment.
          </p>
          <br />
          <p>
            Blender also offers powerful simulation capabilities, such as cloth
            simulation and particle effects. I have experience in utilizing
            these features to create stunning visual effects in my projects.
          </p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>
            In addition to my technical skills, I have a keen eye for design and
            am able to create 3D models that are visually appealing and
            aesthetically pleasing. I am also comfortable working with clients
            to understand their specific needs and incorporate those into my
            designs.
          </p>
          <br />
          <p>
            Overall, my skills in Blender are a valuable asset to any 3D
            modeling team, and I am confident in my ability to create
            high-quality, visually stunning 3D models using this powerful
            software.
          </p>
        </Card>
      </CardHolder>
    </>
  );
};
export default Blender;
