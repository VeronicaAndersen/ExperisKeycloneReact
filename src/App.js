import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Login from './View/Login/Login';
import Profile from './View/Profile/Profile';

import KeycloakRoute from "./Routes/KeycloakRoute";
import { ROLES } from "./Const/roles";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path="/profile"
            element={
              <KeycloakRoute role={ROLES.User}>
                <Profile />
              </KeycloakRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
