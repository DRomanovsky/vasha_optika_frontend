import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserStore from './store/userStore';
import GoodsStore from './store/goodsStore';
import ServicesStore from './store/servicesStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
        user: new UserStore(),
        goods: new GoodsStore(),
        services: new ServicesStore(),
    }}>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />}/>
          </Routes>
      </BrowserRouter>
      </Context.Provider>
  </React.StrictMode>
);
