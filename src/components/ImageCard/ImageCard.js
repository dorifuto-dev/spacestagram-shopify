import './ImageCard.css';
import emptyHeart from '../../images/emptyHeart.svg';
import { Link } from 'react-router-dom';

const ImageCard = ({ singleImgData, toggleImageLike }) => {

  const { id, date, title, imgUrl, isLiked } = singleImgData;

  return (
    <article className="image-card">
      <header className="image-card-header">
        <Link to={`/${id}`} className="image-card-link">
          <img className="image-card-photo" src={imgUrl} alt={title}>
          </img>
        </Link>
      </header>
      <footer className="image-card-footer">
        {isLiked ? <p>Liked</p> : <img className="unliked-icon" alt="Unliked icon" src={emptyHeart}></img>}
        <h1 className="image-card-title">{title}</h1>
        <p className="image-card-date">{date}</p>
        <button className="detail-card-like" onClick={() => toggleImageLike(id)}>LIKE</button>
      </footer>
    </article>
  );
}

export default ImageCard;