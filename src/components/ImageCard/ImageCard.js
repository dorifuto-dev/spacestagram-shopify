import './ImageCard.css';
import emptyHeart from '../../images/emptyHeart.svg';
import redHeart from '../../images/redHeart.svg';
import { Link } from 'react-router-dom';

const ImageCard = ({ singleImgData, toggleImageLike }) => {

  const { id, date, title, imgUrl, isLiked } = singleImgData;

  return (
    <article className="image-card">
      <header className="image-card-header">
        <Link to={`/${id}`} className="image-card-link">
          <img className="image-card-photo" src={imgUrl} alt={title}>
          </img>
          <h1 className="image-card-title">{title}</h1>
        </Link>
      </header>
      <footer className="image-card-footer">
        <p className="image-card-date">{date}</p>
        {isLiked ? 
          <button className="like-button" onClick={() => toggleImageLike(id)}>
            <img className="liked-icon" alt="Liked icon" src={redHeart}></img>
          </button> : 
          <button className="like-button" onClick={() => toggleImageLike(id)}>
            <img className="unliked-icon" alt="Unliked icon" src={emptyHeart}></img>
          </button>
        } 
      </footer>
    </article>
  );
}

export default ImageCard;