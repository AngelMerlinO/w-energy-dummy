import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogIn from '../pages/LogIn';
import Main from '../pages/Main';
import Register from '../pages/Register';
import UserContext from '../contexts/UserContext.js';
import DevicesContext from '../contexts/DevicesContext';

function App() {
  const [Devices, setDevices] = useState(false);
  const [User, setUser] = useState({
      isDropdownVisible: false,
      isDropdownVisibleMenu: false,
    leftColumn: true,
      rightColumn: true,
      User: {
        id: null,
      },

    });
  return (
    <UserContext.Provider value={{ User, setUser }}>
      <DevicesContext.Provider value={{ Devices, setDevices }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      </DevicesContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
