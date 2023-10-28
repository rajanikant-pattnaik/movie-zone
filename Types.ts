export interface UserState {
  user: null | {
    username: string;
    id: string;
    email: string;
  };
}

export type MovieCard =
  | undefined
  | {
      image: string;
      id: Number;
      title: string;
    };
export type Props = {
  image: String | undefined;
  id: Number | undefined;
  title: String | undefined;
};
