import React from 'react';

import './Collection.scss';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

const Collection = ({ match }) => {
  console.log(match.params);
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default Collection;
