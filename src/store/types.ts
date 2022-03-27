export type Reducer<State, Action> = (state: State, action: Action) => State;
export type Dispatch<Action> = (action: Action) => void;
export type Subscriber<State> = (state: State) => void;
export type Unsubscriber = () => void;
export type Store<State, Action> = {
  dispatch: Dispatch<Action>;
  getState: () => State;
  subscribe: (subscriber: Subscriber<State>) => Unsubscriber;
};