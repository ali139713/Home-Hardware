import {apiSvc} from '../config/api.service';

export const fetchAllProducts = async (page?: number) => {
  const response = await apiSvc.get(`products?page=${page ? page : 1}`);
  if (response.ok) {
    // console.log(response.data);
    return response.data;
  } else {
    return null;
  }
};
export const fetchAllProductCategories = async (page?: number) => {
  const response = await apiSvc.get(
    `products/categories?page=${page ? page : 1}`,
  );
  if (response.ok) {
    // console.log(response.data);
    return response.data;
  } else {
    return null;
  }
};
