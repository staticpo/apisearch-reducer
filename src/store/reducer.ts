import React from "react";
import { Reducer, Store, Subscriber, Dispatch } from './types';

export const getStore = <State, Action>(
  initialState: State,
  reducer: Reducer<State, Action>
): Store<State, Action> => {
  let state: State = { ...initialState };

  const subscribers = new Set<Subscriber<State>>();

  const subscribe = (subscriber: Subscriber<State>) => {
    subscribers.add(subscriber);
    return () => {
      subscribers.delete(subscriber);
    };
  };

  const dispatch: Dispatch<Action> = (action) => {
    state = reducer(state, action);
    subscribers.forEach((subscriber) => subscriber(state));
  };

  const getState: () => State = () => state;
  return {
    dispatch,
    getState,
    subscribe,
  };
};

export const useStoreState = <State, Action>(store: Store<State, Action>): State => {
  const [state, setState] = React.useState(store.getState());

  React.useEffect(() => {
    const unsubscribe = store.subscribe(setState);
    return unsubscribe;
  }, [store]);

  return state;
};
