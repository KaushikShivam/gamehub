import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import CheckOut from './pages/CheckOut/CheckOut';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';

import Header from './components/Header/Header';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

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
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
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
