import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

const ImageCard = ({ src, alt = "" }) => {
  return (
    <Card className="image-card" body>
      <Image draggable="false" fluid src={src} alt={alt} />
    </Card>
  )
}

export default ImageCard