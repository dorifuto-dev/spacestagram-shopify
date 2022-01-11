import dayjs from 'dayjs';

export const cleanNasaData = (data) => {
  return data.map(imgObject => {
    return {
      id: parseInt(imgObject.date.split("-").join("")),
      date: dayjs(imgObject.date).format("MMMM DD, YYYY"),
      title: imgObject.title,
      copyright: imgObject.copyright,
      synopsis: imgObject.explanation,
      imgUrl: imgObject.url,
      isLiked: false
    }
  })
}