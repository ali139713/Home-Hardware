import {create} from 'apisauce';
import {API_URL} from './Url';

export const apiSvc = create({
  baseURL: API_URL,
  headers: {
    authorization:
      'Basic Y2tfYTk0NWI2OGEzZDlkMzRlNGFiMzJmMzA0MDE2MjRmY2ZhMDg3ZmI2Yzpjc19kMGQ0NzYxZTMwZjdmOWRhMjlmOWM3YzkwY2VmMzM5YjAyNDBmZWZl',
  },
});
