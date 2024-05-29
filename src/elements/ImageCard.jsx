import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

const ImageCard = ({ link, imgClass = "", className = "", src, alt = "" }) => {
  return (
    <Card className={"image-card " + className} body>
      <Image className={"object-fit-cover " + imgClass} draggable="false" fluid src={src} alt={alt} />
      {link ?
        <a href={link} class="stretched-link"></a>
        :
        null
      }
    </Card>
  )
}

export default ImageCard