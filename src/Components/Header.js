import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { CoinState } from '../CoinContext';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  }
}))

const Header = () => {

  const titleClass = useStyles();
  const navigate = useNavigate();
  const {curr, setCurr} = CoinState()
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={() => { navigate('/') }} className={titleClass.title} variant='h6'>
              Coin Watch
            </Typography>

            <Select
              variant='outlined'
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={curr}
              onChange={(e) => {
                setCurr(e.target.value)
              }}
            >
              <MenuItem value={"USD"}>
                USD
              </MenuItem>
              <MenuItem value={"AUD"}>
                AUD
              </MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header