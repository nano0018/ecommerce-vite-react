import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../utils/AppRoutes';
import '../../styles/App.css';
import { NavBar } from './../../components/navbar/index';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';

export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};
