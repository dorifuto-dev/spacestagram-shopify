import './DetailCard.css';
import emptyHeart from '../../images/emptyHeart.svg';
import redHeart from '../../images/redHeart.svg';
import backArrow from '../../images/backArrow.svg';
import { Link, useParams } from 'react-router-dom';

const DetailCard = ({ imageData, toggleImageLike }) => {

  const { id } = useParams('id');

  const currentImage = imageData && imageData.find(image => {
    return JSON.stringify(image.id) === id
  });

  const { title, copyright, date, synopsis, imgUrl, isLiked } = currentImage ? currentImage : ""

  return (
    <article className="detail-card"> 
      { currentImage && 
        <>
          <header className="detail-card-header">
            <img className="detail-card-image" alt={title} src={imgUrl}></img>
            <div className="detail-buttons-container">
              { isLiked ? 
                <button className="detail-like-button" onClick={() => toggleImageLike(id)}>
                  <img className="detail-liked-icon" alt="Liked icon" src={redHeart}></img>
                </button> : 
                <button className="detail-like-button" onClick={() => toggleImageLike(id)}>
                  <img className="detail-unliked-icon" alt="Unliked icon" src={emptyHeart}></img>
                </button> }
              <Link to="/"><img className="go-back-icon" alt="Go back button" src={backArrow}></img></Link>
            </div> 
          </header>
          <footer className="detail-card-text">
            <h1 className="detail-card-title">{title}</h1>
            { copyright && <p className="detail-card-copyright">{`Photo by: ${copyright}`}</p>}
            <p className="detail-card-date">{date}</p>
            <p className="detail-card-synopsis">{synopsis}</p>
          </footer>
        </> 
      }
    </article>
  );
}

export default DetailCard;