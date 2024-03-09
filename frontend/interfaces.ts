export interface User {
  username: string;
  token: Token;
}

export interface Token {
  value: string;
  expiration: string;
}

export interface Post {
  title: string;
  description: string;
  username: string;
}
