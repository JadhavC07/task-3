export type stateType = {
  id: number;
  firstName: string;
  password: string;
  email: string;
};

export type actionType = {
  payload: { value: number };
  type: string;
};