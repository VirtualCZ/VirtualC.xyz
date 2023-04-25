import Card from "../elements/card/Card";
import CardHolder from "../elements/card/CardHolder";

const Contact = () => {
  return (
    <>
      <CardHolder>
        <Card className="card-logo">
          <img src="logos/blender_logo.svg" alt="React logo" />
          <p>Facebook</p>
        </Card>
        <Card className="card-logo">
          <img src="logos/blender_logo.svg" alt="React logo" />
          <p>Instagram</p>
        </Card>
        <Card className="card-logo">
          <img src="logos/blender_logo.svg" alt="React logo" />
          <p>Email</p>
        </Card>
        <Card className="card-logo">
          <img src="logos/blender_logo.svg" alt="React logo" />
          <p>GitHub</p>
        </Card>
      </CardHolder>
    </>
  );
};
export default Contact;
