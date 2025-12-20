import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { emailRegex } from '../utils/validation';
import AuthCard from './AuthCard';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const validate = () => {
        const newErrors = { email: '', password: ''}
      
        if(!emailRegex.test(email)) {
            newErrors.email = 'Введите корректную почту'
        }

        if(password.length < 6) {
            newErrors.password = 'Минимум 6 символов'
        }

        setErrors(newErrors);
        return !newErrors.email && !newErrors.password
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!validate()) 
            return

        console.log({email, password})

        setEmail('')
        setPassword('')
    }
    
    return (
        <AuthCard  variant="outlined" className="login-card">
          <Typography
            component="h1"
            variant="h4"
            className="login-title"
          >
            Вход
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="login-form">
            <FormControl className="login-control">
              <FormLabel>Email</FormLabel>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                placeholder="your@email.com"
                required
                fullWidth
              />
              
            </FormControl>

            <FormControl className="login-control">
              <FormLabel>Пароль</FormLabel>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                placeholder="••••••"
                required
                fullWidth
              />
            </FormControl>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="login-submit"
            >
              Войти
            </Button>
          </Box>
          <Box className="login-preview">
            <Typography variant="subtitle2">
                Данные:
            </Typography>
            <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
          </Box>
        </AuthCard>
  );
}

export default LoginPage;