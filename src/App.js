import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import CheckOut from './pages/CheckOut/CheckOut';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';

import Header from './components/Header/Header';

import {
  createUserProfileDocument,
  auth,
  addCollectionAndDocuments
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collections } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments('collections', collections);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

// A function that gets a dispatch argument and returns an object.
// where the prop name (or object field) will be whatever the prop we want to pass in that dispatches the new action (Ex: setCurrentUser action)
// return setCurrentUser that goes to a function that gets the user object and then calls dispatch
// dispatch is a way for redux to know that whatever object you're going to pass me is going to be an action object that its going to pass to every reducer
// so we will call the setCurrentUser inside the dispatch as it will be return the action object
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
