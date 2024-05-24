import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

const ImageCard = ({ className = "", src, alt = "" }) => {
  return (
    <Card className={"image-card " + className} body>
      <Image className="object-fit-cover" draggable="false" fluid src={src} alt={alt} />
    </Card>
  )
}

export default ImageCard