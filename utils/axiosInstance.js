import axios from 'axios';

const IP_ADDRESSES = [
  'http://127.0.0.1:5000/api/',
  'http://10.20.7.43:5000/api/',
  'http://10.10.73.21:5000/api/' 
];

const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

class FallbackAxiosInstance {
  constructor() {
    this.currentIPIndex = 0;
    this.instances = IP_ADDRESSES.map(url => createAxiosInstance(url));
    this.successfulIP = IP_ADDRESSES[0]; 
  }

  async request(config) {
    try {
      const requests = this.instances.map((instance, index) => 
        instance(config)
          .then(response => {
            this.successfulIP = IP_ADDRESSES[index]; 
            return { response, ipIndex: index };
          })
          .catch(error => {
            // console.log(`Failed to connect to ${IP_ADDRESSES[index]}`);
            return Promise.reject(error);
          })
      );

      const { response, ipIndex } = await Promise.any(requests);
      this.currentIPIndex = ipIndex;
      // console.log(`Successfully connected to ${this.successfulIP}`);
      return response;
    } catch (error) {
      console.error('All IP addresses failed');
      throw error;
    }
  }

  getCurrentBaseURL() {
    return this.successfulIP; 
  }

  async get(url, config) {
    return this.request({ ...config, method: 'get', url });
  }

  async post(url, data, config) {
    return this.request({ ...config, method: 'post', url, data });
  }

  async put(url, data, config) {
    return this.request({ ...config, method: 'put', url, data });
  }

  async delete(url, config) {
    return this.request({ ...config, method: 'delete', url });
  }

  async patch(url, data, config) {
    return this.request({ ...config, method: 'patch', url, data });
  }
}

const axiosInstance = new FallbackAxiosInstance();


const base_URL = 'http://127.0.0.1:5000/api/';
export { base_URL };
export default axiosInstance; // duzetmeli yeri bar