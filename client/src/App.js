import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { GlobalStyle } from './global.styles';

import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const CheckOut = lazy(() => import('./pages/CheckOut/CheckOut'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const SignInSignUp = lazy(() => import('./pages/SignInSignUp/SignInSignUp'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    //Add data here
    // addCollectionAndDocuments(
    //   'collections',
    //   collectionsArray.map(({ title, items }) => ({ title, items }))
    // );
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
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
      </ErrorBoundary>
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
