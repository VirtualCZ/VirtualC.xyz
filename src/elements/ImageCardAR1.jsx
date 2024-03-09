import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

//ImageCard with Aspect Ratio 1/1

const ImageCardAR1 = ({ src, alt = "" }) => {
  return (
    <Card className="user-select-none image-card ratio ratio-1x1" body>
      <Image style={{}} className="position-absolute top-50 start-50 translate-middle" draggable="false" fluid src={src} alt={alt} />
    </Card>
  )
}

export default ImageCardAR1