import useProviders from "../../providers";

const useExampleService = () => {
  const { useExampleProvider } = useProviders();
  const { exampleFunction } = useExampleProvider();
  const exampleService = async () => {
    return new Promise(async (resolve, reject) => {
        try {
          resolve(await exampleFunction());
        } catch (e) {
          reject(e);
        }
      });
  }
  return {
    exampleService
  };
};

export default useExampleService;
