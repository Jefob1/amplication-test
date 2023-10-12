import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName: string;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
