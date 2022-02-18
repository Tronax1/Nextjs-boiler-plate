import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const exampleSelector = createDraftSafeSelector(
    (state) => state.test, // state refers to the root reducer and test is the slice name
    (test) => {
        return {
            phrase: test.phrase,
            token: test.token,
        }
    } // test refers to the slice and phrase is the property name, you can also modify this function in case you want to transform the data 
)