import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

const IconCard = ({ src, alt = "", gradientCol = "", children = "" }) => {
    return (
        <Card className={`icon-card rounded-pill gradient-${gradientCol}`}>
            <Card.Body className="justify-content-center d-flex align-middle h-100">
                <Image className="object-fit-fill" draggable="false" src={src} alt={alt} />
                {children ?
                    <p className="d-inline fs-6">{children}</p>
                    :
                    null}
            </Card.Body>
        </Card>
    )
}

export default IconCard