import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Typography } from "@mui/material"

const LoginFormikSuccessPage = () => {
    const { email, password } = useSelector(
        (state: RootState) => state.authFormikReducer
    )

    return (
        <>
            <Typography variant="h4">
                Успешный вход с formik
            </Typography>
            <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
        </>
    )
}

export default LoginFormikSuccessPage;