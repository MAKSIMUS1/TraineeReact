import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validation";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { setEmail, setPassword } from "../store/reducers/AuthSlice";

const LoginReduxPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

        const { email, password } = useSelector(
            (state: RootState) => state.authReducer
        )

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        const isValid = !emailError && !passwordError;

        const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            
            if(!isValid) return;

            navigate('/login-redux/success');
        }

        return (
            <Card className="login-page" variant="outlined">
                <Typography variant="h4" className="login-title">
                    Вход (Redux)
                </Typography>

                <Box component="form" onSubmit={handleSubmit} className="login-form">
                    <TextField 
                        label="Email"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                        error={!!emailError}
                        helperText={emailError}
                        fullWidth
                    />

                    <TextField 
                        label="Password"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                        error={!!passwordError}
                        helperText={passwordError}
                        fullWidth
                    />

                    <Button type="submit" variant="contained" className="login-submit">
                        Войти
                    </Button>
                </Box>


                <Box className="login-preview">
                    <Typography variant="subtitle2">Данные:</Typography>
                    <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
                </Box>
            </Card>
    )
}

export default LoginReduxPage;