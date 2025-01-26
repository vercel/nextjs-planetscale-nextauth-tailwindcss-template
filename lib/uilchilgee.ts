import axios from 'axios';

export const url = 'https://turees.zevtabs.mn/api';

const uilchilgee = (token?: string) => {
  const headers: { 'Content-type': string; Authorization?: string } = {
    'Content-type': 'application/json'
  };
  if (!!token) headers['Authorization'] = `bearer ${token}`;
  return axios.create({
    baseURL: typeof window === 'undefined' ? 'http://103.143.40.230:8081' : url,
    headers
  });
};

export default uilchilgee;
