import './ImageContainer.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageContainer = ({imageData, toggleImageLike }) => {

  const imagesArray = imageData.map(image => {
    return (
      <ImageCard 
        key={image.id} 
        singleImgData={image} 
        toggleImageLike={toggleImageLike} 
      />
    )
  });

  return (
    <section className="images-container">
      {imagesArray}
    </section>
  );
};

export default ImageContainer;