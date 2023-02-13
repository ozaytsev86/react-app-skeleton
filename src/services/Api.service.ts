import axios from 'axios';
import qs from 'qs';

import {getMessage} from 'services/Message.service';

const ACTION_GET = 'get';
const ACTION_POST = 'post';
const ACTION_PUT = 'put';
const ACTION_DELETE = 'delete';

const makeRequest = ({method, url, data, privateRequest, params, errorMessage = ''}) => {
  // const token = getAccessToken();
  const token = false;
  let headers = {
    'content-type': 'application/x-www-form-urlencoded',
  };

  if (token && privateRequest) {
    headers = {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }

  return axios({method, params, url, data, headers})
    .then((response) => {
      return Promise.resolve(response?.data || response);
    })
    .catch((body) => {
      let error;

      if (body && body.response && body.response.data && body.response.data.errors) {
        // eslint-disable-next-line prefer-destructuring
        error = body.response.data.errors[0];
      } if (body && body.response && body.response.data) {
        // eslint-disable-next-line prefer-destructuring
        error = body.response.data;
      } else if (body && body.name) {
        error = body.name;
      }

      let message;
      if (error) {
        message = errorMessage || error.message || getMessage(`MESSAGE_STATUS_${error.code || body.response.status}`);
      } else {
        message = getMessage(`MESSAGE_STATUS_${body.response.status}`) || getMessage('genericError');
      }
      return Promise.reject(message);
    });
};

export const ApiService = {
  // eslint-disable-next-line max-len
  publicGet: ({url, data, errorMessage}) => makeRequest({method: ACTION_GET, url: `${import.meta.env.VITE_APP_API_URL}${url}`, privateRequest: false, errorMessage, data: qs.stringify(data)}),
  // eslint-disable-next-line max-len
  publicPost: ({url, data, errorMessage}) => makeRequest({method: ACTION_POST, url: `${import.meta.env.VITE_APP_API_URL}${url}`, privateRequest: false, errorMessage, data: qs.stringify(data)}),
  get: ({url, params = null}) => makeRequest({method: ACTION_GET, url: `${import.meta.env.VITE_APP_API_URL}${url}`, params, privateRequest: true}),
  post: ({url, data}) => makeRequest({method: ACTION_POST, url: `${import.meta.env.VITE_APP_API_URL}${url}`, privateRequest: true, data}),
  put: ({url, data}) => makeRequest({method: ACTION_PUT, url: `${import.meta.env.VITE_APP_API_URL}${url}`, privateRequest: true, data}),
  delete: ({url, data}) => makeRequest({method: ACTION_DELETE, url: `${import.meta.env.VITE_APP_API_URL}${url}`, privateRequest: true, data}),
};
