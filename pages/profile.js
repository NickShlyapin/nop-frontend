import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveAppBar from "@/components/header/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function profile() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResponsiveAppBar />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 128, height: 128 }}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default profile;
