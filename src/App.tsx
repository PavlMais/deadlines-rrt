import React, { Dispatch, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import Nav from './components/Nav/';
import './App.css'
import { RootState } from './store';
import { connect } from 'react-redux';

const HomePage = React.lazy(() => import('./components/Home'))
const LoginPage = React.lazy(() => import('./components/Login/'))
const RegisterPage = React.lazy(() => import('./components/Register'))
const DeadlinesPage = React.lazy(() => import('./components/Deadlines/'))
const DeadlinePage = React.lazy(() => import('./components/Deadline/'))
const NotExistPage = React.lazy(() => import('./components/NotExist/'))


const App = (session: SessionState) => {

  console.log(session.isLogined);
    

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className='bp3-dark'>

        <Nav />
        <div className='mbox'>

          <Switch>
            <Route exact path='/' render={() => <HomePage/>}/>
            <Route exact path='/login' render={() => <LoginPage />} />
            <Route exact path='/register' render={() => <RegisterPage/>}/>
            
            <PrivateRoute exact path='/deadline/:id' component={DeadlinePage} isLoggedIn={session.isLogined}/>
            <PrivateRoute exact path='/deadlines' component={DeadlinesPage} isLoggedIn={session.isLogined}/>

            <Route exact render={() => <NotExistPage/>}/>
            
          </Switch>
        </div>
      </div>
    </Suspense>
  );
}

const mapProps = (state: RootState) => state.session

export default connect(mapProps)(App);
