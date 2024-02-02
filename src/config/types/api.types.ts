export type LOGIN_USER = {
  userInput: {
    email: string;
    password: string;
  };
};

export type AuthenticationStackParams = {
  Login: undefined;
};

export type RootStackParams = {
  GoalTracker: undefined;
  Account: undefined;
};
