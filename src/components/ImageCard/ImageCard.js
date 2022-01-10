import './ImageCard.css';

const ImageCard = ({ singleImgData }) => {

  const { id, date, title, copyright, synopsis, imgUrl } = singleImgData;

  return (
    <article className="image-card" key={id}>
      <header className="image-card-header">
        <img className="image-card-photo" src={imgUrl} alt={title}>
        </img>
        <h1 className="image-card-title">{title}</h1>
        <p className="image-card-author">{copyright}</p>
        <p className="image-card-date">{date}</p>
      </header>
    </article>
  );
}

export default ImageCard;