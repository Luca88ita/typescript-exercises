import { ChangeEvent, ReactNode, useReducer } from "react";

// here we declare the initial state of our components
const initState = { count: 0, text: "" };

// we proceed with the creation of an enum which is going to contain all the possible action types our reducer is going to handle
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

// we create a type which will keep track of the action occourring and of the eventual payload we are going to get
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

/**
 * we create a function reducer which will have 2 parameters
 * @param state is of the same type of initState, an object composed by a { count: number, text: string }
 * @param action is a variable of type ReducerActon, an object composed by a  { type: REDUCER_ACTION_TYPE; payload?: string}
 * @returns based on the action.type it returns a state change
 */
const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  //useReducer is used to handle more complex cases, that useState cannot handle
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  };

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </>
  );
};

export default Counter;
