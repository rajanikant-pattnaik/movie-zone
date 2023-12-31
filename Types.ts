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
      type: String | undefined;
    };
export type Props = {
  image: String | undefined;
  id: Number | undefined;
  title: String | undefined;
  type: String | undefined;
};

export type details =
  | undefined
  | {
      image: String | undefined;
      title: String | undefined;
      overview: String | undefined;
    };
