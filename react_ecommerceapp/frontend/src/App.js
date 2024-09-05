import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logout } from './slices/authSlice';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkTokenExpiration = async () => {
      try {
        const expirationTime = localStorage.getItem('expirationTime');
        if (expirationTime) {
          const currentTime = new Date().getTime();

          if (currentTime > expirationTime) {
            dispatch(logout());
          }
        }
      } catch (error) {
        console.error('Error checking token expiration:', error);
      }
    };

    checkTokenExpiration();
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
