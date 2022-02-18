import axios from "axios";

const useExampleProvider = () => {
  const exampleFunction = () => {
    return axios({
      method: "GET",
      url: "example",
    });
  };
  return { exampleFunction };
};

export default useExampleProvider;
