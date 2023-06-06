export const ActionTypes = {
  DoLoginAction: '[Login] Do Login [API]',
  LoginSuccessfulAction: '[Login] Login Successful [Action]',
};

export const initialState = {
  user: undefined,
  token: undefined,
};

export const actions = {
  loginSuccessful: payload => ({
    type: ActionTypes.LoginSuccessfulAction,
    payload: payload,
  }),
};

export const login = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.LoginSuccessfulAction: {
      return {...state, user: payload.user, token: payload.token};
    }
    default:
      return state;
  }
};
