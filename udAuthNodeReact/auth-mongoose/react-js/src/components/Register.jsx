import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export const Register = () => {
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget), email = data.get('email');
    const firstName = data.get('firstName'), lastName = data.get('lastName');
    const password = data.get('password'), passwordConfirm = data.get('passwordConfirm');
    const resp = await fetch("/api/register", { method: "POST", //http://localhost:8000
      headers: {"Content-Type": "application/json"}, body: JSON.stringify({first_name:
      firstName, last_name:lastName, email, password, password_confirm:passwordConfirm
    })});
    await resp.json(); setRedirect(true); //const jsnData = //console.log(jsnData);
  };

  if(redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{marginTop:8, display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Typography component="h1" variant="h5">Please register</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" id="firstName" name="firstName"
              label="First Name" autoFocus required fullWidth />
            <TextField margin="normal" id="lastName" name="lastName"
              label="Last Name" required fullWidth />
            <TextField margin="normal" id="email" name="email"
              label="Email address" autoComplete="email" required fullWidth />
            <TextField margin="normal" id="password" name="password"
              label="Password" type="password" required fullWidth />
            <TextField margin="normal" id="passwordConfirm" name="passwordConfirm"
              label="Password Confirm" type="password" required fullWidth />
            <Button type="submit" variant="contained" sx={{ mt:3, mb:2 }} fullWidth>
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
