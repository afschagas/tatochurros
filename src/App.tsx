import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components';

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


export const App = () => {
  return (
    <AppThemeProvider>
      <ToastContainer autoClose={3000} />
      <DrawerProvider>

        <BrowserRouter >

          <MenuLateral>
            <AppRoutes />

          </MenuLateral>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};


