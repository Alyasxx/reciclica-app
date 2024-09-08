import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/LoginState";

export interface AppState {
  [x: string]: any;
  loading: LoadingState;
  login: LoginState;
}
