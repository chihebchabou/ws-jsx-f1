import React from 'react';

const CategoryItem = props => {
  const { category } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={category.image}
          style={{ height: 200, objectFit: 'cover' }}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="text-primary">{category.categoryName}</h3>
          <p className="card-text">{category.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
