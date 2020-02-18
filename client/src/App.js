import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { GlobalStyle } from './global.styles';

import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const CheckOut = lazy(() => import('./pages/CheckOut/CheckOut'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const SignInSignUp = lazy(() => import('./pages/SignInSignUp/SignInSignUp'));

const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // componentDidMount() {
  //   checkUserSession();
  //   // This is where you load the data
  //   // addCollectionAndDocuments(
  //   //   'collections',
  //   //   collections.map(({ title, items }) => ({ title, items }))
  //   // );
  //   // });
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
