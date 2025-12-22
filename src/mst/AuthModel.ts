import { types } from "mobx-state-tree";
import { setCredentials } from "../store/reducers/AuthFormikSlice";

export const AuthModel = types
    .model("AuthModel", {
        email: types.string,
        password: types.string,
    })
    .actions((self) => ({
        setCredentials(email: string, password: string) {
            self.email = email;
            self.password = password;
        },
    }));