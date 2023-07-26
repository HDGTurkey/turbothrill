import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  isPagginated: "false",
});

export { setGlobalState, useGlobalState };
