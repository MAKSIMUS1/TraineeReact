import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useMstStore } from "../mst/MstRootStore";
import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";

const LoginMstPage = observer(() => {
    const navigate = useNavigate();
    const { auth } = useMstStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    const isValid = !emailError && !passwordError;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!isValid) 
            return;
        
        auth.setCredentials(email, password);
        navigate("/login-mst/success");
    }

    return (
        <Card className="login-page">
            <Typography variant="h4">
                Вход (MST)
            </Typography>
            <Box component="form" onSubmit={handleSubmit} className="login-form">
                <TextField 
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!emailError}
                    helperText={emailError}
                    fullWidth
                />

                <TextField 
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!passwordError}
                    helperText={passwordError}
                    fullWidth
                />
                
                <Button type="submit" variant="contained">
                    Войти
                </Button>
            </Box>
        </Card>
    );
});

export default LoginMstPage;