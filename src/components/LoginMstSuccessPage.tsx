import { observer } from "mobx-react-lite";
import { useMstStore } from "../mst/MstRootStore";
import { Typography } from "@mui/material";

const LoginMstSuccessPage = observer(() => {
    const { auth } = useMstStore();

    return (
        <>
            <Typography variant="h4">
                Успешный вход с MST
            </Typography>
            <pre>{JSON.stringify(auth, null, 2)}</pre>
        </>
    )
});

export default LoginMstSuccessPage;