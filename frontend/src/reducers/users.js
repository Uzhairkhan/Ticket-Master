const userInitalState = {};

const userReducer = (state = userInitalState, action) => {
  switch (action.type) {
    case "LOG_USER": {
      return { ...action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;
