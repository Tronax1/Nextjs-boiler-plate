import useExampleService from './exampleService';

const useServices = () => {
    return {
        useExampleService
    }
}
export default useServices;

/**
 * Example of a service that uses the example provider
 * 
 * import useServices from "../services";
 * 
 * const { useExampleService } = useServices();
 * const { exampleService } = useExampleService();
 * 
 * await exampleService(); // this will call the exampleFunction in the example provider
 */