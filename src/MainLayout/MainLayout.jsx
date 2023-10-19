
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../Component/Footer/Footer';
import Rating from 'react-rating';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
      
    </div>
  );
};

export default MainLayout;