import axios from "axios";

export function getAPOD(date = "") {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=RBg2gZy9m3dqLWSN5Mcvdtqmg6oqRvczp6TGft5l&date=${date}`
  );
}
