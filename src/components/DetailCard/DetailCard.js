import './DetailCard.css';
import { Link, useParams } from 'react-router-dom';

const DetailCard = ({ imageData, toggleImageLike }) => {

  const { id } = useParams('id');

  const currentImage = imageData && imageData.find(image => {
    return JSON.stringify(image.id) === id
  });

  const { title, copyright, date, synopsis, imgUrl, isLiked } = currentImage && currentImage

  return (
    <article className="detail-card">
      <Link to="/">Back to Home</Link>
      { currentImage && 
        <>
          { isLiked ? <p>Liked</p> : <p>Not Liked</p> }
          <header className="detail-card-header">
            <img className="detail-card-image" alt={title} src={imgUrl}></img>
          </header>
          <footer className="detail-card-text">
            <h1 className="detail-card-title">{title}</h1>
            <p className="detail-card-copyright">{copyright}</p>
            <p className="detail-card-date">{date}</p>
            <p className="detail-card-synopsis">{synopsis}</p>
            <button className="detail-card-like" onClick={() => toggleImageLike(id)}>LIKE</button>
          </footer>
        </> 
      }
    </article>
  );
}

export default DetailCard;