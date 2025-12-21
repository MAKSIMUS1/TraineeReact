import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Typography } from "@mui/material"

const LoginSuccessPage = () => {
    const { email, password } = useSelector(
        (state: RootState) => state.authReducer
    )

    return (
        <>
            <Typography variant="h4">
                Успешный вход с redux
            </Typography>
            <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
        </>
    )
}

export default LoginSuccessPage;