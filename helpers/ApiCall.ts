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
export const fetchCategoryProductsById = async (categoryId: number, page?:number) => {
  const response = await apiSvc.get(`products?categoryId=${categoryId}&page=${page ? page : 1}`);
  if (response.ok) {
    return response.data;
  } else {
    return null;
  }
};
export const fetchShippingZones = async () => {
  const response = await apiSvc.get('shipping/zones');
  if (response.ok) {
    return response.data;
  } else {
    return null;
  }
};
export const fetchPaymentMethods = async () => {
  const response = await apiSvc.get('payment_gateways');
  if (response.ok) {
    return response.data;
  } else {
    return null;
  }
};
export const createOrder = async (order:any) => {
  const response = await apiSvc.post('orders', order);
  console.log('response of create order :', response.status)
  if (response.ok) {
    return response.data;
  } else {
    return null;
  }
};
