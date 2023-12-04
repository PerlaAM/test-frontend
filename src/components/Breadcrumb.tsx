import React from 'react';

export default function Breadcrumb(props: any) {
  const { categories } = props;
  const lastCategoryIndex = categories.length - 1;

  return (
    <div className='container-breadcrumb'>
      <div className='box'>
        <p className='path'>
          {categories.map((category: any, index: number) => (
            <span key={index}>
              {index === lastCategoryIndex ? (
                <strong>{category}</strong>
              ) : (
                category
              )}
              {index < lastCategoryIndex && ' > '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
