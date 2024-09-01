import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import SignIn from './SignIn';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './Firebase'; // Ensure you are importing 'auth' correctly // Import your custom hook
import { useStateValue } from './Stateprovider';
const MyComponent = ({ isMobile }) => {
  const containerStyle = {
    width: isMobile ? '90%' : '100%',
  };
}
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // This will only run once when the App component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]); 

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route 
            path='/SignIn' 
            element={
              <>
                <SignIn />
              </>
            } 
          />
          <Route 
            path='/checkout' 
            element={
              <>
                <Header />
                <Checkout />
              </>
            } 
          />
          <Route 
            path='/' 
            element={
              <>
                <Header />
                <Home />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
