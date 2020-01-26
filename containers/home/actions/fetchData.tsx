import axios from 'axios';

const BASE_URL = '//api.openweathermap.org/data/2.5';
const APP_ID = '271da6b323b05ebaf2b4aaa0f3378f89';

export const fetchData = (city: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          units: 'metric',
          appid: APP_ID,
        },
      })
      .then(response => {
        const newData = response.data.list.filter(
          item => item.dt_txt.substr(-8, 2) === '12',
        );
        resolve(newData);
      })
      .catch(() => {
        reject(true);
      });
  });
};
