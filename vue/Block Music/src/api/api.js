// src/api.js
import axios from 'axios';

function request(options) {
  return new Promise((resolve, reject) => {
    axios({
      method: options.method,
      url: options.url,
      data: options.data,
      headers: options.header,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default request;
