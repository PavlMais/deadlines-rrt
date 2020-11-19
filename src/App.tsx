import React, { Dispatch, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css'


const Deadlines = React.lazy(() => import('./components/Deadlines'))
const LoginPage = React.lazy(() => import('./components/Login'))

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Nav/>
      <div className='mbox'>

      <Switch>
        <Route exact path='/' render={() => <Deadlines />} />
        <Route exact path='/login' render={() => <LoginPage />} />
      </Switch>
      </div>
    </Suspense>
  );
}


export default App;
