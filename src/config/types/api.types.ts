export type SIGN_UP_USER = {
  userInput: {
    email: string;
    password: string;
    firstname: string;
    birthday: string;
  };
};

export type LOGIN_USER = {
  userInput: {
    email: string;
    password: string;
  };
};

export type AuthenticationStackParams = {
  Login: undefined;
  SignUp: undefined;
};

export type RootStackParams = {
  GoalTracker: undefined;
  Account: undefined;
};
