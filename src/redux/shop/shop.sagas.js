import { takeEvery, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionSnapshotToMap
} from './../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch(error => dispatch(fetchCollectionsFailure(error)));
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
