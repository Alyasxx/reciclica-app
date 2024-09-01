import { AppInitialState } from "../AppInitialState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { loginReducer } from "./login.reducers";
import { LoginState } from "./LoginState"

describe("Login store", () => {

  it('recoverPassword', () => {
    const initialState: LoginState = AppInitialState.login;
    const newState = loginReducer(initialState, recoverPassword());
    expect(newState).toEqual({
      ...initialState,
      isRecoveringPassword: true,
      isRecoveredPassword: false
    })
  })

  it('recoverPasswordSuccess', () => {
    const initialState: LoginState = AppInitialState.login;
    const newState = loginReducer(initialState, recoverPasswordSuccess());
    expect(newState).toEqual({
      ...initialState,
      isRecoveringPassword: false,
      isRecoveredPassword: true
    })
  })

  it('recoverPasswordFail', () => {
    const initialState: LoginState = AppInitialState.login;
    const error = {error: 'error'};const newState = loginReducer(initialState, recoverPasswordFail({error}));
    expect(newState).toEqual({
      ...initialState,
      error,
      isRecoveringPassword: false,
      isRecoveredPassword: false
    })
  })

})
