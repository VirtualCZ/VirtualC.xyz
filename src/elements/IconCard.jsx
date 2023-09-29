import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

const IconCard = ({ src, alt = "", text }) => {
    return (
        <Card className="icon-card">
            <Card.Body className="justify-content-center d-flex align-middle">
                <Image draggable="false" fluid src={src} alt={alt} />
                {text ?
                    <p className="d-inline fs-6">{text}</p>
                    :
                    null}
            </Card.Body>
        </Card>
    )
}

export default IconCard