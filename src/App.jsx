import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite'
import { useContext, useState, useEffect} from 'react';
import { Context } from './index';
import {check} from './http/userApi'
import { Spinner } from 'react-bootstrap';
const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
}, [])
    
  if (loading) {
    return <Spinner animation={"grow"}></Spinner>
  }
  return (
    <>
    <Header />
      <AppRouter />
    <Footer />
    </>
  );
})

export default App;