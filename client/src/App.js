import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import HomePage from "./scenes/homePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state)=>state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/profile/:id" element={<ProfilePage/>}/>
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
