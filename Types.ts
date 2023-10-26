export interface UserState {
  user: null | {
    username: string;
    id: string;
    email: string;
  };
}

export type MovieCard=undefined| {
  image: string;
  id: Number;
  title: string;
}
