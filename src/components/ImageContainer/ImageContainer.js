import './ImageContainer.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageContainer = ({imageData}) => {

  const imagesArray = imageData.map(image => {
    return <ImageCard key={image.id} singleImgData={image} />
  })

  return (
    <section className="images-container">
      {imagesArray}
    </section>
  );
}

export default ImageContainer;