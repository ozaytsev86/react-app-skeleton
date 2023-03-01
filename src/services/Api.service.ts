import axios, {AxiosHeaders, Method} from 'axios';
import {stringify} from 'qs';
import {$TSFixMe} from 'types';

import {getMessage} from 'services/Message.service';

const ACTION_GET = 'get';
const ACTION_POST = 'post';
const ACTION_PUT = 'put';
const ACTION_DELETE = 'delete';

interface MakeRequestParams {
  method: Method,
  url: string,
  data?: $TSFixMe,
  isPrivateRequest: boolean,
  params?: $TSFixMe,
  errorMessage?: string
}

const makeRequest = ({method, url, data, isPrivateRequest, params, errorMessage = ''}: MakeRequestParams) => {
  const token = false;
  let headers: AxiosHeaders['RawAxiosHeaders'] = {
    'content-type': 'application/x-www-form-urlencoded',
  };

  if (token && isPrivateRequest) {
    headers = {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }

  return axios({
    method,
    params,
    url: `${import.meta.env.VITE_APP_API_URL}${url}`,
    data,
    headers
  })
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

interface PublicMethodParams {
  url: string,
  data?: $TSFixMe,
  errorMessage?: string,
}

interface GetMethodParams {
  url: string,
  params?: string | string[] | number | number[],
}

interface MethodParams {
  url: string,
  data?: $TSFixMe,
}

export const ApiService = {
  publicGet: ({url, data, errorMessage}: PublicMethodParams) => makeRequest({
    method: ACTION_GET,
    url,
    isPrivateRequest: false,
    errorMessage,
    data: stringify(data)
  }),
  publicPost: ({url, data, errorMessage}: PublicMethodParams) => makeRequest({
    method: ACTION_POST,
    url,
    isPrivateRequest: false,
    errorMessage,
    data: stringify(data)
  }),
  get: ({url, params}: GetMethodParams) => makeRequest({
    method: ACTION_GET,
    url,
    params,
    isPrivateRequest: true
  }),
  post: ({url, data}: MethodParams) => makeRequest({
    method: ACTION_POST,
    url,
    isPrivateRequest: true,
    data
  }),
  put: ({url, data}: MethodParams) => makeRequest({
    method: ACTION_PUT,
    url,
    isPrivateRequest: true,
    data
  }),
  delete: ({url, data}: MethodParams) => makeRequest({
    method: ACTION_DELETE,
    url,
    isPrivateRequest: true,
    data
  }),
};
