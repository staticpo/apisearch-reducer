import { actions } from "./actions";
import { getStore } from "./reducer";

type ProjectState = { 
  name?: string;
  count?: number;
};

type ProjectActions =
  | ReturnType<typeof actions.setName>
  | ReturnType<typeof actions.countUp>
  | ReturnType<typeof actions.countDown>;

export const getProjectStore = () => getStore<ProjectState, ProjectActions>(
  {
    name: "",
    count: 0,
  },
  (state, actions) => {
    switch (actions.type) {
      case "SET_NAME":
        return {
          ...state,
          name: actions.payload,
        };
      case "COUNT_UP":
        return {
          ...state,
          count: state.count !== undefined ? state.count + 1 : 0,
        };
      case "COUNT_DOWN":
        return {
          ...state,
          count: state.count !== undefined ? state.count - 1 : 0,
        };
      default:
        return state;
    }
  }
);
