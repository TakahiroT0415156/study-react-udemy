import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../Components/providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
