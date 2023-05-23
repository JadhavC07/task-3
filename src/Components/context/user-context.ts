import { createContext, useReducer } from "react";
import reducerFunction, {
  initalState,
  initalStateValue,
} from "../store/reducer-store";

const HealthDataContext = createContext({
  users: initalState,
  dispatchFun: (action: any) => {},
});

export const HealthDataContextWrapper:any = () => {
  const [userState, dispatch] = useReducer(reducerFunction, initalStateValue);

  const dispatchFun = (action: any) => {
    dispatch(action);
  };
  return;
};

export default HealthDataContext;
