import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import CssBaseline from '@mui/material/CssBaseline'

export const AppProvider = ({children} : {children: React.ReactNode}) => {
  return <ThemeProvider theme={theme}>
    <CssBaseline>
      {children}
    </CssBaseline>
  </ThemeProvider>
}