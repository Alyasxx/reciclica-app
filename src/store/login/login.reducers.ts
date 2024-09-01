import { Action, createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
  on(recoverPassword, currentState => {
    return {
      ...currentState,
      error: null,
      isRecoveringPassword : true,
      isRecoveredPassword : false
    };
  }),
  on(recoverPasswordSuccess, currentState => {
    return {
      ...currentState,
      error: null,
      isRecoveringPassword : false,
      isRecoveredPassword : true
    };
  }),
  on(recoverPasswordFail, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      isRecoveringPassword : false,
      isRecoveredPassword : false
    };
  })
)

export function loginReducer(state: LoginState, action: Action<string>){
  return reducer(state, action);
}
