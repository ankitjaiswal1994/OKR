import axios, { AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://okrcentral.github.io/',
});

type DefaultApiReponse<T> = {
  data: T;
  message: string | boolean;
  success: boolean;
};

/**
 * This is because all the apis support a format of DefaultApiReponse type, and we don't want to repeat these types,
 * rather we want to only add types for the data
 *
 */
export const api = {
  get: function <T extends any>(
    ...params: Parameters<typeof axiosInstance.get>
  ) {
    return axiosInstance.get<DefaultApiReponse<T>>(...params);
  },
};

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error: any) => {
    if (error?.message === 'Network Error') {
      throw new Error('Please check your internet');
    }
    const errorMessage =
      error?.response?.data?.message || 'Something went wrong';
    throw new Error(errorMessage);
  },
);
