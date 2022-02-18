import { setTest } from "../../slices/exampleSlice"
import useServices from "../../../../services/useServices"


export const useExampleAction = () => {
    /**
    * This is an example action without services
    */
    const actExample = ({data}, onSuccess, onError) => async (dispatch) => {
        try{
            dispatch(setTest({data}));
            onSuccess && onSuccess()
        }
        catch(e){
            onError && onError(e)
        }
    }
    /**
    * This is an example action with a service
    */
    const actExampleServices = ({}, onSuccess, onError) => async (dispatch) => {
        try{
            const {useExampleService} = useServices()
            const {exampleService} = useExampleService()
            const {data} = await exampleService()
            dispatch(setTest({data}));
            onSuccess && onSuccess(response)
        }
        catch(e){
            onError && onError(e)
        }
    }
    return {actExample, actExampleServices}
}