import React from 'react';
import { getProjectStore } from "../store/index";
import { actions } from "../store/actions";
import { useStoreState } from "../store/reducer";

const projectStore = getProjectStore();
const { dispatch } = projectStore;

const ReducerPage: React.FC = () => {
  const { name, count } = useStoreState(projectStore);

  const updateName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.setName(e.target.value));
    },
    []
  );

  const increaseCount = React.useCallback(
    () => {
      dispatch(actions.countUp());
    },
    []
  );
  const decreaseCount = React.useCallback(
    () => {
      dispatch(actions.countDown());
    },
    []
  );
  
  return (
    <div>
      <h4>State + Reducer example</h4>

      <label>
        Your name is: 
        <input onChange={updateName} value={name} />
      </label>
      <div>
        Current name value:
        <div><strong>{name}</strong></div>
      </div>

      <hr />

      <div>
        <h4>Simple counter</h4>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
      </div>
      <div>
        Count: {count}
      </div>
    </div>
  );
};

export { ReducerPage };