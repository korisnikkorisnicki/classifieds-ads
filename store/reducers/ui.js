import { CHANGE_DARK_MODE } from "../actions/ui";

import { LightModeColors, DarkModeColors } from "../../constants/Colors";

const initialState = {
  darkMode: false,
  colors: LightModeColors,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
        colors:
          state.colors === LightModeColors ? DarkModeColors : LightModeColors,
      };
  }

  return state;
};
