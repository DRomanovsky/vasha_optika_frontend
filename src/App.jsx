import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite'
import { useContext, useState, useEffect} from 'react';
import { Context } from './index';
import {check} from './http/userApi'

const App = observer(() => {
  const {user} = useContext(Context)

  useEffect(() => {
    check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
    })
}, [])
    
  return (
    <>
    <Header />
      <AppRouter />
    <Footer />
    </>
  );
})

export default App;