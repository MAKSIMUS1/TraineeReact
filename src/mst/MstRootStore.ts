import { Instance, types } from "mobx-state-tree";
import { AuthModel } from "./AuthModel";
import React from "react";

export const MstRootStore = types.model("MstRootStore", {
    auth: AuthModel,
});

export const mstRootStore = MstRootStore.create({
    auth: {
        email: "",
        password: "",
    }
});

export type MstRootStoreInstance = Instance<typeof MstRootStore>;
export const MstContext = React.createContext<MstRootStoreInstance>(mstRootStore);
export const useMstStore = () => React.useContext(MstContext);