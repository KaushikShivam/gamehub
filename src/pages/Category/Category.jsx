import React from 'react';

import './Category.scss';

import CollectionItem from './../../components/CollectionItem/CollectionItem';

const Category = ({ match }) => {
  console.log(match.params);
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

export default Category;
