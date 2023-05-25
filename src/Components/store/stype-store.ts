import { type } from "os";

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

export type UserType = {
  id: number;
  Name: string;
  password: string;
  email: string;
};
