import axios from "axios";

import { useEffect } from "react";

const useInterceptor = (store) => {
  const {test} = store.getState(); // test is the slice name, you can change it to whatever the name of your slice is for authentication
  const { token } = test;
  const handleRequest = (request) => {
    if (!!token) {
      request.headers.authorization = `Bearer ${token}`;
    }

    request.headers["Content-Type"] = "application/json";
    request.headers["accept"] = "application/json";
    
    return request;
  };

  const handleResponseSuccess = (response) => {
    return response;
  };

  const handleResponseError = (error) => {
    return Promise.reject(error);
  };

  useEffect(
    () => {
      axios.defaults.baseURL = process.env.BASE_URL; // this would be the url for your api
      axios.interceptors.request.use(handleRequest);
      axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
    },
    // eslint-disable-next-line
    []
  );
};

export default useInterceptor;