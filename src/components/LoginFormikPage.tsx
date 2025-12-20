import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validation";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { setCredentials } from "../store/reducers/AuthFormikSlice";
import { Formik } from "formik";

interface FormValues {
    email: string;
    password: string;
}

const LoginFormikPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
        const initialValues: FormValues = {
            email: '',
            password: '',
        }

        const validate  = (values: FormValues) => {
            const errors: Partial<FormValues> = {};

            const emailError = validateEmail(values.email);
            const passwordError = validatePassword(values.password);

            if (emailError) errors.email = emailError;
            if (passwordError) errors.password = passwordError;

            return errors;
        }

        const handleSubmit = (values: FormValues) => {
            dispatch(setCredentials(values));
            navigate('/login-formik/success');
        }

        return (
            <Card className="login-page" variant="outlined">
                <Typography variant="h4" className="login-title">
                    Вход (Formik)
                </Typography>

                <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit
                    }) => (

                    <Box component="form" onSubmit={handleSubmit} className="login-form">
                        <TextField 
                        name="email"
                        label="Email"   
                        value={values.email}
                        onChange={handleChange}
                        error={!!errors.email && touched.email}
                        helperText={touched.email && errors.email}
                        fullWidth
                        />

                        <TextField 
                        name="password"
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                        error={!!errors.password && touched.password}
                        helperText={touched.password && errors.password}
                        fullWidth
                        />

                        <Button type="submit" variant="contained" className="login-submit">
                            Войти
                        </Button>
                    </Box>

                    )}

                </Formik>


                <Box className="login-preview">
                    <Typography variant="subtitle2">Данные:</Typography>
                    <pre>{JSON.stringify(initialValues, null, 2)}</pre>
                </Box>
            </Card>
    )
}

export default LoginFormikPage;