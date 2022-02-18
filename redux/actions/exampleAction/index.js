import { setTest } from "../../slices/exampleSlice"
export const actExample = ({data}, onSuccess, onError) => async (dispatch) => {
    try{
        dispatch(setTest({data}));
        onSuccess && onSuccess()
    }
    catch(e){
        onError && onError(e)
    }
}