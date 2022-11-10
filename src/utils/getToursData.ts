import axios from 'axios';

const url = 'https://course-api.com/react-tours-project';

const getToursData = async () => {
  const { data: toursRespData } = await axios.get(url);
  return toursRespData;
};
export { getToursData };
