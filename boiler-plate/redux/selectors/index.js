import { exampleSelector } from "./exampleSelector";
import { useSelector } from "react-redux";

export const useSelectors = () => {
    return { useSelector, exampleSelector };
}

/*
    Example:
    import { useSelectors } from "./selectors";
    const { useSelector, exampleSelector } = useSelectors();

    This should be used in the following way in the component:
    const example = useSelector(exampleSelector);
*/ 