import React from 'react';

import './collection-item.styles.scss';

import CustomButton from '../custom-buttom/custom-button.component';

const CollectionItem = ( { id, name, price, imageUrl } ) => (

  <div className="collection-item">
    <div className="image" style={
      {
        backgroundImage: `url(${imageUrl})`
      }
    }/>
    <div className="collection-footer">
      <div className="name">{ name }</div>
      <div className="price">{ price }</div>
    </div>
    <CustomButton inverted>Add To Cart</CustomButton>
  </div>

)

export default CollectionItem;