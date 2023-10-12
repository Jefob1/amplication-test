import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
