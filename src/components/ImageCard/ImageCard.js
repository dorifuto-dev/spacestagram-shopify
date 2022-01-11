import './ImageCard.css';
import { Link } from 'react-router-dom';

const ImageCard = ({ singleImgData }) => {

  const { id, date, title, copyright, synopsis, imgUrl } = singleImgData;

  return (
    <Link to={`/${id}`} className="image-card-link">
      <article className="image-card">
      <header className="image-card-header">
        <img className="image-card-photo" src={imgUrl} alt={title}>
        </img>
      </header>
      <footer className="image-card-footer">
        <h1 className="image-card-title">{title}</h1>
        <p className="image-card-date">{date}</p>
      </footer>
      </article>
    </Link>
  );
}

export default ImageCard;