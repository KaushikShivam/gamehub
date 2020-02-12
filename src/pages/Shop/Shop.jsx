import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from './../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';

import { updateCollections } from './../../redux/shop/shop.actions';

import {
  firestore,
  convertCollectionSnapshotToMap
} from './../../firebase/firebase.utils';

class Shop extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(Shop);
