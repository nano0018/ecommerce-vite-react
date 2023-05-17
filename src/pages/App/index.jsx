import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../utils/AppRoutes';
import '../../styles/App.css';
import NavBar from './../../components/navbar/index';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
