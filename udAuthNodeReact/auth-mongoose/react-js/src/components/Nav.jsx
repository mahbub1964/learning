import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/authSlice";

const { augmentColor } = createTheme().palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: { white: createColor('#FFFFFF'), // violet: createColor('#BC00A3'),
} });

export default function Nav() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.value);

  const logout = async () => {
    const resp = await fetch("/api/logout", { //http://localhost:8000
      method:"POST", credentials: "include"
    });
    const jsnData = await resp.json(); console.log(jsnData);
    dispatch(setAuth(false));
  };

  let links; if (auth) { links =
    <Link to="/" onClick={logout}><Button color="white">Logout</Button></Link>
  } else { links = <>
    <Link to="/login"><Button color="white">Login</Button></Link>
    <Link to="/register"><Button color="white">Register</Button></Link>
  </> }

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/"><Button color="white">Home</Button></Link>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          {links}
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
