import { stateType } from "./stype-store";

export const initalState: stateType[] = [
  {
    id: 0,
    firstName: "",
    password: "",
    email: "",
  },
];

export const initalStateValue: stateType[] = [
  {
    id: 1,
    firstName: "Rahul",
    password: "Selokar",
    email: "seleockar@gmail.com",
  },
];

const reducerFunction = (state = initalState, action: any) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return {
        ...action.payload.users,
      };
    case "UPDATE_USER_DATA":
      console.log("state while update", state);

      const userId: number = state.findIndex(
        (user: stateType) => user.id === action.userData.id
      );
      state[userId] = action.userData;

      return [...state];

    default:
      return state;
  }
};

export default reducerFunction;
