import Card from "../elements/card/Card";
import CardHolder from "../elements/card/CardHolder";

const Contact = () => {
  return (
    <>
      <CardHolder>
        <Card className="card-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt="Gmail logo"
          />
        </Card>
        <Card className="card-link-holder">
          <h1>
            <a href="mailto:thomas2654cz@gmail.com?subject=From%20virtual.xyz">
              Mail
            </a>
          </h1>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card className="card-link-holder">
          <h1>
            <a href="https://github.com/VirtualCZ/">GitHub</a>
          </h1>
        </Card>
        <Card className="card-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub logo"
          />
        </Card>
      </CardHolder>
      <CardHolder>
        <Card className="card-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook logo"
          />
        </Card>
        <Card className="card-link-holder">
          <h1>
            <a href="https://www.facebook.com/SomeoneCZ/">Facebook</a>
          </h1>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card className="card-link-holder">
          <h1>
            <a href="https://www.instagram.com/tomas_v_chill/">Instagram</a>
          </h1>
        </Card>
        <Card className="card-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            alt="Instagram logo"
          />
        </Card>
      </CardHolder>
    </>
  );
};
export default Contact;
