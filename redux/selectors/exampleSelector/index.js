import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const exampleSelector = createDraftSafeSelector(
    (state) => state.test,
    (test) => test
)