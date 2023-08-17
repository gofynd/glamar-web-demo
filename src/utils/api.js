import axios from 'axios';

import environment from '../env';
import { createSkuParamsString } from './general';

const API = axios.create({
  baseURL: `${environment.SNELLO_URL}/api/v1/core/sdk/`,
  headers: {
    'Content-Type': 'application/json',
    source: 'web'
  }
});

const SkuAPI = axios.create({
  baseURL: `${environment.SNELLO_URL}/api/v1/core/`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    source: 'web'
  }
});

export const setAuthorization = (apiKey) => {
  API.defaults.headers.common['Authorization'] = apiKey;
};

export const getModuleConfig = () => {
  return API.get('/module-config');
};

export const sendMeta = (requestId, tryOnType) => {
  return API.post('/meta', null, {
    headers: {
      'x-request-id': requestId,
      'x-try-on-type': tryOnType
    }
  }).catch();
};

export const getSkuList = (params) => {
  const skuParamsString = createSkuParamsString(params);
  return SkuAPI.get(`/sku?${skuParamsString}`);
};

export const getHomeSkuList = () => {
  return SkuAPI.get(`/sku/home`);
};
