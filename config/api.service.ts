import {create} from 'apisauce';
import {API_URL} from './url';

export const apiSvc = create({
  baseURL: API_URL,
  headers: {Accept: 'application/json'},
});
