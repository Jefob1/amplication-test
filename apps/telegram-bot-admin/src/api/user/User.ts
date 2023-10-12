import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
