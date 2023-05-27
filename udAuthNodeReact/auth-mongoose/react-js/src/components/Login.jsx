import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (event) => { event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email'), password = data.get('password');
    console.log({email, password}, JSON.stringify({email, password}));
    const resp = await fetch("/api/login", { //http://localhost:8000
      method: "POST", credentials: "include", //mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    });
    const jsnData = await resp.json(); setRedirect(true); console.log(jsnData);
  };

  if(redirect) {
    return <Navigate to="/" />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{marginTop:8, display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Typography component="h1" variant="h5">Please sign in</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" id="email" name="email" autoComplete="email"
              label="Email Address" autoFocus required fullWidth />
            <TextField margin="normal" id="password" name="password" type="password"
              label="Password" autoComplete="current-password" required fullWidth />
            <Button type="submit" variant="contained" sx={{ mt:3, mb:2 }} fullWidth>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
