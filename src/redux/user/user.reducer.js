import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, error: null };

    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default userReducer;
