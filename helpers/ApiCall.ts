import {apiSvc} from '../config/api.service';

export const fetchAllPatient = async () => {
  const response = await apiSvc.get('Auth/all-patients');
  if (response.ok) {
    console.log(response.data);
    return response.data;
  } else {
    return null;
  }
};
export const fetchAllDoctor = async () => {
  const response = await apiSvc.get('Auth/all-doctors');
  if (response.ok) {
    // console.log(response.data);
    return response.data;
  } else {
    return null;
  }
};
export const fetchProfile = async () => {
  const response = await apiSvc.get('Auth/my-profile');
  if (response.ok) {
    return response.data;
  } else {
    return null;
  }
};
export const fetchAllPharmacist = async () => {
  const response = await apiSvc.get('Auth/all-pharmacist');
  if (response.ok) {
    console.log(response.data);
    return response.data;
  } else {
    return null;
  }
};
