import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import useCreateMuiTheme from "hooks/useCreateMuiTheme";
import {useTranslation} from "react-i18next";
import {RouterProvider} from "react-router-dom";
import Routes from "pages/routes";

function App() {
  const {i18n:{dir}} = useTranslation()
  const theme = useCreateMuiTheme()
  const router = Routes()
  return (
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
        <ToastContainer
            position={`${dir()==='rtl'?"bottom-right":"bottom-left"}`}
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={dir() === 'rtl'}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
      </ThemeProvider>
  );
}

export default App;
