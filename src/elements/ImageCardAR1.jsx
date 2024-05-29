import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

//ImageCard with Aspect Ratio 1/1

const ImageCardAR1 = ({ link, src, alt = "" }) => {
  return (
    <Card className="user-select-none image-card ratio ratio-1x1" body>
      <div className="position-relative h-100">
        <Image style={{}} className="position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-0" draggable="false" fluid src={src} alt={alt} />
      </div>
      {link ?
        <a href={link} class="stretched-link"></a>
        :
        null
      }
    </Card>
  )
}

export default ImageCardAR1