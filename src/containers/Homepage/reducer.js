const initialAuthState = { isLoggedIn: false };

export const homepage = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'Discover':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
