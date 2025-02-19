// import axios from 'axios';

// export const base_URL = 'http://10.20.7.41:5000/api/';

// //export const base_URL = 'http://216.250.13.53/api/course/';



// const axiosInstance = axios.create({
//   baseURL: base_URL,
//   timeout: 10000, 
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// export default axiosInstance;

import axios from 'axios';

const ipAddresses = [
  'http://127.0.0.1:5000/api/',
  'http://10.20.7.41:5000/api/',
  'http://10.10.73.21:5000/api/',
  'http://10.20.8.41:5000/api/',
];

const createAxiosInstance = (ip) => {
  return axios.create({
    baseURL: ip,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

let base_URL = 'http://127.0.0.1:5000';

const getResponsiveAxiosInstance = async () => {
  for (const ip of ipAddresses) {
    const instance = createAxiosInstance(ip);
    try {
      await instance.get('/api/get-kodeks');
      console.log(`Successful connection to ${ip}`);
      base_URL = ip;
      return instance;
    } catch (error) {
      console.error(``);
    }
  }
  return null;
};

const axiosInstance = await getResponsiveAxiosInstance();


// base_URL = base_URL.replace(/\/$/, "");
export { base_URL };
export default axiosInstance;