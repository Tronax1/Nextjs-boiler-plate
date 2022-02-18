import { useDispatch } from "react-redux";
import { useExampleAction } from "./exampleAction";

const useActions = () => {
    const dispatch = useDispatch(); // This is to avoid importing useDispatch everytime you need to use an action
    return {
        dispatch,
        useExampleAction
    }
}

export default useActions
/**
    * To use this hook, you must import it in your component
    * 
    * import { useActions } from "../../../../hooks/useActions"
    * 
    * const {dispatch, useExampleAction} = useActions()
    * 
    * const {actExample, actExampleServices} = useExampleAction()
    * 
    * dispatch(actExample({data}, onSuccess, onError))
    * dispatch(actExampleServices({}, onSuccess, onError))
    */