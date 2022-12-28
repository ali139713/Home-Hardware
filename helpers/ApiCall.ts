import {apiSvc} from '../config/ApiService';

export const fetchAllProducts = async (page?: number) => {
  const response = await apiSvc.get(`products?page=${page ? page : 1}`);
  if (response.ok) {
    return response.data;
  } else {
    return null;
  }
};
export const fetchProductById = async (productId: number) => {
  const response = await apiSvc.get(`products/${productId}`);
  if (response.ok) {
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
    return response.data;
  } else {
    return null;
  }
};
export const fetchCategoryById = async (categoryId: number) => {
  const response = await apiSvc.get(`products/categories/${categoryId}`);
  if (response.ok) {
    return response.data;
  } else {
    return null;
  }
};
