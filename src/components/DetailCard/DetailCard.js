import './DetailCard.css';
import { useParams } from 'react-router-dom';

const DetailCard = ({ imageData }) => {

  const { id } = useParams('id');

  const currentImage = imageData && imageData.find(image => {
    return id === JSON.stringify(image.id)
  });
  
  console.log(currentImage)

  return (
    <article className="detail-card">
      { currentImage && 
        <>
          <header className="detail-card-header">
            <img className="detail-card-image" alt={currentImage.title} src={currentImage.imgUrl}></img>
          </header>
          <body className="detail-card-text">
            <h1 className="detail-card-title">{currentImage.title}</h1>
            <p className="detail-card-copyright">{currentImage.copyright}</p>
            <p className="detail-card-date">{currentImage.date}</p>
            <p className="detail-card-synopsis">{currentImage.synopsis}</p>
          </body>
        </> 
      }
    </article>
  );
}

export default DetailCard;

  //  {/*  */}