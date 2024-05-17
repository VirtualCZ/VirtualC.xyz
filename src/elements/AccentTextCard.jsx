import { Card } from "react-bootstrap"

const AccentTextCard = ({ color="primary", children }) => {
    return (
        <Card className={`accent-text-card rounded-pill border gradient-accent border-${color}`}>
            <Card.Body className="justify-content-center d-flex align-middle">
                <p className={`text-${color} text-uppercase`}>{children}</p>
            </Card.Body>
        </Card>
    )
}

export default AccentTextCard