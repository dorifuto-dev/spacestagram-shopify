import dayjs from 'dayjs';

export const cleanNasaData = (data) => {
  return data.photos.map(roverObj => {
    return {
      id: roverObj.id,
      imageSource: roverObj.img_src,
      roverName: roverObj.rover.name,
      cameraName: roverObj.camera.full_name,
      date: dayjs(roverObj.earth_date).format('MMMM D, YYYY')
    }
  })
}