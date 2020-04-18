export type Route<T extends string> = Record<T, RouteValue>;

interface RouteValue {
  name?: string;
  path: string;
  component: React.FC;
  exact?: boolean;
}

export interface User {
    id: string,
    username: string,
    email: string,
    fullName: string,
}

export interface addUserRequest {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
}